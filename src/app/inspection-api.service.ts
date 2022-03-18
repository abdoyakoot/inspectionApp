import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InspectionApiService {
  readonly inspectionApiUrl = 'https://localhost:7005/api';
  constructor(private http: HttpClient) {}

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/Inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionApiUrl + '/Inspections', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/Inspections/${id}`, data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionApiUrl+`/Inspections/${id}`);
  }

  //InspectionTypes
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/InspectionTypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.inspectionApiUrl + '/InspectionTypes', data);
  }

  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/InspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.inspectionApiUrl+`/InspectionTypes/${id}`);
  }

  // Status
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionApiUrl + '/Status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionApiUrl + '/Status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionApiUrl + `/Status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionApiUrl+`/Status/${id}`);
  }

}
