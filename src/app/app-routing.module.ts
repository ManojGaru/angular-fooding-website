import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signIn/sign-in.component';
import { BannerComponent } from './Banner/banner.component';
import { ForgotpassComponent } from './Forgotpass/forgotpass.component';
import { OrderdetailsComponent } from './orderDetails/orderdetails.component';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OffersComponent } from './offers/offers.component';
import { BookTableComponent } from './bookTable/book-table.component';
import { PlaceorderComponent } from './placeOrder/placeorder.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: SignInComponent },
  { path: 'home', component: BannerComponent },
  { path: 'forgotPassword' , component: ForgotpassComponent},
  { path: 'orderdetails' , component: OrderdetailsComponent},
  { path: 'placeorder' , component:PlaceorderComponent},
  { path: 'info' , component: InfoComponent},
  { path: 'menu' , component: MenuComponent},
  { path: 'reviews' , component: ReviewsComponent},
  { path: 'offers' , component: OffersComponent},
  { path: 'book-table' , component: BookTableComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
