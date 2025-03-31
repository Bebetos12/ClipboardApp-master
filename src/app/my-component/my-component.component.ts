import { Component, OnInit } from '@angular/core';
import { DexieService, ApiData } from '../dexie.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true, // Mark component as standalone
  imports: [NgFor], // Add NgFor to imports
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponent implements OnInit {
  data: ApiData[] = []; // Initialize data as an empty array

  constructor(private dexieService: DexieService, private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<ApiData[]>('YOUR_API_ENDPOINT').subscribe(
      (apiData) => {
        this.data = apiData; // Populate data with API response
        this.dexieService.storeData(apiData);
      },
      (error) => {
        console.error('API Error:', error);
        this.dexieService.getAllData().then((dexieData) => {
          this.data = dexieData; // Populate data with Dexie data if API fails
        });
      }
    );
  }

  clearDexieData() {
    this.dexieService.clearData();
    this.data = [];
  }
}