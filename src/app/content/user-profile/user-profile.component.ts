import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup;
  userInfo: any = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.userProfileForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('[- +()0-9]{6,}')] ],
      avatarURL: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ]
   });
  }

  ngOnInit(): void {
  }

  showUserInfo() {
    this.apiService.getUserInfo()
      .subscribe((data) => {
        this.userInfo = data;
      });
  }

}
