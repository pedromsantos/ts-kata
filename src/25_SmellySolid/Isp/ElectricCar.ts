/* eslint-disable */
import type { IAmACar } from './IAmACar';

interface Location {
  lat: number;
  lng: number;
}

export class ElectricCar implements IAmACar {
  private mileage = 0;
  private batteryKiloWatts = 0;

  goTo(location: Location): void {
    this.mileage += 1;
    console.log(`Driving to ${location.lat}, ${location.lng}`);
  }

  refillGasoline(_gallons: number): void {
    throw new Error("Electric cars don't take gasoline");
  }

  refillElectricity(kiloWatts: number): void {
    this.batteryKiloWatts += kiloWatts;
  }

  currentMileage(): number {
    return this.mileage;
  }
}
