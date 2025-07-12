import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TripComponent } from './Pages/trip/trip.component';
import { TaxiComponent } from './Pages/taxi/taxi.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: "home",
        title: "Home",
        component: HomeComponent,

    },
        {
        path: "trip",
        title: "Trip",
        component: TripComponent,

    },
      {
        path: "taxi",
        title: "Taxi",
        component: TaxiComponent,

    },
        {
        path: "about",
        title: "about",
        component: AboutComponent,

    },
         {
        path: "contact-us",
        title: "contact-us",
        component: ContactUsComponent,

    },
];
