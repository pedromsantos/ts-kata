/* eslint-disable */
// Connascence of Execution Order: Archive() is only correct if
// sendToCustomer() has already run, but nothing in the type or method
// signatures expresses that — the caller has to know the right order
// from tribal knowledge, not from the code.
export class ReceiptSender {
  private sent = false;

  sendToCustomer(receiptId: string): void {
    console.log(`Emailing receipt ${receiptId} to customer`);
    this.sent = true;
  }

  archive(receiptId: string): void {
    if (!this.sent) {
      console.log(`Warning: archiving ${receiptId} before it was sent`);
    }
    console.log(`Archiving receipt ${receiptId}`);
  }
}
