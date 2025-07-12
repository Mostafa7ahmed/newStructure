import { Component } from '@angular/core';
import { CardtripComponent } from "../home/cardtrip/cardtrip.component";
import { BesttripComponent } from "../home/besttrip/besttrip.component";

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [CardtripComponent, BesttripComponent],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.scss'
})
export class TripComponent {

}
