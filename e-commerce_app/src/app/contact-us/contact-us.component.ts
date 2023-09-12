import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  name:string=""
  email:string=" "
  phone:string=" "
  message:string=" "
 
  constructor(private http: HttpClient )
  {
   
  }

  getInfo(){
    let bodyData = {
      "email" : this.email,
      "message" : this.message
    };
    //console.log(this.email);
        this.http.post("http://localhost:8086/info/get",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        //console.log(this.email);
        alert("Thankyou,For your feedback");
      
 
        this.email = '';
        this.message ='';
        this.name='';
        this.phone='';
  },
  (error)=>{
    alert('Registration failed. Please try again later.');
  }
  );
}
}
