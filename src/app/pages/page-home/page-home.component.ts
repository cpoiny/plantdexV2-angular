import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  // Plantes à afficher dans la page
  allPlants!: Plant[];
  plantsToDisplay!: Plant[];
  categories!: string[];
  //Les variables "tampon" pour appliquer tous les filtres en même temps
  categoriesChecked!: string[];
  userInput!: string;

  constructor(private instancePlantService: PlantService) {}

  ngOnInit() {
    this.instancePlantService.getPlants().subscribe((data: Plant[]) => {
      console.log(data);

      this.plantsToDisplay = [...data];
      this.allPlants = [...data];
      // Pour supprimer les doublons d'un tableau
      // [...new Set(tableau)]
      this.categories = [
        ...new Set(this.plantsToDisplay.map((plant) => plant.categorie)),
      ];
      console.log('this.categories : ', this.categories);
    });
  }

  aLecouteDeLenfant(categoryDeLenfant: string[]) {
    console.log('categoryDeLenfant', categoryDeLenfant);
    // on garde les plantes dont la
    // categorie est inclu dans le tableau categoryDeLenfant
    // this.plantsToDisplay = this.allPlants.filter((plant) =>
    //   categoryDeLenfant.includes(plant.categorie)
    // );
    this.categoriesChecked = categoryDeLenfant;
    this.onUserInteractionFiltre();
  }

  onEnterSearch(resultUserSearch: string) {
    this.userInput = resultUserSearch;
    // this.plantsToDisplay = this.allPlants.filter((plant) =>
    //   plant.nom.toLowerCase().includes(this.userInput.toLowerCase())
    // );
    this.onUserInteractionFiltre();
  }

  onUserInteractionFiltre() {
    this.plantsToDisplay = [...this.allPlants];
    if (this.userInput) {
      this.plantsToDisplay = this.plantsToDisplay.filter((plant) =>
        plant.nom.toLowerCase().includes(this.userInput.toLowerCase())
      );
    }
    if (this.categoriesChecked) {
      this.plantsToDisplay = this.plantsToDisplay.filter((plant) =>
        this.categoriesChecked.includes(plant.categorie)
      );
    }
  }
}
