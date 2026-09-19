/* eslint-disable */
// Connascence of Position: three same-typed string parameters carry
// meaning only through argument order — swap recipient and sender and
// the call still compiles, but breaks silently.
export class NotificationSystem {
  sendEmail(recipient: string, sender: string, message: string): void {
    console.log(`From: ${sender}`);
    console.log(`To: ${recipient}`);
    console.log(`Message: ${message}`);
  }
}

const notificationSystem = new NotificationSystem();
notificationSystem.sendEmail('recipient@email.com', 'sender@email.com', 'text');
