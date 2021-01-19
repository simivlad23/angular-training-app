import {Student} from '../shered/student.model';

export class Classroom {
  public gradeClass: string;
  public teacherName: string;
  public teacherImagePath: string;
  public specialization: string;
  public students: Student[];

  constructor(gradeClass: string, teacherClass: string, teacherImagePath: string, specialization: string, students: Student[]) {
    this.gradeClass = gradeClass;
    this.teacherName = teacherClass;
    this.teacherImagePath = teacherImagePath;
    this.specialization = specialization;
    this.students = students;
  }
}
