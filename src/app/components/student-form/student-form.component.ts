import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent {
  student: any = {
    student_id: '',
    name: '',
    age: 0,
    course: 0,
    group: 0,
    subject: '',
    email: '',
    phone: '',
    adress: '',
    placeWork: '',
  };
  constructor(private studentService: StudentService) {}

  addStudent() {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.student = {
        student_id: '',
        name: '',
        age: 0,
        course: 0,
        group: 0,
        subject: '',
        email: '',
        phone: '',
        adress: '',
        placeWork: '',
      };
    });
  }
}
