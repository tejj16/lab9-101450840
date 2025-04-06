import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentName: string = 'John Doe';
  studentId: number = 101450840;

  getInfo() {
    return `Name: ${this.studentName}, ID: ${this.studentId}`;
  }
}
