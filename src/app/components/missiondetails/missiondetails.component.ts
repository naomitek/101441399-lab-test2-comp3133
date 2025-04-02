import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Mission } from '../../models/mission';
import { SpacexService } from '../../services/spacex.service';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    NgIf,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit {
  mission: Mission | null = null;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexService: SpacexService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const flightNumber = +params['id'];
      if (flightNumber) {
        this.loadMissionDetails(flightNumber);
      } else {
        this.router.navigate(['/missions']);
      }
    });
  }

  loadMissionDetails(flightNumber: number): void {
    this.loading = true;
    this.spacexService.getMissionByFlightNumber(flightNumber).subscribe({
      next: (data) => {
        this.mission = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load mission details. Please try again later.';
        this.loading = false;
        console.error('Error fetching mission details:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/missions']);
  }
}