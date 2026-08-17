export interface NotificationPort {
  send(to: string, message: string): void;
}
