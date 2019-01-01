import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent, MY_FORMATS } from './date-picker.component';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatDatepickerModule, MatDatepickerToggle } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    
  ],
  exports:[DatePickerComponent],
  providers:[ {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},]
})
export class DatePickerModule { }
