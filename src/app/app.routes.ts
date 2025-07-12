import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: "home",
        title: "Home",
        component: HomeComponent,

    },
];
