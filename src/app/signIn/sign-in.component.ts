import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ForgotpassComponent } from '../Forgotpass/forgotpass.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
   
  constructor(public dialogRef: MatDialogRef<SignInComponent>,private dialog: MatDialog){
  
  }
 
  ngOnInit() {
  }
  
  onYesClick(): void {
    this.dialogRef.close(true);
  }
  goToForgotPassword(){
    this.dialogRef.close(true);
    this.dialog.open(ForgotpassComponent);
  }


  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
