import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderdetailsComponent } from './orderdetails.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatTabsModule, MatCheckboxModule, MatRadioModule, MatInputModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuModule } from '../menu/menu.module';
import { InfoModule } from '../info/info.module';
import { ReviewsModule } from '../reviews/reviews.module';
import { OffersModule } from '../offers/offers.module';
import { BookTableModule } from '../bookTable/book-table.module';
import { InnerheaderModule } from '../innerHeader/innerheader.module';

@NgModule({
  declarations: [OrderdetailsComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    MatTabsModule,
    NgbModule,
    MenuModule,
    InfoModule,
    ReviewsModule,
    OffersModule,
    BookTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatRadioModule,
    MatInputModule,
    InnerheaderModule
  ],
  exports:[
    OrderdetailsComponent
  ]
})
export class OrderdetailsModule { }
