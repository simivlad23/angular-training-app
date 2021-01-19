import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Student} from '../../shared/student.model';
import {StudentService} from '../student.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit , OnDestroy {

  @ViewChild('f', {static: false}) studForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Student;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.subscription = this.studentService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.studentService.getStudent(index);
          this.studForm.setValue({
            firstname: this.editedItem.firstname,
            lastname: this.editedItem.lastname,
            regCode: this.editedItem.regCode
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newStudent = new Student(value.firstname, value.lastname, value.regCode);
    if (this.editMode) {
      this.studentService.updateStudent(this.editedItemIndex, newStudent);
    } else {
      this.studentService.addStudent(newStudent);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.studForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.studentService.deleteStudent(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
