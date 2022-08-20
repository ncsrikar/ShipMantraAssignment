import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RedirectGaurdService implements CanActivate {

  constructor(private router : Router) { }
  canActivate(): boolean{
    var redirectFrom = this.router.url;
    console.log(redirectFrom)
    var isCalculateCost = redirectFrom.indexOf("/calculateCost")==-1?false:true 
    if(!isCalculateCost){
      this.router.navigate(["/calculateCost"])
      return false
    }
    return true
  }
}
