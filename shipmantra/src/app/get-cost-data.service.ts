import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCostDataService {

  constructor(private http: HttpClient, private router: Router) { }


  getCostData(from_address:string, to_address:string){
    let data = {"from_address":from_address, "to_address":to_address}
    this.http.post("http://localhost:3000",data).subscribe(res => {
    let res_parsed = JSON.parse(JSON.stringify(res))
    console.log(res_parsed["order_amount"])
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
