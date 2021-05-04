import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/api/api.service';
import { ProgressSpinnerDialogComponent } from 'src/app/widgets/progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  userProfileForm: FormGroup;
  dialogRef!: MatDialogRef<ProgressSpinnerDialogComponent>;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private apiService: ApiService) {
    this.userProfileForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[- +()0-9]{6,}')] ],
      avatarURL: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')] ]
   });
   this.showSpinner();
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.apiService.getUserInfo()
      .subscribe((data: any) => {
        this.userProfileForm.patchValue({
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.userProfile ? data.userProfile.phoneNumber : '',
          avatarURL: data.userProfile ? data.userProfile.avatar : ''
        });

        this.hideSpinner();
      });
  }

  showSpinner() {
    this.dialogRef = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true,
    });
  }

  hideSpinner() {
    this.dialogRef.close();
  }

}
