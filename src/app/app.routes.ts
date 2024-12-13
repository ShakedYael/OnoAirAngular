import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';


export const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '', component: HomePageComponent }
];