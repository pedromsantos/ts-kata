/* eslint-disable */
interface Location {
  lat: number;
  lng: number;
}

// ISP violation: gasoline and electric refuelling are mutually exclusive
// capabilities bundled into one fat interface — no single car honestly
// supports both.
export interface IAmACar {
  goTo(location: Location): void;
  refillGasoline(gallons: number): void;
  refillElectricity(kiloWatts: number): void;
  currentMileage(): number;
}
