import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  itemDetails: any;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let itemId = this.route.snapshot.paramMap.get('id');
    if (itemId && itemId != '') {
      this.service.getItemDetails(itemId).subscribe((data: any) => {
        this.itemDetails = data;
      });
    }
  }

}
