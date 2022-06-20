import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  customDtOptions: any;
  constructor() { }
  ngOnInit(): void {
    this.customDtOptions = {
      baseApiUrl: "http://labvm-42-05.itmo-lab.cosm-lab.science:8080",
      // baseApiUrl: "http://localhost:8080",
      get: "products",
      edit: "products",
      add: "products",
      delete: "products/:id",
      deleteByMeasure: "products/measure",
      getByManufacturer: "products/measure",
      getUniqueManufactureCosts: "products/distinct",
      getProductsByManufactureId: "products/manufacture",
      getProductsByPrice: "products/price",
      param: "id",
      generateParamOnAdd:true,
      dataTableOptions: {
        columns: [
          { title: "ИД", data: "id"},
          { title: "Название", data: "name", format: "text"},
          { title: "Коорд. х", data: "coordinates.0.x"},
          { title: "Коорд. у", data: "coordinates.0.y" },
          { title: "Дата создания", data: "creationDate"},
          { title: "Цена", data: "price"},
          { title: "Цена производителя", data: "manufactureCost"},
          { title: "Ед. измерения", data: "unitOfMeasure", format: "text"},
          { title: "Производ. ИД", data: "manufacturer.0.id" },
          { title: "Имя производ.", data: "manufacturer.0.name" },
          { title: "Полное имя производ.", data: "manufacturer.0.fullName"},
          { title: "Число сотрудников", data: "manufacturer.0.employeesCount"},
          { title: "Тип компании", data: "manufacturer.0.type"}
        ]
      },
      eventCallbacks: {
        edited: function () {
          console.log("Product Edited");
        },
        added: function () {
          console.log("Product Added");
        },
        deleted: function () {
          console.log('Products Deleted');
        },
        countedByManufacturer: function () {
          console.log('Products counted by manufacturer');
        },
      }
    };
  }
}
