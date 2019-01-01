import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerheaderComponent } from './innerheader.component';

@NgModule({
  declarations: [InnerheaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    InnerheaderComponent
  ]
})
export class InnerheaderModule { }
