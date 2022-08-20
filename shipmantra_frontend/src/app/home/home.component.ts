import { Component, OnInit } from '@angular/core';

import {GetCostDataService} from "../get-cost-data.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private getcostdata: GetCostDataService) { }
  from_address: string = ""
  to_address: string = ""
  ngOnInit(): void {


  }
  AutoFillFromAddress(address: any){
    this.from_address = address["formatted_address"] 
  }
  AutoFillToAddress(address: any){
    this.to_address = address["formatted_address"]
  }
  onSubmit(){
    //Redirecting deirectly from the service, but can return Observable and do it from here as well. 
    this.getcostdata.getCostData(this.from_address, this.to_address) 
  }
}
