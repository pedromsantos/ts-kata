/* eslint-disable */
// Connascence of Meaning: "1"/"2"/"3"/"4" only mean bike/car/train/bus by
// an unstated convention shared between the caller and this switch —
// nothing in the code documents or enforces the mapping.
export class TransportSelector {
  private selected: string[] = [];

  setTransport(transport: string): void {
    switch (transport) {
      case '1':
        this.selected.push('bike');
        break;
      case '2':
        this.selected.push('car');
        break;
      case '3':
        this.selected.push('train');
        break;
      case '4':
        this.selected.push('bus');
        break;
      default:
        throw new Error(`Unknown transport code: ${transport}`);
    }
  }
}
