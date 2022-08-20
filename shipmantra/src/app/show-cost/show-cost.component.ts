import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-cost',
  templateUrl: './show-cost.component.html',
  styleUrls: ['./show-cost.component.css']
})
export class ShowCostComponent implements OnInit {

  constructor(private router: Router) { 
    
    
    if (this.router.getCurrentNavigation()?.extras.state) {
    console.log(this.router.getCurrentNavigation())
    this.routeState = this.router.getCurrentNavigation()?.extras.state;
    if (this.routeState) {
      this.data.order_amount= this.routeState.order_amount? this.routeState.order_amount: '-nil-';
      this.data.from_address= this.routeState.from_address? this.routeState.from_address: '-nil-';
      this.data.to_address= this.routeState.to_address? this.routeState.to_address: '';
    }
  }
  }
  data: any = {};
  routeState: any;
  ngOnInit(): void {
  }

}
