import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCostDataService {

  constructor(private http: HttpClient) { }


  getCostData(from_address:string, to_address:string){
    let data = {"from_address":from_address, "to_address":to_address}
    return this.http.post("https://shipmantra-assignment.herokuapp.com",data)
  }
}
