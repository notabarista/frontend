import { UserAuthenticationService } from './../services/user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //isUserLoggedIn: boolean = false
  //this dependency injection is to control the menu of the header based on user is logged in or not
  constructor(public userAuthenticationService: UserAuthenticationService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.userAuthenticationService.isUserLoggedIn();
  }

}
