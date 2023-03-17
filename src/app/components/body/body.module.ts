import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule { }
