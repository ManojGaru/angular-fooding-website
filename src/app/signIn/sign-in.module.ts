import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import {  MatButtonModule, MatDialogModule } from '@angular/material';
import {
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  MatCardModule,
  MatInputModule
];

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    modules
  ],
  exports: [
    SignInComponent,
    modules
  ]
})
export class SignInModule { }
