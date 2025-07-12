import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./Pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
  },
  {
    path: 'trip',
    loadComponent: () =>
      import('./Pages/trip/trip.component').then((m) => m.TripComponent),
    title: 'Trip',
  },
  {
    path: 'taxi',
    loadComponent: () =>
      import('./Pages/taxi/taxi.component').then((m) => m.TaxiComponent),
    title: 'Taxi',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About',
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./Pages/contact-us/contact-us.component').then((m) => m.ContactUsComponent),
    title: 'Contact Us',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Pages/notfoundpage/notfoundpage.component').then((m) => m.NotfoundpageComponent),
    title: 'Not Found',
  }
];
