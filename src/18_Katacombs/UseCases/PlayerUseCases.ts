import { Action, Direction, Id } from './Requests';
import { Bag, Help, Item, Location } from './Responses';

export interface GetHelpAndHintsuseCase {
  execute(playerId: Id): Help;
}

export interface LookArroundUseCase {
  execute(playerId: Id): Location;
}

export interface GetDirectionDescriptionSeCase {
  execute(playerId: Id, direction: Direction): Location;
}

export interface GetBagUseCase {
  execute(playerId: Id): Bag;
}

export interface UseItemUseCase {
  execute(playerId: Id, itemId: Id, action: Action): void;
}

export interface MoveUseCase {
  execute(playerId: Id, direction: Direction): void;
}

export interface GetItemDescriptionUseCase {
  execute(itemId: Id): Item;
}
