import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({  
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router,private dataService: DataService) {}

  onValidate() {
    const credentials = {
      email: this.email,
      password: this.password
    };
    // console.log(this.email);
    // Make an HTTP POST request to your server to handle sign-in.
    this.http.post('http://localhost:8086/user/signin', credentials).subscribe(
      (response: any) => {
        // Sign-in successful, handle the response here (e.g., set user tokens, navigate to the dashboard).
        alert('Sign-in successful');
        this.dataService.sendUserData(this.email);
        this.router.navigateByUrl('/home');
        this.email='';
        this.password='' ;
        //this.router.navigate(['http://localhost:4200/']);
      },
      (error: any) => {
        // Sign-in failed, handle the error (e.g., display an error message).
        alert('Sign-in failed');
      }
    );
  }
}
