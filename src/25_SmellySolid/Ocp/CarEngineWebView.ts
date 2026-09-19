/* eslint-disable */
import type { CarEngineViewModel } from './CarEngineViewModel';

export class CarEngineWebView {
  html = '';

  fillWith(viewModel: CarEngineViewModel): void {
    this.html = `<div>${viewModel.rpm} rpm, ${viewModel.temperature}C</div>`;
  }
}
