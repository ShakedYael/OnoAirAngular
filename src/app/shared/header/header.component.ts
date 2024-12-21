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
  constructor(private router: Router) {} // Inject Router for navigation


   // Navigate to specific route
   navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  // Navigate to the home page
  goToHome(): void {
    this.router.navigate(['/home-page']);
  }

  // Placeholder for toggling admin menu
  toggleAdminMenu(): void {
    console.log('Admin menu toggled');
  }

}





