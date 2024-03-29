import { Component } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-my-plants',
  templateUrl: './page-my-plants.component.html',
  styleUrls: ['./page-my-plants.component.css']
})
export class PageMyPlantsComponent {

  plantBack : Plant[] = [];

  constructor(
    private plantService: PlantService
  ){}

  ngOnInit() {
    this.plantService.getPlantsV2().subscribe((data: Plant[]) => {
      console.log(data);
  });
}

}
