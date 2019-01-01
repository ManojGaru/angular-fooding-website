import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateaccountComponent } from './createaccount.component';

@NgModule({
  declarations: [CreateaccountComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CreateaccountComponent
  ]
})
export class CreateaccountModule { }
