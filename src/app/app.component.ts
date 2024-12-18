import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';


@Component({
  selector: 'app-root',
  imports: [FooterComponent, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ono-air-angular';
}
