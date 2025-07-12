import { Component } from '@angular/core';
import { AboutusComponent } from "../home/aboutus/aboutus.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutusComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
