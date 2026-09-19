/* eslint-disable */
import { writeFileSync } from 'node:fs';

interface Location {
  lat: number;
  lng: number;
}

// SRP violation: Car mixes domain behaviour (mileage/travel) with a
// persistence concern (save) — two different reasons to change bundled
// into one class.
export class Car {
  private mileage = 0;
  private location: Location = { lat: 0, lng: 0 };

  currentMileage(): number {
    return this.mileage;
  }

  travelTo(location: Location): void {
    this.location = location;
    this.mileage += 1;
  }

  save(): void {
    const row = JSON.stringify({ mileage: this.mileage, location: this.location });
    writeFileSync('/tmp/car.json', row);
  }
}
