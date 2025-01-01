import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule,MatMenuModule],
  templateUrl: './header.component.html',

  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}


   navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  goToHome(): void {
    this.router.navigate(['/home-page']);
  }

  toggleAdminMenu(): void {
    console.log('Admin menu toggled');
  }

}





