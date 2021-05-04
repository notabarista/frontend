import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchControl = new FormControl();
  searchResults: any[] = [];
  isLoading = false;

  constructor(private service: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.searchControl
      .valueChanges
      .pipe(
        debounceTime(300),
        tap((value) => value && value != null && value.length <= 3 ? this.isLoading = false : this.isLoading = true),
        switchMap(value => value && value != null && value.length <= 3 ? [] : this.service.getSearchResults(value, 5)
        .pipe(
          finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe(data => {
        this.searchResults = data.content;
      });
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.searchControl.reset();
    this.isLoading = false;
    console.log(event.option.value);
    this.router.navigate(['/item/' + event.option.value.id]);
  }

}
