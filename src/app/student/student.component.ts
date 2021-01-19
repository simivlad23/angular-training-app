import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from '../shared/student.model';
import {StudentService} from './student.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit , OnDestroy {
  students: Student[];
  private subscription: Subscription;

  constructor(private serviceStud: StudentService) {
  }

  ngOnInit() {
    this.students = this.serviceStud.getStudents();
    this.subscription = this.serviceStud.studentChanded
      .subscribe((studentList: Student[] ) => {
          this.students = studentList;
        }
      );
  }
  onEditItem(index: number) {
    this.serviceStud.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
