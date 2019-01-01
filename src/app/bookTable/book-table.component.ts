import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {
  selectedValue: string;
  date: string;

  setDate(date: string) {
    this.date = date ? date : '';
  }
  constructor() {

    
   }

  ngOnInit() {
  }

 

  clients = [
    { id : '1', clientName: '1'},
    { id : '2', clientName: '2'},
    { id : '3', clientName: '3'},
    { id : '4', clientName: '4'},
    { id : '5', clientName: '5'},
    { id : '6', clientName: '6'}
  ];

  changeClient(data){
    alert("selected --->"+data);
  }

  changeClient2(data){
    alert("selected --->"+this.clients[data].id+' '+this.clients[data].clientName);
  }


}
