import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfoundpage',
  standalone: true,
  imports: [],
  templateUrl: './notfoundpage.component.html',
  styleUrl: './notfoundpage.component.scss'
})
export class NotfoundpageComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
