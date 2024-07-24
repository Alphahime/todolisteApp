import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Pour ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion des Tâches';

  // Liste des tâches
  tasks: { id: number, title: string, description: string, completed: boolean }[] = [];
  newTaskTitle: string = '';
  newTaskDescription: string = '';

  // Ajoute une tâche à la liste
  addTask() {
    if (this.newTaskTitle && this.newTaskDescription) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        completed: false
      });
      this.newTaskTitle = '';
      this.newTaskDescription = '';
    }
  }

  // Marquer une tâche comme terminée
  toggleCompletion(task: { id: number, title: string, description: string, completed: boolean }) {
    task.completed = !task.completed;
  }

  // Filtre les tâches complètes
  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }
}
