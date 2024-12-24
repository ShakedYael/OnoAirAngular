import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../../service/destinations.service';
import { Destination } from '../../model/destination.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-single-destination',
  imports: [CommonModule],
  templateUrl: './single-destination.component.html',
  styleUrl: './single-destination.component.css'
})
export class SingleDestinationComponent implements OnInit {
  destination?: Destination; // Store the selected destination

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    // Get the destination code from the route parameters
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      // Fetch the destination details using the service
      this.destination = this.destinationService.list().find(dest => dest.code === code);
    }
  }
}
