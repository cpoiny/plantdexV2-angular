import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';



@Component({
  selector: 'app-page-my-plants',
  templateUrl: './page-my-plants.component.html',
  styleUrls: ['./page-my-plants.component.css']
})
export class PageMyPlantsComponent { 

plantToDisplay! : Plant;

constructor(
  private route: ActivatedRoute,
  private plantService : PlantService
){}


ngOnInit() :void {
  this.getId();

}

getId() : void {
  const id = Number(this.route.snapshot.params['id']);
  console.log("id", id);
  this.getPlant(id);
}

getPlant(id: number) {
  this.plantService.getPlantById(id).subscribe((data) => {
    this.plantToDisplay = data[0];
    console.log("cyn plante", data, this.plantToDisplay.nom);
  });
}

}
