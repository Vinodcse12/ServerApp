import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { CommonApiService } from '../services/common-api.service';
import { ServerApiService } from '../services/server-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any = [];
  collection: string[] = [];
  p = 1;
  maxParam: any = '';
  minParam: any = '';
  ramParam: any = '';
  hddParam: any = '';
  locParam: any = '';
  serverList: any[] = [];
  constructor(private commonServiceApi: CommonApiService, private serverApi: ServerApiService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit(): void {
    this.getServers(this.minParam, this.maxParam, this.ramParam, this.hddParam, this.locParam);
    this.commonServiceApi.storageMax
      .subscribe((res: any) => {
        this.minParam = res;
        this.getServers(this.minParam, this.maxParam, this.ramParam, this.hddParam, this.locParam);
      })
    this.commonServiceApi.storageMin
      .subscribe((res: any) => {
        this.maxParam = res;
        this.getServers(this.minParam, this.maxParam, this.ramParam, this.hddParam, this.locParam);
      })
    this.commonServiceApi.selectedRams
      .subscribe((res: any) => {
        this.ramParam = res;
        this.getServers(this.minParam, this.maxParam, this.ramParam, this.hddParam, this.locParam);
      })
    this.commonServiceApi.selectedHdds
      .subscribe((res: any) => {
        this.hddParam = res;
        this.getServers(this.minParam, this.maxParam, this.ramParam, this.hddParam, this.locParam);
      })
    this.commonServiceApi.selectedLocation
      .subscribe((res: any) => {
        this.locParam = res;
        this.getServers(this.minParam, this.maxParam, this.ramParam, this.hddParam, this.locParam);
      })
  }

  getServers(minParam: any, maxParam: any, ramParam: any, hddParam: any, locParam: any) {
    this.serverApi.getServersData(minParam, maxParam, ramParam, hddParam, locParam)
      .pipe(
        map((res: any) => {
          return res.servers.map((server: any) => {
            return {
              modal: server.model,
              ram: server.ram.memory + server.ram.unit,
              hdd: server.hdd.type,
              location: server.location,
              price: server.price.amountCents + server.price.currencySymbol
            }
          })
        })
      ).subscribe((res: any) => {
        this.serverList = res;
      },
      (err: any) => {
        console.log(err);
      })
  }
}
