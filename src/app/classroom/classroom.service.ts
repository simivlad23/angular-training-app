import {Classroom} from './classroom.model';
import {EventEmitter, Output} from '@angular/core';
import {Student} from '../shered/student.model';
import {Subject} from 'rxjs';
import {StudentService} from '../student/student.service';

export class ClassroomService {

  classroomChanged = new Subject<Classroom[]>();

  private classroomsList: Classroom[] = [
    new Classroom('9-A', 'Popescu Vasile',
      'https://t4.ftcdn.net/jpg/03/28/10/15/360_F_328101522_ezzWWm1FylxgfdUj6tnVskLgszJBUWsz.jpg',
      'Mathematics', [
        new Student('Nealutu', 'Vasile', '455545'),
        new Student('Nealutu', 'Vasile', '455545')
      ]),
    new Classroom('9-A', 'Popescu Dorian',
      'https://t4.ftcdn.net/jpg/03/28/10/15/360_F_328101522_ezzWWm1FylxgfdUj6tnVskLgszJBUWsz.jpg',
      'Mathematics', [
        new Student('Nealutu3', 'Vasile3', '455545'),
        new Student('Nealutu3', 'Vasile3', '455545')
      ]),
  ];

  constructor(private studService: StudentService) {}

  getClassrooms() {
    return this.classroomsList.slice();
  }

  getClassroom(index: number) {
    return this.classroomsList[index];
  }

  addStudentToStudentList(students: Student[]) {
    this.studService.addStudents(students);
  }

  addClassroom(classroom: Classroom) {
    this.classroomsList.push(classroom);
    this.classroomChanged.next(this.classroomsList.slice());
  }

  updateClassroom(index: number, newClassroom: Classroom) {
    this.classroomsList[index] = newClassroom;
    this.classroomChanged.next(this.classroomsList.slice());
  }

  deleteClassroom(index: number) {
    this.classroomsList.splice(index, 1);
    this.classroomChanged.next(this.classroomsList.slice());
  }


}
