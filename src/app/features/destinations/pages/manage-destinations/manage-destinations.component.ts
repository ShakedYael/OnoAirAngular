import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../service/destinations.service';
import { Destination } from '../../model/destination.model';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router'; 
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-manage-destinations',
  imports: [MatTableModule, MatIconModule, RouterModule,MatButtonModule],
  templateUrl: './manage-destinations.component.html',
  styleUrl: './manage-destinations.component.css'
})
export class ManageDestinationsComponent implements OnInit {
  destinations: Destination[] = [];
  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinations = this.destinationService.list(); 
  }
}
