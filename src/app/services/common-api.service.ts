import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  
  storageMax = new Subject();
  storageMin = new Subject();
  selectedRams = new Subject();
  selectedHdds = new Subject();
  selectedLocation = new Subject();
  constructor(private http: HttpClient) { }

  getCommonData() {
    return this.http.get('../../assets/commom-data.json');
  }

  setMaxStorage(maxVal: any) {
    this.storageMax.next((maxVal));
  }

  setMinStorage(minVal: any) {
    this.storageMin.next((minVal));
  }

  setSelectedRams(ramValues: any) {
    this.selectedRams.next(ramValues);
  }

  setSelectedHdds(hddValues: any) {
    this.selectedHdds.next(hddValues);
  }

  setSelectedLocation(locValue: any) {
    if(locValue === 'Choose ...') {
      locValue = '';
    }
    this.selectedLocation.next(locValue);
  }
}
