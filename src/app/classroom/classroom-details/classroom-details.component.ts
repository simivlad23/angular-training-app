import {Component, OnInit} from '@angular/core';
import {Classroom} from '../classroom.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ClassroomService} from '../classroom.service';

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css']
})
export class ClassroomDetailsComponent implements OnInit {
  classroom: Classroom;
  id: number;

  constructor(private classroomService: ClassroomService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
          this.classroom = this.classroomService.getClassroom(this.id);
          console.log(this.classroom);
          console.log(this.classroom.teacherName);
        }
      );
  }

  onAddToStudentList() {
    this.classroomService.addStudentToStudentList(this.classroom.students);
  }

  onEditClassroom() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteClassroom() {
    this.classroomService.deleteClassroom(this.id);
    this.router.navigate(['/classroom']);
  }
}
