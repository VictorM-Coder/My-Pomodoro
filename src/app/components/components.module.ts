import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header/header.component";
import {BodyComponent} from "./body/body/body.component";
import {TimerCardComponent} from "./body/timer-card/timer-card.component";
import { TimerComponent } from './body/timer/timer.component';
import { TaskBarComponent } from './body/task-bar/task-bar.component';
import { TaskComponent } from './body/task/task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    TimerCardComponent,
    TimerComponent,
    TaskBarComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownToggle,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownItem
  ],
  exports: [
    HeaderComponent,
    BodyComponent
  ]
})
export class ComponentsModule { }
