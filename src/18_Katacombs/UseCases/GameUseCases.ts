import { Id, PlayerData } from './Requests';
import { ListOfPlayers } from './Responses';

export interface ListPlayersUseCase {
  execute(): ListOfPlayers;
}

export interface CreatePlayerUseCase {
  execute(player: PlayerData): void;
}

export interface QuitGameUseCase {
  execute(playerId: Id): void;
}
