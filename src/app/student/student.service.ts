import {Student} from '../shered/student.model';
import {Subject, Subscription} from 'rxjs';

export class StudentService {
  studentChanded = new Subject<Student[]>();
  startedEditing = new Subject<number>();

  private students: Student[] = [
    new Student('Dumitru', 'Pop', '232535'),
    new Student('Mihai', 'Igusa', '23238'),
  ];

  getStudents(): Student[] {
    return this.students.slice();
  }

  getStudent(index: number) {
    return this.students[index];
  }

  addStudent(student: Student) {
    this.students.push(student);
    this.studentChanded.next(this.students.slice());
  }

  addStudents(students: Student[]) {
    for (const student of students) {
      this.addStudent(student);
    }
    this.studentChanded.next(this.students.slice());
  }

  updateStudent(index: number, newStudent: Student) {
    this.students[index] = newStudent;
    this.studentChanded.next(this.students.slice());
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.studentChanded.next(this.students.slice());
  }
}
