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
  destination?: Destination; 
  destinationNotFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      
      const destination = this.destinationService.list().find(dest => dest.code === code);

      if (destination) {
        this.destination = destination; 
      } else {
        this.destinationNotFound = true;
      }
    } else {
      this.destinationNotFound = true;
    }
  }
}
