import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header/header.component";
import {BodyComponent} from "./body/body/body.component";
import {TimerCardComponent} from "./body/timer-card/timer-card.component";


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    TimerCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BodyComponent
  ]
})
export class ComponentsModule { }
