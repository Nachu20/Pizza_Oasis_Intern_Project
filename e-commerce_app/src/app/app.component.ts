import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userEmail:string='';
  searchTerm:string='';
  constructor(private dataService: DataService,private router:Router) {}

  ngOnInit() {
    this.dataService.getUserData().subscribe((email) => {
      this.userEmail = email;
      // Do something with the received user data
      
    });
  }
  onSearch():void{
    if (this.searchTerm.trim() !== '') {
      // Navigate to the product page component with the search term as a query parameter
      this.router.navigate(['/home'], { queryParams: { search: this.searchTerm } });
    }

  }
}
