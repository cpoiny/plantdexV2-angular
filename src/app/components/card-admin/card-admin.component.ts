import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.css']
})
export class CardAdminComponent {
  @Input() unePlanteAAfficher!: Plant;
  @Output() plantToDelete :  EventEmitter<number> = new EventEmitter();

 delete(id:number) {
  this.plantToDelete.emit(id);
}
}
