import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { User } from 'src/app/models/user';
import { PlantService } from 'src/app/services/plant.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  isConnected : boolean = false;
  userConnected?: User;
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
    this.plantService.getPlants().subscribe((data) => {
      this.allPlantsToDisplay = [...data];
    })
  }

  onSubmit() {
    const formData = this.form.value;
    const email = formData.email;
    const password = formData.password;
   console.log("form", formData.email);
    this.userService.login(email, password).subscribe((user)=> {
      console.log("user récupéré", user);
      const {token} = user;
      this.isConnected = true;
      console.log("mon token", token, user.token);
    })
  }
}