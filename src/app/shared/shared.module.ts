import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule 
  } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: []
})
export class SharedModule { }
