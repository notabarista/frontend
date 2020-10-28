import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserAuthenticationService } from '../services/user-authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = new User()
  errorMessage = ""

  constructor(private router: Router, private userAuthenticationService: UserAuthenticationService) { }

  ngOnInit(): void {
  }
  handleSign() {


    this.userAuthenticationService.userSignIn(this.user).subscribe(
      data => {

        console.log(data)
        if (data != null) {
          this.userAuthenticationService.userProfile(this.user, data.username).subscribe(
            data => {
              console.log(data)
              this.router.navigate(["/welcome/" + data.username])
            },
            error => console.log(error)
          )
        }
      },
      error => {
        this.errorMessage = "error happend"
        console.log("error happend")
      }
    )
  }

}
