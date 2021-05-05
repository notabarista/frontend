import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/api/api.service';
import { ProgressSpinnerDialogComponent } from '../widgets/progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  title = 'fe-notabarista';
  dialogRef!: MatDialogRef<ProgressSpinnerDialogComponent>;
  items: any;

  constructor(private dialog: MatDialog, private apiService: ApiService) {
    this.showSpinner();
  }

  ngOnInit(): void {
    this.getItems(0, 10);
  }

  getItems(page: number, size: number) {
    this.apiService.getItems(page, size)
      .subscribe((data: any) => {
        this.items = data.content;

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
