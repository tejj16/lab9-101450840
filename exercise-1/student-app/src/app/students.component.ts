import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <h2>{{ getTitle() }}</h2>
    <p>Current Date: {{ getCurrentDate() }}</p>
  `
})
export class StudentsComponent {
  title: string = 'Welcome to Students Component - Tej Patel';

  getTitle() {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
