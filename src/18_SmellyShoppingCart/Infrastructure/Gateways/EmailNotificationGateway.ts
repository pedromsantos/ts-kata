/* eslint-disable */

import { NotificationPort } from '../../Domain/Ports/NotificationPort';

export class EmailNotificationGateway implements NotificationPort {
  constructor(private readonly fromAddress: string = 'orders@shop.example.com') {}

  send(to: string, message: string): void {
    console.log(`[EMAIL ${this.fromAddress} -> ${to}] ${message}`);
  }
}
