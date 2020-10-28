import { UserAuthenticationService } from './../services/user-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userAuthenticationService: UserAuthenticationService) { }

  ngOnInit(): void {
    this.userAuthenticationService.logout()
  }


}
