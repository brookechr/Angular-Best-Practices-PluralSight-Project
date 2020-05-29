import { Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './users/register.component';
import { SignInComponent } from './users/sign-in.component';

export const appRoutes : Routes = [
  //had to rewrite paths to match new file structure
  { path: 'catalog', component: CatalogComponent, },
  //added to include lazy loading for features not needed initially
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule'}
];
