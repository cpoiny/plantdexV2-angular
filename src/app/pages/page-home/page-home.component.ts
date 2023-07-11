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
  plantsToDisplay!: Plant[];
  /**
   * Injection de dépendance :
   * Permet à Angular de nous mettre à dispo
   * une instance d'une certaine classe
   * dans notre composant
   *
   * Ici l'instance s'appelle instancePlantService
   * et la classe s'appelle PlantService
   *
   * Dans notre composant on pourra alors accéder aux
   * différente méthodes définis dans la classe
   * PlantService
   */
  constructor(private instancePlantService: PlantService) {}

  /**
   * Methode de cycle de vie de nos composant
   *
   * Cette méthode est appelée automatiquement
   * par Angular, dès que le composant s'affiche
   * à l'écran
   */
  ngOnInit() {
    // console.log('le composant PageHome vient de se charger');

    /**
     * On stock notre requête pour récupérer les plantes
     * dans une constante notreFluxDeDonnees
     */
    const notreFluxDeDonnees = this.instancePlantService.getPlants();

    /**
     * Comme cette requête est asynchrone
     * on va devoir attendre que les données arrivent
     * avoir de pouvoir les afficher.
     * Pour attendre que les données arrivent
     * on utilise la méthode (préexistante) .subscribe()
     */
    notreFluxDeDonnees.subscribe((data: Plant[]) => {
      console.log(data);

      this.plantsToDisplay = data;
    });
  }
}
