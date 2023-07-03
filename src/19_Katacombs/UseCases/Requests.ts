export declare type Action = 'open' | 'close' | 'pick' | 'drop' | 'use';
export declare const Action: {
  readonly Open: 'open';
  readonly Close: 'close';
  readonly Pick: 'pick';
  readonly Drop: 'drop';
  readonly Use: 'use';
};

export declare type Direction = 'north' | 'south' | 'east' | 'west' | 'up' | 'down';
export declare const Direction: {
  readonly North: 'north';
  readonly South: 'south';
  readonly East: 'east';
  readonly West: 'west';
  readonly Up: 'up';
  readonly Down: 'down';
};

export interface PlayerData {
  sid: string;
  name: string;
}

export type Id = string;
