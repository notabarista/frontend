import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemOverviewComponent } from './item-overview/item-overview.component';


// import { ItemOverview } from './item-overview/';

const itemRoutes: Routes = [
//   { path: '', component: ItemOverview }
];

@NgModule({
  imports: [
    RouterModule.forChild(itemRoutes)
  ],
  declarations: [
    // ItemOverview,
  ItemOverviewComponent]
})
export class ItemModule { }
