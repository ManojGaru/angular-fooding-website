import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  dropdownOptions:any=[];
  config:any;
  constructor(private router:Router) {


   }
  

  ngOnInit() {
    this.dropdownOptions = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];



    this.config = {
      displayKey:"description", //if objects array passed which key to be displayed defaults to description
      search:true ,//true/false for the search functionlity defaults to false,
      height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
      placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
      customComparator: ()=>{} ,// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
      limitTo: this.dropdownOptions.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
      moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
      noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
      searchPlaceholder:'Search' ,// label thats displayed in search input
    }
  
  
  }

  gotoOrderDetails(){
    this.router.navigate(['orderdetails']);
  }

  goToPlaceOrder(){
    this.router.navigate(['placeorder']);
  }

}
