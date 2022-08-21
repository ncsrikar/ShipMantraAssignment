import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {GetCostDataService} from "../get-cost-data.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private getcostdata: GetCostDataService, private router: Router) { }
  from_address: string = ""
  to_address: string = ""
  start_spinner:boolean=false
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
    let cost_details = this.getcostdata.getCostData(this.from_address, this.to_address)
    this.start_spinner = true
    cost_details.subscribe(res => {
      let res_parsed = JSON.parse(JSON.stringify(res))
      console.log(res_parsed["order_amount"])
      this.start_spinner = false
      this.router.navigate(["/showCost"], {
          state:{
            order_amount:res_parsed["order_amount"],
            from_address: res_parsed["from_address"],
            to_address: res_parsed["to_address"]
          }
        })
      }) 
  }
}
