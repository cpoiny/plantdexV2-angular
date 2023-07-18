import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() categoriesRecupDeLaHome!: string[];
  checkedCategorie: string[] = [];
  @Output() categoryEnvoiParent = new EventEmitter<string[]>();

  onCheckCategory(e: Event) {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      if (
        this.checkedCategorie.length === this.categoriesRecupDeLaHome.length
      ) {
        this.checkedCategorie = [];
      }
      this.checkedCategorie.push(target.value);
    } else {
      this.checkedCategorie = this.checkedCategorie.filter(
        (categ) => categ !== target.value
      );
    }

    if (this.checkedCategorie.length === 0) {
      this.checkedCategorie = [...this.categoriesRecupDeLaHome];
    }

    console.log('this.checkedCategories', this.checkedCategorie);
    // le .emit() de notre Output devra se faire à la fin de cette méthode
    this.categoryEnvoiParent.emit(this.checkedCategorie);
  }
}
