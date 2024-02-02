import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router) {}

  onValidate() {
    const credentials = {
      email: this.email,
      password: this.password
    };
    
    this.http.post('http://localhost:4000/vikings_pizza/customer/login', credentials).subscribe(
      (response: any) => {
        alert('Sign-in successful'); 
        this.router.navigateByUrl('/home');
        this.email='';
        this.password='' ;
      },
      (error: any) => {
        alert('Sign-in failed');
      }
    );
  }
}
