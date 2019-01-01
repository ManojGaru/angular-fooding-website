import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
   compo:any='';
   tabs:any=[];
 constructor(private router:Router){
    window.scrollTo(0,0);
 }
  ngOnInit() {

    this.tabs = [
      {
        tabName: 'Content 1',
        id: 1
      },
      {
        tabName: 'Content 2',
        id: 2
      }
    ]
  }
  goToMenu(){
    this.compo='<app-menu></app-menu>'  
  }
  goToInfo(){
    this.compo = '<app-info></app-info>'
  }
  goToReviews(){

  }
  goToOffers(){

  }
  goToBookTable(){

  }

}
