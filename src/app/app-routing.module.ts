import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { UserProfileComponent } from './content/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'user-profile', component: UserProfileComponent },
  {
    path: 'item/:id',
    loadChildren: () =>
      import('./content/item/item.module').then((m) => m.ItemModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
