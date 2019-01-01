import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material';
import { SignUpComponent } from '../signUp/sign-up.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    NgbModule.forRoot()
  ],
  exports:[
    HeaderComponent
  ],
  providers:[NgbActiveModal],
  entryComponents:[SignUpComponent]
})
export class HeaderModule { }