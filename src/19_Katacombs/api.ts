import express from 'express';
import { middleware } from 'express-openapi-validator';
import path from 'path';

const app = express();
const port = 3000;

// Base types
interface Player {
  sid: string;
  name: string;
  location: Location;
  bag: Bag;
}

interface Location {
  description: string;
  exits: Direction[];
  items: Item[];
}

interface Item {
  sid: string;
  name: string;
  description: string;
  actions: Action[];
}

interface Bag {
  items: Item[];
}

type Direction = 'north' | 'south' | 'east' | 'west' | 'up' | 'down';
type Action = 'open' | 'close' | 'pick' | 'drop' | 'use';

interface PlayerParams {
  playerSid: string;
}

interface ItemParams {
  itemSid: string;
}

interface DirectionParams extends PlayerParams {
  direction: Direction;
}

interface UseItemParams extends PlayerParams, ItemParams {
  action: Action;
}

interface GameOverResponse {
  message: string;
}

interface ListPlayersResponse {
  players: Player[];
}

interface BagResponse {
  playerSid: string;
  items: Item[];
}

interface UseItemResponse {
  playerSid: string;
  itemSid: string;
  action: Action;
  message: string;
}

interface LocationResponse {
  playerSid: string;
  description: string;
  exits: Direction[];
  items: Item[];
}

interface DirectionResponse extends LocationResponse {
  direction: Direction;
}

interface MoveResponse {
  playerSid: string;
  direction: Direction;
  message: string;
}

app.use(express.json());

app.use(
  middleware({
    apiSpec: path.join(__dirname, 'katacombsAPI.yml'),
    validateRequests: true,
    validateResponses: true,
  }),
);

app.post('/game/player', (req: express.Request<Record<string, never>, Player, Player>, res) => {
  const player = req.body;
  // TODO: Implement game start logic
  const newPlayer: Player = {
    ...player,
    sid: '000000-000000000000-00000000',
    location: {
      description: 'You are at the entrance',
      exits: ['north'],
      items: [],
    },
    bag: {
      items: [],
    },
  };
  res.status(201).json(newPlayer);
});

app.get('/game/player', (_req, res: express.Response<ListPlayersResponse>) => {
  // TODO: Implement list players logic
  res.status(200).json({ players: [] });
});

app.delete(
  '/game/:playerSid',
  (_req: express.Request<PlayerParams>, res: express.Response<GameOverResponse>) => {
    // TODO: Implement quit game logic
    res.status(200).json({ message: 'Game Over' });
  },
);

app.get(
  '/player/items/:itemSid',
  (req: express.Request<ItemParams>, res: express.Response<Item>) => {
    const { itemSid } = req.params;
    // TODO: Implement item inspection logic using itemSid
    res.status(200).json({
      sid: itemSid,
      name: 'Sample Item',
      description: 'Sample Description',
      actions: ['open', 'close'],
    });
  },
);

app.get(
  '/player/:playerSid/bag',
  (req: express.Request<PlayerParams>, res: express.Response<BagResponse>) => {
    const { playerSid } = req.params;
    // TODO: Implement bag content logic using playerSid
    res.status(200).json({ playerSid, items: [] });
  },
);

app.put(
  '/player/:playerSid/item/:itemSid/use/:action',
  (req: express.Request<UseItemParams>, res: express.Response<UseItemResponse>) => {
    const { playerSid, itemSid, action } = req.params;
    // TODO: Implement use item logic using playerSid, itemSid, and action
    res.status(200).json({
      playerSid,
      itemSid,
      action: action as Action,
      message: 'Action completed successfully',
    });
  },
);

app.get(
  '/player/:playerSid/location',
  (req: express.Request<PlayerParams>, res: express.Response<LocationResponse>) => {
    const { playerSid } = req.params;
    // TODO: Implement look around logic using playerSid
    res.status(200).json({
      playerSid,
      description: 'You are in a room',
      exits: ['north', 'south'],
      items: [],
    });
  },
);

app.get(
  '/player/:playerSid/look/:direction',
  (req: express.Request<DirectionParams>, res: express.Response<DirectionResponse>) => {
    const { playerSid, direction } = req.params;
    // TODO: Implement look direction logic using playerSid and direction
    res.status(200).json({
      playerSid,
      direction: direction as Direction,
      description: 'You see a path leading somewhere',
      exits: [],
      items: [],
    });
  },
);

app.put(
  '/player/:playerSid/move/:direction',
  (req: express.Request<DirectionParams>, res: express.Response<MoveResponse>) => {
    const { playerSid, direction } = req.params;
    // TODO: Implement move logic using playerSid and direction
    res.status(200).json({
      playerSid,
      direction: direction as Direction,
      message: 'Moved successfully',
    });
  },
);

interface ApiError extends Error {
  status?: number;
}

app.use((err: ApiError, _req: express.Request, res: express.Response) => {
  const status = err.status ?? 500;
  res.status(status).json({
    code: status,
    message: err.message,
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Katacombs API listening at http://localhost:${port}`);
});

export default app;
