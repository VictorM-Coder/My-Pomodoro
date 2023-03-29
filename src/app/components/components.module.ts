import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header/header.component";
import {BodyComponent} from "./body/body/body.component";
import {TimerCardComponent} from "./body/timer-card/timer-card.component";
import { TimerComponent } from './body/timer/timer.component';
import { TaskBarComponent } from './body/task-bar/task-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    TimerCardComponent,
    TimerComponent,
    TaskBarComponent
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
