import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  hddList= [
    { "name" :"SAS", "checked" : false},
    { "name" :"SSD", "checked" : false},
    { "name" :"SATA2", "checked" : false}
  ];
  locations = [
    { "id": 1, "value": "AmsterdamAMS-01"},
    { "id": 2, "value": "Washington D.C.WDC-01"},
    { "id": 3, "value": "San FranciscoSFO-12"},
    { "id": 4, "value": "SingaporeSIN-11"},
    { "id": 5, "value": "DallasDAL-10"},
    { "id": 6, "value": "FrankfurtFRA-10"},
    { "id": 7, "value": "Hong KongHKG-10"}
  ];
  ramList = [
    { "id": 1, "label": "2GB", "value": 2 },
    { "id": 2, "label": "4GB", "value": 4 },
    { "id": 3, "label": "8GB", "value": 16 },
    { "id": 4, "label": "16GB", "value": 24 },
    { "id": 5, "label": "24GB", "value": 32 },
    { "id": 6, "label": "32GB", "value": 64 },
    { "id": 7, "label": "64GB", "value": 116 },
    { "id": 7, "label": "116GB", "value": 132 }
  ];
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      ramLi : this.formBuilder.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  getRangeValue(e: any) {
    console.log(e);
  }

  shareCheckedList(item:any[]){
    console.log(item);
  }
  shareIndividualCheckedList(item:{}){
    console.log(item);
  }

  changeLocation(e: any) {

  }

  onCheckboxChange(e: any) {
    const ramList : FormArray = this.form.get('ramLi') as FormArray;
  
    if (e.target.checked) {
      ramList.push(new FormControl(e.target.value));
    } else {
       const index = ramList.controls.findIndex(x => x.value === e.target.value);
       ramList.removeAt(index);
    }
    console.log(ramList);
  }

}
