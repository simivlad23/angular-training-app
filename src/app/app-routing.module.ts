import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClassroomComponent} from './classroom/classroom.component';
import {ClassroomDetailsComponent} from './classroom/classroom-details/classroom-details.component';
import {StudentComponent} from './student/student.component';
import {ClassroomStartComponent} from './classroom/classroom-start/classroom-start.component';
import {ClassroomEditComponent} from './classroom/classroom-edit/classroom-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/classroom', pathMatch: 'full' },
  { path: 'classroom', component: ClassroomComponent, children: [
      { path: '', component: ClassroomStartComponent },
      { path: 'new', component: ClassroomEditComponent },
      { path: ':id', component: ClassroomDetailsComponent },
      { path: ':id/edit', component: ClassroomEditComponent },
    ] },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
