import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataTableService {
    baseApiUrl: string;
    constructor(private http: HttpClient) { }
    getData(route) {
        return this.http.get(this.baseApiUrl + '/' + route, {responseType: 'text'});
    }
    editData(route, data) {
        return this.http.put(`${this.baseApiUrl}/${route}`, data, {responseType: 'text'})
        .pipe(
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }
    deleteData(route, paramValue) {
        const endPoint = route.split(':')[0];
        return this.http.delete(`${this.baseApiUrl}/${endPoint}${paramValue}`)
        .pipe(
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }
    deleteDataByMeasure(route, paramValue) {
      const endPoint = route.split(':')[0];
      return this.http.delete(`${this.baseApiUrl}/${endPoint}?unit=${paramValue}`, {responseType: 'text'})
        .pipe(
          catchError(errorRes => {
            return throwError(errorRes);
          })
        );
    }
    createData(route, data){
        return this.http.post(`${this.baseApiUrl}/${route}`, data, {responseType: 'text'})
        .pipe(
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }

  getCountByManufacturer(route, manufacturerId) {
    const endPoint = route.split(':')[0];
    return this.http.get(`${this.baseApiUrl}/${endPoint}?manufactureId=${manufacturerId}`, {responseType: 'text'});
  }

  getUniqueManufactureCosts(route) {
    const endPoint = route.split(':')[0];
    return this.http.get(`${this.baseApiUrl}/${endPoint}`, {responseType: 'text'});
  }

  getProductsByManufactureId(route, manufactureId) {
    const endPoint = route.split(':')[0];
    return this.http.get(`${this.baseApiUrl}/${endPoint}?manufactureId=${manufactureId}`, {responseType: 'text'});
  }

  getProductsByPrice(route, minPrice, maxPrice) {
    const endPoint = route.split(':')[0];
    return this.http.get(`${this.baseApiUrl}/${endPoint}?minPrice=${minPrice}maxPrice=${maxPrice}}`, {responseType: 'text'});
 }
}
