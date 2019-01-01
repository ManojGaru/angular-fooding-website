import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTableComponent } from './book-table.component';
import { MatSelectModule, MatDatepickerModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatButtonToggleModule, MatButtonModule } from '@angular/material';
import { DatePickerModule } from '../shared/datePicker/date-picker.module';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { TimepickerModule } from '../shared/timePicker/timepicker.module';

@NgModule({
  declarations: [BookTableComponent],
  imports: [
    CommonModule,
    MatSelectModule,
   // DatePickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    TimepickerModule,
    MatButtonToggleModule,
    MatButtonModule
  //  MatDatepickerModule
  ],
  exports:[BookTableComponent],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class BookTableModule { }
