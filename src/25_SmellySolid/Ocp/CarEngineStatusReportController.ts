/* eslint-disable */
import { CarEnginePrintView } from './CarEnginePrintView';
import type { CarEngineViewModel } from './CarEngineViewModel';
import { CarEngineWebView } from './CarEngineWebView';

// OCP violation: every new report format needs a new method on this
// controller (and a new concrete view class) — the controller must be
// edited, not extended, to add a case.
export class CarEngineStatusReportController {
  constructor(private readonly viewModel: CarEngineViewModel) {}

  displayEngineStatusReport(): CarEngineWebView {
    const webView = new CarEngineWebView();
    webView.fillWith(this.viewModel);
    return webView;
  }

  printEngineStatusReport(): CarEnginePrintView {
    const printView = new CarEnginePrintView();
    printView.fillWith(this.viewModel);
    return printView;
  }
}
