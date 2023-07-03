export interface Item {
  uri: string;
  name: string;
  description: string;
  actions: string[];
}

export interface Bag {
  items: Item[];
}

export interface Command {
  name: string;
  description: string;
  usage: string;
}

export interface Help {
  commands: Command[];
  hints: string[];
}

export interface Player {
  sid: string;
  name: string;
}

export declare type ListOfPlayers = Player[];

export interface Location {
  description: string;
  exits: string[];
  items: Item[];
}
