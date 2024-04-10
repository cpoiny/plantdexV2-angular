import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  isCreated : boolean = false;
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

  formCreate: FormGroup = new FormGroup({
    pseudo: new FormControl('', Validators.required),
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required)
  });

  formCreateNew! : FormGroup;
  

  ngOnInit(): void {
    this.getAllPlants();
  }

  onSubmit() {
    const formData = this.form.value;
    const email = formData.email;
    const password = formData.password;
    if(this.form.valid) {

      this.login(email, password);
    }
    
  }

  onCreate() {
    const formData = this.formCreate.value;
    const pseudo = formData.pseudo;
    const email = formData.email;
    const password = formData.password;
    if(this.formCreate.valid){
      this.signUp(pseudo, email, password);
    }
    
  }


  login(email: string, password: string){
    this.userService.login(email, password).subscribe((data)=> {
      const user = data.user;
      if(user.token && user.role === 1) {
        this.isConnected = true;
        this.userConnected = user.pseudo;
      }
    })
  }

  signUp(pseudo: string, email: string, password: string){
    this.userService.signUp(pseudo, email, password).subscribe((data)=> {
      console.log("user crée", data);
      this.isCreated = true;
      }
    )
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