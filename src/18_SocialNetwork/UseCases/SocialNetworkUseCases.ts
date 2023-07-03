export interface UseCase {
  execute(command: string): void;
  query(query: string): string;
}
