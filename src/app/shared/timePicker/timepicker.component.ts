import { Component, Output, EventEmitter, OnInit } from '@angular/core';
//import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'doc-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: [ './timepicker.component.scss' ],
 // providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: TimePickerComponent, multi: true }]
})
export class TimePickerComponent {
  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
}
