import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  bg ='../../assets/img/bg1.webp';
  
  form1 = new FormControl('');

  constructor(private router: Router) { }

  redirecionar(){
    this.router.navigate(['/dasboard']);
  }
}
