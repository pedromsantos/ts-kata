/* eslint-disable */
import type { CarEngineViewModel } from './CarEngineViewModel';

export class CarEnginePrintView {
  text = '';

  fillWith(viewModel: CarEngineViewModel): void {
    this.text = `RPM: ${viewModel.rpm}, Temp: ${viewModel.temperature}`;
  }
}
