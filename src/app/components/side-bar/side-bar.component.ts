import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() categoriesRecupDeLaHome!: string[];

  onCheckCategory(e: Event) {
    console.log(e);
    // Récupérer la catégorie coché
    // Savoir si la checkbox est cochée ou non

    const target = e.target as HTMLInputElement;
    console.log('Valeur de la checkbox', target.value);
    console.log('Est elle cochée ? : ', target.checked);
  }
}
