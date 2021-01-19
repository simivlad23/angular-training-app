import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Classroom} from '../../classroom.model';
import {ClassroomService} from '../../classroom.service';

@Component({
  selector: 'app-classroom-item',
  templateUrl: './classroom-item.component.html',
  styleUrls: ['./classroom-item.component.css']
})
export class ClassroomItemComponent implements OnInit {
  @Input() classroom: Classroom;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }
}
