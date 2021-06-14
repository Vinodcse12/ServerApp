import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {

  constructor(private http: HttpClient) { }

  getServersData(minParam: any, maxParam: any, ramParam: any, hddParam: any, locParam: any) {
    return this.http.get(`${environment.apiUrl}/servers`, createHttpParams(
      {
        storageMin: minParam,
        storageMax: maxParam,
        ram: ramParam.toString(),
        hdd: hddParam.toString(),
        location: locParam
      }
      ))
  }
}

/**
 * Create query params based on provided request object keys and values
 */
 export const createHttpParams = (requestObject: Object = {}) => {
  let params = new HttpParams();
  Object.entries(requestObject).forEach(([key, value]) => {
    if(value != '') {
      if (value instanceof Array)
      for (const v of value) {
        params = params.append(key, v.toString());
      }
      else params = params.append(key, value.toString());
    }    
  });
  return { params };
};
