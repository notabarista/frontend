import { User } from './../classes/user';
import { UserAuthenticationService } from './../services/user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username = "gunjan"
  // password = "gunjanpaul"
  errorMessage = ""
  invalidLogin = false
  user = new User();
  constructor(private router: Router, private userAuthenticationService: UserAuthenticationService) { }

  ngOnInit(): void {
  }

  // this function is listenting to the event of login button of login page
  handleLogin() {


    this.userAuthenticationService.authentication(this.user).subscribe(
      data => {
        console.log(data)

        if (data != null) {
          this.errorMessage = ""
          this.router.navigate(["/welcome/" + data.username])
          this.userAuthenticationService.userProfile(this.user, data.username).subscribe(
            data => console.log(data),
            error => console.log(error)
          )
        } else {
          this.errorMessage = "fill the required details"
        }
      },
      error => {
        console.log("error happending")
        this.errorMessage = "Invalid credentials"
      }
    )
  }

}
