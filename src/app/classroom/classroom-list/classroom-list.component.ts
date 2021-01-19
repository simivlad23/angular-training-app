import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Classroom} from '../classroom.model';
import {ClassroomService} from '../classroom.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit , OnDestroy{
  classrooms: Classroom[];
  subscription1: Subscription;

  constructor(private classroomService: ClassroomService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription1 = this.classroomService.classroomChanged
      .subscribe(
        (classroom: Classroom[]) => {
          this.classrooms = classroom;
        }
      );
    this.classrooms = this.classroomService.getClassrooms();
  }

  onNewClassroom() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
