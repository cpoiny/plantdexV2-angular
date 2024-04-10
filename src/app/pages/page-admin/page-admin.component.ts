import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  isConnected : boolean = false;
  userConnected?: string;
  allPlantsToDisplay!: Plant[];

  constructor(
    private userService : UserService,
    private plantService : PlantService
  ){}


  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  ngOnInit(): void {
    this.getAllPlants();
  }

  onSubmit() {
    const formData = this.form.value;
    const email = formData.email;
    const password = formData.password;
    this.login(email, password);
    
  }
  login(email: string, password: string){
    this.userService.login(email, password).subscribe((data)=> {
      const user = data.user;
      if(user.token && user.role === 2) {
        this.isConnected = true;
      }
    })
  }
  getAllPlants() {
    this.plantService.getPlants().subscribe((data) => {
      this.allPlantsToDisplay = [...data];
    })
  }

  onDelete(id: number) {
    this.plantService.delete(id).subscribe((data) => {
      console.log("plant supprimée", data);
      this.getAllPlants();
    });
  }
}