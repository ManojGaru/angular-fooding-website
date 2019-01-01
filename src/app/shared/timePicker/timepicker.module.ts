import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './timepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

//import 'hammerjs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports:[TimePickerComponent]
})
export class TimepickerModule { }
