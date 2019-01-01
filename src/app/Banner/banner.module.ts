import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { HeaderModule } from '../Header/header.module';

@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    SelectDropDownModule,
    HeaderModule
  ],
  exports:[
    BannerComponent
  ]
})
export class BannerModule { }
