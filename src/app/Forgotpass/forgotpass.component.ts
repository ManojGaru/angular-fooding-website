import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ForgotpassComponent>,private dialog: MatDialog){
  
  }
 
  ngOnInit() {
  }
  
  onYesClick(): void {
    this.dialogRef.close(true);
  }

}
