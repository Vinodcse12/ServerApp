import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { CommonApiService } from '../services/common-api.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
    
  value: number = 0;
  highValue: number = 10;
  form: FormGroup;
  options: Options = {
    showTicksValues: true,
    floor: 0,
    ceil: 10,
    stepsArray: [
      { value: 0, legend: "0" },
      { value: 1  },
      { value: 2, legend: "2TB" },
      { value: 3 },
      { value: 4, legend: "4TB" },
      { value: 5},
      { value: 6, legend: "6TB" },
      { value: 7 },
      { value: 8, legend: "8TB" },
      { value: 9 },
      { value: 10, legend: "10TB" }
    ]
  };
  storageMin: any;
  storageMax: any;
  
  hddList:any[]= [];
  locations:any[] = [];
  ramList: any[] = [];
  constructor(private formBuilder: FormBuilder, private commonServiceApi: CommonApiService) { 
    this.form = this.formBuilder.group({
      ramLi : this.formBuilder.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
    this.commonServiceApi.getCommonData()
      .pipe(
        map((res: any) => {
          return res;
        })
      ).subscribe((cmData: any) => {
        this.ramList = cmData.ramList;
        this.hddList = cmData.hddList;
        this.locations = cmData.locations;
      })
  }

  getRangeValue(e: any) {
    if(e.pointerType === 0) {
      this.storageMin = (e.value != this.options.floor) ? e.value * 1000 : '';     
      this.commonServiceApi.setMinStorage(this.storageMin);
    }
    if(e.pointerType === 1) {
      this.storageMax = (e.highValue != this.options.ceil) ? e.highValue * 1000 : ''
      this.commonServiceApi.setMaxStorage(this.storageMax);
    }
  }

  shareCheckedList(item:any[]){
    this.commonServiceApi.setSelectedHdds(item);
  }
  shareIndividualCheckedList(item:{}){
    //console.log(item);
  }

  changeLocation(e: any) {
    this.commonServiceApi.setSelectedLocation(e.target.value);
  }

  onCheckboxChange(e: any) {
    const ramList : FormArray = this.form.get('ramLi') as FormArray;  
    if (e.target.checked) {
      ramList.push(new FormControl(e.target.value));
    } else {
       const index = ramList.controls.findIndex(x => x.value === e.target.value);
       ramList.removeAt(index);
    }
    console.log(ramList.value)
    this.commonServiceApi.setSelectedRams(ramList.value);
  }
}
