import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';

export interface ApiData {
  // Replace with your actual data structure
  id?: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  apiData!: Table<ApiData, number>;

  constructor() {
    super('MyAppDatabase'); // Choose a name for your database
    this.version(1).stores({
      apiData: '++id, title', // Define your table structure (primary key, indexes)
    });
  }

  async storeData(data: ApiData[]) {
    return await this.apiData.bulkPut(data);
  }

  async getAllData(): Promise<ApiData[]> {
    return await this.apiData.toArray();
  }

  async getDataById(id: number): Promise<ApiData | undefined> {
    return await this.apiData.get(id);
  }

  async clearData() {
    return await this.apiData.clear();
  }
}
