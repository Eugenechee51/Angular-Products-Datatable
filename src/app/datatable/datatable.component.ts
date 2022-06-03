import {DataTableService} from './dataTable.service';
import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';
import {DecimalPipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import parser from 'xml2js';
import {trim} from 'jquery';


function parseXml(xmlData: any) {
    let result;
    parser.Parser().parseString(xmlData, (e, r) => {result = r; });
    return result;
}



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-table',
  styleUrls: ['./datatable.component.scss'],
  templateUrl: './datatable.component.html',
  providers: [DataTableService, DecimalPipe]
})

export class DataTableComponent implements OnDestroy, OnInit, AfterViewInit {

  @Input() customDtOptions: any;
  @ViewChild('addEditModal') addEditModalRef: ElementRef;
  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  primaryColumns: any;
  addColumns: any;
  currentRecord: any;
  data: any;
  currentOperation: any;
  templateDataObject: any;
  showLoader = false;
  constructor(private dataTableService: DataTableService, private modalService: NgbModal
    ,         private decimalPipe: DecimalPipe, private toastr: ToastrService) { }

  ngOnInit(): void {
    // welcome
    const scope = this;
    this.showLoader = true;
    const columns = [...this.customDtOptions.dataTableOptions.columns];
    this.addColumns = Object.assign({}, this.customDtOptions.dataTableOptions.columns);
    this.addColumns = [
      { title: 'Название', data: 'name', format: 'text'},
      { title: 'Коорд. х', data: 'coordinates.0.x'},
      { title: 'Коорд. у', data: 'coordinates.0.y' },
      { title: 'Цена', data: 'price', format: 'text' },
      { title: 'Цена производителя', data: 'manufactureCost'},
      { title: 'Ед. измерения', data: 'unitOfMeasure', format: 'text'},
      { title: 'Имя производ.', data: 'manufacturer.0.name' },
      { title: 'Полное имя производ.', data: 'manufacturer.0.fullName'},
      { title: 'Число сотрудников', data: 'manufacturer.0.employeesCount'},
      { title: 'Тип компании', data: 'manufacturer.0.type'}];
    // this.addColumns = [...this.addColumns];
    this.primaryColumns = columns;
    console.log(this.addColumns);
    console.log(this.primaryColumns);
    const columnDefs = this.customDtOptions.dataTableOptions.columns.map((col, index) =>
      ({
        targets: index,
        className: 'dt-center',
        render: (cellData, type, row) =>
          col.format === 'text' ? cellData :
            col.format === 'number' && !isNaN(cellData) ? this.decimalPipe.transform(cellData, '2.') :
              col.format === 'amount' && !isNaN(cellData) ? '$' + this.decimalPipe.transform(cellData / 1000, '2.') + 'K' : cellData
      }));
    columnDefs.push({
      targets: columnDefs.length,
      className: 'dt-center',
      render: (data, type, row) => `<div class="d-flex justify-content-around">
                  <img id="editRecordBtn" class="editButton"  style="width: 1.3rem; height: auto"  src="../../assets/edit_512px.png">
                  <img id="deleteRecordBtn" class="deleteButton" style="width: 1.3rem; height: auto" src="../../assets/delete_bin_512px.png">
             </div>`
      ,
      fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
        $(nTd).find('#editRecordBtn').on('click', () => this.openAddEditModal(iRow));
        $(nTd).find('#deleteRecordBtn').on('click', () => this.removeRecord(iRow));
      }
    });
    this.customDtOptions.dataTableOptions.columns.push({ title: 'Действия', data: null });
    const language = {
        processing: 'Подождите...',
        search: 'Поиск:',
        lengthMenu: 'Показать _MENU_ записей',
        info: 'Записи с _START_ до _END_ из _TOTAL_ записей',
        infoEmpty: 'Записи с 0 до 0 из 0 записей',
        infoFiltered: '(отфильтровано из _MAX_ записей)',
        loadingRecords: 'Загрузка записей...',
        zeroRecords: 'Записи отсутствуют.',
        emptyTable: 'В таблице отсутствуют данные',
        paginate: {
        first: 'Первая',
        previous: 'Предыдущая',
        next: 'Следующая',
        last: 'Последняя'
        }
        };
    this.dtOptions = {
      dom: 'lfr<"toolbar">tip',
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'Все']],
      responsive: false,
      autoWidth: false,
      language,
      initComplete: () => {
        console.log('InitComplete');
        $('div.toolbar').html(`<button type="button" id="addRecordBtn" class="btn btn-primary float-right px-2 py-1  mr-3" >Добавить новый продукт</button>`);
        $('div.toolbar').find('#addRecordBtn').on('click', () => scope.openAddEditModal(-1));

      },
      ...this.customDtOptions.dataTableOptions,
      columnDefs
    };
    this.dataTableService.baseApiUrl = this.customDtOptions.baseApiUrl;
    const measure = document.getElementById('measureField') as HTMLInputElement | null;
    console.log(measure.value);
    $('div.container').find('#delByMeasureBtn').on('click', () => scope.removeByMeasure(measure.value));

    const manufacturerId = document.getElementById('manufacturerIdField') as HTMLInputElement | null;
    $('div.container').find('#countByManufacturerIdBtn').on('click', () => scope.getCountByManufacturer(manufacturerId.value));
    $('div.container').find('#getUniqueManufactureCostBtn').on('click', () => scope.getUniqueManufactureCost());
    this.getData(false);
  }

  ngAfterViewInit(): void {
    this.dtTrigger.subscribe(() => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function() {
          const that = this;
          $('input', this.footer()).on('keyup change', function() {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
      });
    });
  }

  getData(flag) {  // flag for getData() call without rerender in NgOnInit()
    this.dataTableService.getData(this.customDtOptions.get).subscribe((res: any) => {
      if (res === null) {
        console.log('null');
        // this.rerender();
        if (flag) {
          this.rerender();
        }
        else {
          this.dtTrigger.next();
          this.showLoader = false;
        }
        return;
      }
      this.data = res;
      // console.log(this.data);
      this.data = parseXml(this.data);
      this.data = this.data.ArrayList.item;
      // console.log(this.data);
      this.dtOptions.data = this.data;
      this.templateDataObject ? '' : this.templateDataObject = Object.fromEntries(Object.keys(this.data[0]).map(key => [key, '']));
      // this.templateDataObject = 0;
      // console.log("templateDataObject: " + this.templateDataObject);
      if (flag) {
        this.rerender();
      }
      else {
        this.dtTrigger.next();
        this.showLoader = false;
      }
    }, (err) => {
      console.log('Ошибка получения продуктов', err.message);
      this.toastr.error(err.message, 'Ошибка получения продуктов');
    });
  }
  require(elem: any, check: boolean) {
    elem.prop('required', check);
    elem.prop('ng-reflect-required', check);
  }
  manufactureRequire(form, colData) {
    // tslint:disable-next-line:variable-name
    if (form.controls[colData]?.touched || form.controls[colData]?.dirty){
      if (colData in ['manufacturer.0.name', 'manufacturer.0.fullName', 'manufacturer.0.type'] ) {
        if (trim(form.value['manufacturer.0.name']) === '' && trim(form.value['manufacturer.0.fullName']) === '' && trim(form.value['manufacturer.0.type']) === ''){
          return false;
        } else {
          return true;
        }
      } else {
        return form.controls[colData]?.invalid;
      }
    }
    // const m_name = $('#input_m_name');
    // const full_name = $('#input_m_fullName');
    // // const employees_count = $('#input_m_employeesCount');
    // const m_type = $('#input_m_type');
    // console.log(formValue['manufacturer.0.name']);
    // if (trim(formValue['manufacturer.0.name']) !== '' || trim(formValue['manufacturer.0.fullName']) !== '' || trim(formValue['manufacturer.0.type']) !== '') {
    //   this.require(m_name, true);
    //   this.require(full_name, true);
    //   // this.require(employees_count, true);
    //   this.require(m_type, true);
    // } else {
    //   this.require(m_name, false);
    //   this.require(full_name, false);
    //   // this.require(employees_count, false);
    //   this.require(m_type, false);
    // }
  }
  openAddEditModal(iRow) {
    // if (iRow === -1)
      // iRow = 0;
    if (iRow !== -1) {
      this.currentOperation = 'Изменение';
      this.currentRecord = {
        id: this.data[iRow]?.id,
        name: this.data[iRow].name,
        'coordinates.0.x': this.data[iRow]['coordinates'][0]['x'][0],
        'coordinates.0.y': this.data[iRow]['coordinates'][0]['y'][0],
        price: this.data[iRow].price,
        manufactureCost: this.data[iRow].manufactureCost,
        unitOfMeasure: this.data[iRow].unitOfMeasure,
        'manufacturer.0.name': this.data[iRow]['manufacturer'][0]['name'],
        'manufacturer.0.fullName': this.data[iRow]['manufacturer'][0]['fullName'],
        'manufacturer.0.employeesCount': this.data[iRow]['manufacturer'][0]['employeesCount'],
        'manufacturer.0.type': this.data[iRow]['manufacturer'][0]['type']
      };
    } else {
      this.currentOperation = 'Добавление';
      this.currentRecord = [];
    }
    console.log('Current record: ' + this.currentRecord);
    this.modalService.open(this.addEditModalRef).result
      .then((result) => console.log('Modal closed'))
      .catch(err => '');
    // delete this.currentRecord.creationDate;
    // $('#input_name').on('change', () => {
    //
    // })
  }
  onAddEditFormSubmit(formValue) {
    this.showLoader = true;
    this.modalService.dismissAll();
    if (this.currentOperation === 'Добавление') {
      const json = {
        name: formValue.name,
        coordinates: {
          x: formValue['coordinates.0.x'],
          y: formValue['coordinates.0.y']
        },
        price: formValue.price,
        manufactureCost: formValue.manufactureCost,
        unitOfMeasure: formValue.unitOfMeasure,
        manufacturer: {
          name: formValue['manufacturer.0.name'],
          fullName: formValue['manufacturer.0.fullName'],
          employeesCount: formValue['manufacturer.0.employeesCount'],
          type: formValue['manufacturer.0.type']
        }, id: undefined

      };
      this.dataTableService.createData(this.customDtOptions.add, json).subscribe((res) => {
        console.log(res);
        this.currentRecord = null;
        this.currentOperation = '';
        this.toastr.success('Продукт добавлен успешно!', 'Успех');
        this.customDtOptions.eventCallbacks.added();
        this.getData(true);
      }, (err) => {
        console.log('Error Adding Record', err.message);
        this.toastr.error(err.message, 'Ошибка добавления продукта!');
        this.currentRecord = null;
        this.currentOperation = '';
        this.showLoader = false;
      });
    } else {
      const json = {
        id: this.currentRecord['id'][0],
        name: formValue.name.length > 1 ? formValue.name : formValue.name[0] ,
        coordinates: {
          x: formValue['coordinates.0.x'].length > 1 ? formValue['coordinates.0.x'] : formValue['coordinates.0.x'][0],
          y: formValue['coordinates.0.y'].length > 1 ? formValue['coordinates.0.y'] : formValue['coordinates.0.y'][0]
        },
        price: formValue.price.length > 1 ? formValue.price : formValue.price[0],
        manufactureCost: formValue.manufactureCost.length > 1 ? formValue.manufactureCost : formValue.manufactureCost[0],
        unitOfMeasure: formValue.unitOfMeasure.length > 1 ? formValue.unitOfMeasure : formValue.unitOfMeasure[0],
        manufacturer: {
          name: formValue['manufacturer.0.name'].length > 1 ? formValue['manufacturer.0.name'] : formValue['manufacturer.0.name'][0],
          fullName: formValue['manufacturer.0.fullName'].length > 1 ? formValue['manufacturer.0.fullName'] : formValue['manufacturer.0.fullName'][0],
          employeesCount: formValue['manufacturer.0.employeesCount'].length > 1 ? formValue['manufacturer.0.employeesCount'] : formValue['manufacturer.0.employeesCount'][0],
          type: formValue['manufacturer.0.type'].length > 1 ? formValue['manufacturer.0.type'] : formValue['manufacturer.0.type'][0]
        }
      };
      console.log(formValue['manufacturer.0.employeesCount'][0]);
      console.log(json);
      this.dataTableService.editData(this.customDtOptions.edit, json).subscribe((res) => {
        console.log(res);
        this.currentRecord = null;
        this.currentOperation = '';
        this.toastr.success('Продукт успешно изменен!', 'Успех');
        this.customDtOptions.eventCallbacks.edited();
        this.getData(true);
      }, (err) => {
        console.log('Error Editing Record', err.message);
        this.toastr.error(err.message, 'Ошибка изменения продукта!');
        this.currentRecord = null;
        this.currentOperation = '';
        this.showLoader = false;
      });
    }
  }

  removeRecord(iRow) {
    this.showLoader = true;
    this.currentRecord = this.data[iRow];
    const paramValue = this.currentRecord[this.customDtOptions.param];
    this.dataTableService.deleteData(this.customDtOptions.delete, paramValue).subscribe((res) => {
      console.log(res);
      this.currentRecord = null;
      this.currentOperation = '';
      this.toastr.success('Продукты удалены успешно', 'Успех');
      this.customDtOptions.eventCallbacks.deleted();
      this.getData(true);
      // this.rerender();

    }, (err) => {
      console.log('Ошибка удаления продуктов', err.message);
      this.toastr.error(err.message, 'Ошибка удаления продуктов');
      this.currentRecord = null;
      this.currentOperation = '';
      this.showLoader = false;
    });
  }

  removeByMeasure(measureType) {
      this.showLoader = true;
      this.dataTableService.deleteDataByMeasure(this.customDtOptions.deleteByMeasure, measureType).subscribe((res) => {
        console.log(res);
        this.currentRecord = null;
        this.currentOperation = '';
        this.toastr.success('Продукты удалены успешно', 'Успех');
        this.customDtOptions.eventCallbacks.deleted();
        this.getData(true);
      }, (err) => {
        console.log('Ошибка удаления продуктов', err.message);
        this.toastr.error(err.message, 'Ошибка удаления продуктов');
        this.currentRecord = null;
        this.currentOperation = '';
        this.showLoader = false;
      });
  }

  getCountByManufacturer(manufacturerId) {
    this.showLoader = true;
    this.dataTableService.getCountByManufacturer(this.customDtOptions.getByManufacturer, manufacturerId).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.data = parseXml(this.data);
      this.data = this.data.Count.count;
      console.log(this.data);
      this.currentRecord = null;
      this.currentOperation = '';
      if (trim(this.data) !== '0') {
        document.getElementById('p1').textContent = 'Продуктов подсчитано: ' + this.data;
        this.toastr.success('Продуктов подсчитано: ' + this.data, 'Успех');
      } else {
        document.getElementById('p1').textContent = 'У выбранного производителя нет продуктов.';
        this.toastr.info('У выбранного производителя нет продуктов.', 'Инфо');
      }
      this.customDtOptions.eventCallbacks.countedByManufacturer();
      this.getData(true);
    }, (err) => {
      console.log('Ошибка подсчета продуктов', err.message);
      this.toastr.error(err.message, 'Ошибка подсчета продуктов');
      document.getElementById('p1').textContent = 'Продукты не подсчитаны';
      this.currentRecord = null;
      this.currentOperation = '';
      this.showLoader = false;
    });
  }

  getUniqueManufactureCost(){
    this.showLoader = true;
    this.dataTableService.getUniqueManufactureCosts(this.customDtOptions.getUniqueManufactureCosts).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.data = parseXml(this.data);
      // this.data = this.data['Count']['count'];
      this.currentRecord = null;
      this.currentOperation = '';
      this.toastr.success('Продукты успешно найдены', 'Успех');
      // document.getElementById("p1").textContent = 'Products counted: '+ this.data;
      this.customDtOptions.eventCallbacks.countedByManufacturer();
      this.data = this.data.ArrayList.item;
      console.log(this.data);
      this.dtOptions.data = this.data;
      this.rerender();
    }, (err) => {
      console.log('Ошибка удаления записи', err.message);
      this.toastr.error(err.message, 'Ошибка удаления записи');
      this.currentRecord = null;
      this.currentOperation = '';
      this.showLoader = false;
    });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
      this.showLoader = false;
    }); /*
    this.dtTrigger.next();
    this.showLoader = false;*/
    console.log('Rerendered');
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
