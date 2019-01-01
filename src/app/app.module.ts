import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './Header/header.module';
import { BannerModule } from './Banner/banner.module';
import { FooterModule } from './Footer/footer.module';
import { SignUpModule } from './signUp/sign-up.module';
import { SignInModule } from './signIn/sign-in.module';
import { CreateaccountModule } from './CreateAccount/createaccount.module';
import { ForgotpassModule } from './Forgotpass/forgotpass.module';
import { OrderdetailsModule } from './orderDetails/orderdetails.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlaceorderModule } from './placeOrder/placeorder.module';
import { InnerheaderModule } from './innerHeader/innerheader.module';

import { BookTableModule } from './bookTable/book-table.module';
import { InfoModule } from './info/info.module';
import { MenuModule } from './menu/menu.module';
import { ReviewsModule } from './reviews/reviews.module';
import { OffersModule } from './offers/offers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerModule } from './shared/datePicker/date-picker.module';

@NgModule({
 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BannerModule,
    FooterModule,
    SignUpModule,
    SignInModule,
    CreateaccountModule,
    ForgotpassModule,
    OrderdetailsModule,
    AngularFontAwesomeModule,
    PlaceorderModule,
    InnerheaderModule,
    BookTableModule,
    InfoModule,
    MenuModule,
    ReviewsModule,
    OffersModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
