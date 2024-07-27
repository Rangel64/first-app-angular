import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  housingList: HousingLocation[] = [];
  housing: HousingLocation | undefined;

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise< HousingLocation | undefined > {
    const data = await fetch(this.url);
    this.housingList = (await data.json()) ?? [];

    this.housingList.forEach((housing)=>{
      if(housing?.id == id){
        this.housing = housing;
      }
    });
    return this.housing
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}`)
  }

}
