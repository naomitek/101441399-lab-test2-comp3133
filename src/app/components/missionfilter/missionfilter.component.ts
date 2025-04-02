import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    NgIf,
    NgFor
  ],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent implements OnInit {
  @Output() yearChange = new EventEmitter<string>();
  @Output() successFilterChange = new EventEmitter<boolean | null>();
  
  years: string[] = [];
  selectedYear: string = '';
  successFilter: boolean | null = null;

  constructor() {
    // Generate years from 2006 to 2023
    for (let year = 2006; year <= 2023; year++) {
      this.years.push(year.toString());
    }
  }

  ngOnInit(): void {
  }

  onYearChange(): void {
    this.yearChange.emit(this.selectedYear);
  }

  onSuccessFilterChange(): void {
    this.successFilterChange.emit(this.successFilter);
  }

  clearFilters(): void {
    this.selectedYear = '';
    this.successFilter = null;
    this.yearChange.emit('');
    this.successFilterChange.emit(null);
  }
}