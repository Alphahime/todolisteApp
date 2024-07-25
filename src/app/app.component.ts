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

  // Pour lister des tâches
  tasks: { id: number, title: string, description: string, completed: boolean }[] = [];
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  searchText: string = ''; // Pour stocker le texte de recherche

  // Pour ajouter une tâche à la liste
  ajouterTache() {
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

  // Pour marquer une tâche comme terminée ou non terminée
  basculerEtatTache(task: { id: number, title: string, description: string, completed: boolean }) {
    task.completed = !task.completed;
  }

  // Pour filtrer les tâches complètes
  get tachesCompletes() {
    return this.tasks.filter(task => task.completed);
  }

  // Filtrer les tâches non terminées
  get tachesNonTerminees() {
    return this.tasks.filter(task => !task.completed);
  }

  // Filtrer les tâches par le début du titre
  get tachesFiltrees() {
    const recherche = this.searchText.toLowerCase();
    return this.tasks.filter(task => task.title.toLowerCase().startsWith(recherche));
  }
}
