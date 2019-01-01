import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceorderComponent } from './placeorder.component';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [PlaceorderComponent],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports:[
    PlaceorderComponent
  ]
})
export class PlaceorderModule { }
