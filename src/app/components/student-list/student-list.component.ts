import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.fetchStudents();
    });
  }
}
