import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClassroomService} from '../classroom.service';
import {Classroom} from '../classroom.model';

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom-edit.component.html',
  styleUrls: ['./classroom-edit.component.css']
})
export class ClassroomEditComponent implements OnInit {
  id: number;
  editMode = false;
  classroomForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private classroomService: ClassroomService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    const newClassroom = new Classroom(
      this.classroomForm.value['gradeClass'],
      this.classroomForm.value['teacherImagePath'],
      this.classroomForm.value['teacherName'],
      this.classroomForm.value['specialization'],
      this.classroomForm.value['students'],
    );
    if (this.editMode) {
      console.log(newClassroom);
      console.log(this.classroomForm.value);
      this.classroomService.updateClassroom(this.id, this.classroomForm.value);
    } else {
      this.classroomService.addClassroom(this.classroomForm.value);
    }
    this.onCancel();
  }

  onAddStudent() {
    (<FormArray> this.classroomForm.get('students')).push(
      new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'regCode': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteStudent(index: number) {
    (<FormArray> this.classroomForm.get('students')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let classGrade = '';
    let teacherImagePath = '';
    let teachername = '';
    let specialization = '';
    let classStudents = new FormArray([]);

    if (this.editMode) {
      const classroom = this.classroomService.getClassroom(this.id);
      classGrade = classroom.gradeClass;
      teacherImagePath = classroom.teacherImagePath;
      teachername = classroom.teacherName;
      specialization = classroom.specialization;

      if (classroom['students']) {
        console.log(classroom);
        for (let student of classroom.students) {
          classStudents.push(
            new FormGroup({
              'firstname': new FormControl(student.firstname, Validators.required),
              'lastname': new FormControl(student.lastname, Validators.required),
              'regCode': new FormControl(student.regCode, Validators.required)
            })
          );
        }
      }
    }

    this.classroomForm = new FormGroup({
      'gradeClass': new FormControl(classGrade, Validators.required),
      'teacherImagePath': new FormControl(teacherImagePath, Validators.required),
      'teacherName': new FormControl(teachername, Validators.required),
      'specialization': new FormControl(specialization, Validators.required),
      'students': classStudents
    });
  }

  get controls() { // a getter!
    return (<FormArray> this.classroomForm.get('students')).controls;
  }

}
