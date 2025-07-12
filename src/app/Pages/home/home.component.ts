import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { CardtripComponent } from "./cardtrip/cardtrip.component";
import { BesttripComponent } from "./besttrip/besttrip.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, AboutusComponent, CardtripComponent, BesttripComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
