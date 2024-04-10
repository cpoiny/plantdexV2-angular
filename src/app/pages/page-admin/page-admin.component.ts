import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  isConnected : boolean = false;

  constructor(
    private userService : UserService
  ){}

 
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    const formData = this.form.value;
    const email = formData.email;
    const password = formData.password;
   console.log("form", formData.email);
    this.userService.login(email, password).subscribe((data)=> {
      console.log("connection : ", data);
      if(data){
        this.isConnected = true;
      }
    })
  }
}