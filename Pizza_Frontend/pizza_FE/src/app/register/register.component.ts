import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customerName:string=""
  email: string=""
  password: string =""

  constructor(private http: HttpClient,private router:Router )
  {
   
  }
  onSubmit()
  {
    let bodyData = {
      "customerName":this.customerName,
      "email" : this.email,
      "password":this.password
    };
    this.http.post("http://localhost:4000/vikings_pizza/customer/register",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        //console.log(this.email);
        alert("Registered Successfully");
        this.router.navigateByUrl('/home');
        this.customerName='';
        this.email = '';
        this.password =''; 
    },
    (error)=>{
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again later.');
    }
    );
  }

}
