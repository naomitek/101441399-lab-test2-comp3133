import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Mission } from '../../models/mission';
import { SpacexService } from '../../services/spacex.service';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatCardModule,
    NgClass,
    MatButtonModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  loading: boolean = true;
  error: string = '';
  
  // Filter variables
  currentYear: string = '';
  currentSuccessFilter: boolean | null = null;

  constructor(
    private spacexService: SpacexService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.loading = true;
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.missions = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load missions. Please try again later.';
        this.loading = false;
        console.error('Error fetching missions:', err);
      }
    });
  }

  viewMissionDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }

  onYearChange(year: string): void {
    this.currentYear = year;
    this.applyFilters();
  }

  onSuccessFilterChange(successFilter: boolean | null): void {
    this.currentSuccessFilter = successFilter;
    this.applyFilters();
  }

  applyFilters(): void {
    this.loading = true;
    
    // If year filter is active, use the API
    if (this.currentYear && this.currentSuccessFilter === null) {
      this.spacexService.getMissionsByYear(this.currentYear).subscribe({
        next: (data) => {
          this.filteredMissions = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to filter missions. Please try again later.';
          this.loading = false;
          console.error('Error filtering missions:', err);
        }
      });
    } else {
      // Start with all missions
      let filtered = [...this.missions];
      
      // Apply year filter if present
      if (this.currentYear) {
        filtered = filtered.filter(mission => mission.launch_year === this.currentYear);
      }
      
      // Apply success filter if present
      if (this.currentSuccessFilter !== null) {
        filtered = filtered.filter(mission => mission.launch_success === this.currentSuccessFilter);
      }
      
      this.filteredMissions = filtered;
      this.loading = false;
    }
  }
}