import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentRoute: string ;
  constructor(private router: Router) { 
    this.currentRoute = '';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

  }

  ngOnInit(): void {
    
  }

  logOut() {
    this.router.navigate(["/Account"]);
  }
  accountForm(){
    this.router.navigate(["/Client"]);
  }

}
