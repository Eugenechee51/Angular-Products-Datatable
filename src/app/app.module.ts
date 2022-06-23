import { DataTableComponent } from './datatable/datatable.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import {NgbModalModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';
import { CustomMinDirective } from './datatable/custom-min.directive';
import {CustomRequiredDirective} from './datatable/custom-required.directive';
import {CustomMaxLengthDirective} from './datatable/custom-maxlength.directive';
// import {NgxNumericRangeFormFieldModule} from 'ngx-numeric-range-form-field';
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ProductsComponent,
    CustomMinDirective,
    CustomRequiredDirective,
    CustomMaxLengthDirective,
  ],
    imports: [
        BrowserModule,
        DataTablesModule,
        FormsModule,
        HttpClientModule,
        NgbModalModule,
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({}),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NgbTooltipModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
