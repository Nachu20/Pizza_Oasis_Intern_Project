import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  
  email: string=""
  password: string =""

  constructor(private http: HttpClient )
  {
   
  }


  onSubmit()
  {
  
    let bodyData = {
      "email" : this.email,
      "password":this.password
    };
    //console.log(this.email);
        this.http.post("http://localhost:8086/user/create",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        //console.log(this.email);
        alert("Registered Successfully");
      
 
        this.email = '';
        this.password =''
    },
    (error)=>{
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again later.');
    }
    );
  }
  
}