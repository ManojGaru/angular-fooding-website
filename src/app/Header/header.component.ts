import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../signIn/sign-in.component';
import { MatDialog } from '@angular/material';
import { HeaderModule } from './header.module';
import { SignUpComponent } from '../signUp/sign-up.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private modalService: NgbModal,private dialog: MatDialog) { }

  ngOnInit() {
  }

  gotoSignIn(){
    // this.router.navigate(['login']);
   // this.modalService.open(SignInComponent);
   this.dialog.open(SignInComponent);
  }

  goToSignUp(){
    this.dialog.open(SignUpComponent);
  }
}