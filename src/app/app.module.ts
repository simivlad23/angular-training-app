import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { StudentComponent } from './student/student.component';
import { ClassroomDetailsComponent } from './classroom/classroom-details/classroom-details.component';
import { ClassroomListComponent } from './classroom/classroom-list/classroom-list.component';
import { ClassroomItemComponent } from './classroom/classroom-list/classroom-item/classroom-item.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import {DropdownDirective} from './shered/dropdown.directive';
import {StudentService} from './student/student.service';
import {AppRoutingModule} from './app-routing.module';
import { ClassroomEditComponent } from './classroom/classroom-edit/classroom-edit.component';
import { ClassroomStartComponent } from './classroom/classroom-start/classroom-start.component';
import {ClassroomService} from './classroom/classroom.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassroomComponent,
    StudentComponent,
    ClassroomDetailsComponent,
    ClassroomListComponent,
    ClassroomItemComponent,
    StudentEditComponent,
    DropdownDirective,
    ClassroomEditComponent,
    ClassroomStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StudentService, ClassroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
