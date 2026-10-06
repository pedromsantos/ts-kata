# Katacombs

## Source

<https://github.com/conso/katacombs>

## Project Requirements

- Implement a REST API transport layer.
- Use an in-memory database.
- Several rules use time. Make time controllable in tests.

Players play with the text commands in this README. The REST API takes
these commands. You decide the design of the API. The map editor and the
map review ([Extension 4b](#extension-4b-map-editor) and
[Extension 4c](#extension-4c-map-review)) are API operations only. They
do not have text commands.

## Game Overview

Katacombs is a text-based adventure game. In the game, players:

- explore locations that connect to each other,
- move in the cardinal directions or through special connections,
- collect treasures,
- find the katacomb exit to win,
- get a score from the value of the treasures that they collect.

## Gameplay Guide

### Game Start

```text
LOST IN SHOREDITCH.
YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY.
AROUND YOU IS A FOREST OF RESTAURANTS.
A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.
EXITS: N, E
>
```

### Available Commands

#### Movement

- `GO N/E/S/W` - Move in a cardinal direction.
- `GO UP/DOWN` - Move up or down.
- `LOOK [direction/item]` - Examine the area around you, a direction, or
  an item.

#### Interaction

- `OPEN [item]` - Open a door, a gate, or a different item.
- `CLOSE [item]` - Close a door, a gate, or a different item.
- `TAKE [item]` - Collect an item (max 10 in bag).
- `DROP [item]` - Put down an item.
- `BAG` - Show the items in the bag.
- `USE [item]` - Use an item in a specific location.

#### System Commands

- `?` - Show the help menu.
- `QUIT` - End the game.

### Game Mechanics

#### Location Descriptions

The description of a location has these lines:

1. The description text.
2. `EXITS:` and the directions that have an open connection.
3. `ITEMS:` and the items in the location. The game shows this line only
   when the location has items.

```text
> GO E
THE OLD SPITALFIELDS MARKET. THE STALLS ARE CLOSED FOR THE NIGHT.
EXITS: W, S
ITEMS: CRATE
>
```

#### Items and the Bag

- Bag limit: 10 items.
- You can take and drop items in all locations.

#### Gold Collection

- The game collects gold automatically at these times:
  - the first visit to a location with gold,
  - the first time that a player opens an item that contains gold.
- The bag shows the total gold.

#### Winning and Score

- A player who arrives at the katacomb exit wins. Then the game ends.
- The score is the total treasure value of the items in the bag at the
  time of the win. Gold is not part of the score.

#### World Rules

1. Each location must have a unique title.
2. Each connection must have a reverse connection that matches it.
   - For example, south from A goes to B. Then north from B must go to A.
   - This rule applies to all directions (N/S/E/W/UP/DOWN).

## The World

All implementations use this world. The player starts at BRICK LANE.

### Locations

| Title               | Description                                                                                                                                                                                                              | Exits                                                    | Items at the start | Gold |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------ | ---- |
| BRICK LANE          | YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY. AROUND YOU IS A FOREST OF RESTAURANTS. A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY. | N: OLD TRUMAN BREWERY, E: SPITALFIELDS MARKET            |                    | 0    |
| OLD TRUMAN BREWERY  | YOU ARE INSIDE THE OLD BREWERY. COPPER VATS LINE THE WALLS. A STAIRCASE GOES UP TO THE ROOF AND A TRAPDOOR GOES DOWN TO THE CELLAR.                                                                                      | S: BRICK LANE, UP: BREWERY ROOFTOP, DOWN: BREWERY CELLAR | BEER               | 5    |
| BREWERY CELLAR      | A COLD CELLAR FULL OF EMPTY BARRELS. SOMETHING SHINES ON THE FLOOR.                                                                                                                                                      | UP: OLD TRUMAN BREWERY                                   | RING               | 20   |
| BREWERY ROOFTOP     | YOU ARE ON THE ROOF OF THE BREWERY. YOU CAN SEE ALL OF SHOREDITCH.                                                                                                                                                       | DOWN: OLD TRUMAN BREWERY                                 | KEY                | 0    |
| SPITALFIELDS MARKET | THE OLD SPITALFIELDS MARKET. THE STALLS ARE CLOSED FOR THE NIGHT.                                                                                                                                                        | W: BRICK LANE, S: BACK YARD                              | CRATE              | 0    |
| BACK YARD           | A SMALL YARD BEHIND THE MARKET. THERE IS A MANHOLE COVER IN THE GROUND.                                                                                                                                                  | N: SPITALFIELDS MARKET                                   | MANHOLE            | 0    |
| KATACOMBS           | DAMP STONE TUNNELS. SKULLS LINE THE WALLS. A FAINT LIGHT GLOWS TO THE EAST.                                                                                                                                              | E: KATACOMBS EXIT                                        | GOBLET             | 30   |
| KATACOMBS EXIT      | DAYLIGHT! YOU HAVE FOUND THE WAY OUT OF THE KATACOMBS.                                                                                                                                                                   | W: KATACOMBS                                             |                    | 0    |

"Gold" is the gold in the location. See
[Gold Collection](#gold-collection) for when the game collects it.

KATACOMBS EXIT is the katacomb exit.

### Items

| Name    | Description                                            | Commands        | Treasure value | Gold |
| ------- | ------------------------------------------------------ | --------------- | -------------- | ---- |
| BEER    | A BOTTLE OF CRAFTED BEER FROM THE BREWERY.             | TAKE, DROP, USE |                |      |
| KEY     | A SMALL IRON KEY. IT HAS A PICTURE OF A MANHOLE ON IT. | TAKE, DROP, USE |                |      |
| RING    | A SILVER RING. SOMEBODY LOST IT A LONG TIME AGO.       | TAKE, DROP      | 20             |      |
| CRATE   | A HEAVY WOODEN CRATE WITH A LOOSE LID.                 | OPEN, CLOSE     |                | 10   |
| MANHOLE | A ROUND IRON MANHOLE COVER WITH A KEYHOLE.             | OPEN, CLOSE     |                |      |
| GOBLET  | A GOLDEN GOBLET. IT LOOKS VERY VALUABLE.               | TAKE, DROP      | 50             |      |

"Gold" is the gold in the item. The game collects it when a player opens
the item for the first time.

### Special Items

- **MANHOLE:** the manhole is locked at the start. A locked item does not
  open.
- **KEY:** use the key in the BACK YARD to unlock the manhole.
- **Special connection:** when the manhole is open, the BACK YARD goes
  DOWN to the KATACOMBS, and the KATACOMBS go UP to the BACK YARD. When
  the manhole closes, this connection closes too.
- **BEER:** when a player uses the beer, the player drinks it. The beer
  leaves the bag.

## Extensions

The extensions change Katacombs into a multiplayer game with many maps.
Do them in this order. Each extension uses the extensions before it, and
each extension is complete without the extensions after it.

1. [Authentication](#extension-1-authentication)
2. [Player Chat](#extension-2-player-chat)
3. [Player Guilds](#extension-3-player-guilds)
4. Maps:
   - 4a. [Map Catalogue](#extension-4a-map-catalogue)
   - 4b. [Map Editor](#extension-4b-map-editor)
   - 4c. [Map Review](#extension-4c-map-review)
5. [Moderation](#extension-5-optional-moderation) (optional)

The commands use these placeholders: `[player]` is a player name,
`[guild]` is a guild name, `[map]` is a map title, and `[message]` is the
text of a message.

When this README does not give a response, choose a clear response and
test it.

### Extension 1: Authentication

A player must have an account to play. All players play in the same
world at the same time.

#### Accounts

- `REGISTER [player] [password]` - Make an account.
- `LOGIN [player] [password]` - Start a session.
- `LOGOUT` - End the session.
- `WHO` - Show the names of the players who are online.

#### Account Rules

1. A player name has 3 to 16 letters and digits. It must start with a
   letter.
2. Each player name must be unique. Names are not case-sensitive: `ada`
   and `ADA` are the same name.
3. A password has a minimum of 8 characters.
4. Do not keep passwords as plain text.
5. A new account starts at BRICK LANE with an empty bag and 0 gold.

#### Session Rules

1. `LOGIN` gives a session token. All other commands, except `REGISTER`
   and `?`, must send the token.
2. A command without a valid token gets the response
   `YOU MUST LOG IN FIRST.`
3. A player is online while their session is active.
4. A session ends after 30 minutes without a command.
5. A player can have one session only. A new `LOGIN` ends the old
   session.
6. `LOGOUT` ends the session.
7. After 3 incorrect passwords in sequence, the account locks for 5
   minutes. A correct `LOGIN` sets the count to 0.
8. The response to an incorrect `LOGIN` is always
   `INCORRECT NAME OR PASSWORD.` Do not tell the player if the name or
   the password is incorrect. The response to a `LOGIN` to a locked
   account is the same, also when the password is correct.

#### Changes to the Base Game

- `QUIT` ends the session, the same as `LOGOUT`. It does not end the
  game.
- The game keeps the position, the bag, and the gold of the player for
  the next session.
- After a win, the player stays at the katacomb exit and can continue to
  play. The score does not change after the first win.

#### Shared World

- Each player has their own position, bag, and gold.
- Each player has their own copy of the items. When a player takes the
  RING, the RING stays in the BREWERY CELLAR for the other players. Open,
  closed, and locked items are also different for each player.
- Each player collects the gold of a location or an item one time. When
  a player collects gold, the gold stays for the other players.
- The description of a location has a `PLAYERS:` line with the other
  players in the location who are online. The game shows this line only
  when there are other players.

```text
> GO E
THE OLD SPITALFIELDS MARKET. THE STALLS ARE CLOSED FOR THE NIGHT.
EXITS: W, S
ITEMS: CRATE
PLAYERS: ADA, LINUS
>
```

### Extension 2: Player Chat

Players who are online can send messages to each other.

#### Chat Commands

- `SAY [message]` - Send a message to all players in your location.
- `SHOUT [message]` - Send a message to all players who are online.
- `WHISPER [player] [message]` - Send a message to one player.
- `MUTE [player]` - Stop the messages from a player.
- `UNMUTE [player]` - Start the messages from a player again.

#### Chat Rules

1. A message has 1 to 200 characters.
2. A player can send a maximum of 5 messages in 10 seconds with the
   commands that send messages. After that, the response is `SLOW DOWN.`
3. `SAY` sends the message to the players who are in the location at
   that time. A player who arrives later does not get it.
4. A player can whisper only to a player who is online. If not, the
   response is `[PLAYER] IS NOT ONLINE.`
5. A player does not get messages from a player that they muted. Muted
   players do not know that they are muted. A mute stays after `LOGOUT`.
6. The game keeps the messages for a player until the player reads them,
   also after `LOGOUT`. The response to the next command of the player
   shows the new messages before the result of the command.
7. The game shows the oldest message first.

```text
> GO E
ADA WHISPERS: THE CRATE HAS GOLD IN IT.
LINUS SHOUTS: WHO HAS THE KEY?
THE OLD SPITALFIELDS MARKET. THE STALLS ARE CLOSED FOR THE NIGHT.
EXITS: W, S
ITEMS: CRATE
PLAYERS: ADA
>
```

### Extension 3: Player Guilds

Players can make a guild and play as a team.

#### Guild Commands

- `GUILD CREATE [guild]` - Make a guild. You are the leader.
- `GUILD INVITE [player]` - Invite a player to your guild.
- `GUILD JOIN [guild]` - Accept an invitation to a guild.
- `GUILD LEAVE` - Leave your guild.
- `GUILD KICK [player]` - Remove a player from your guild.
- `GUILD` - Show the guild name, the members, the leader, and the guild
  score.
- `GUILD SAY [message]` - Send a message to all members of your guild.
- `GUILDS` - Show all guilds in sequence of score, highest first.

#### Guild Rules

1. A guild name has 3 to 20 letters, digits, and spaces. Each guild name
   must be unique. Names are not case-sensitive.
2. A guild costs 50 gold. The game removes the gold from the player who
   makes the guild.
3. A player can be a member of one guild only.
4. A guild has a maximum of 10 members.
5. Only the leader can invite and kick players.
6. An invitation ends after 24 hours, or when the player joins a
   different guild.
7. When the leader leaves, the remaining member who joined first becomes
   the leader.
8. When the last member leaves, the guild closes. Then a different guild
   can use the name.
9. The guild score is the total of the scores of its members. A player
   who leaves the guild takes their score with them.
10. `GUILD SAY` uses the [Chat Rules](#chat-rules). The members get the
    message in all locations. Members who are offline get the message
    after their next `LOGIN`.

```text
> GUILD
GUILD: THE BEER HUNTERS
LEADER: ADA
MEMBERS: ADA, LINUS, GRACE
SCORE: 70
>
```

### Extension 4a: Map Catalogue

Katacombs has more than one map. A player selects the map to play. The
world in this README is the first map: LOST IN SHOREDITCH. The
configuration gives the other maps.

#### Changes for Maps

- The position, the bag, and the items of a player are different on
  each map. When a player goes back to a map, the player continues from
  their last position on that map.
- Gold is for the account, not for the map. The bag shows the total gold
  from all maps. Guilds use this gold.
- Each player collects the gold of a location or an item one time on
  each map.
- A new account starts at the start location of LOST IN SHOREDITCH.
- Players see each other only when they are in the same location on the
  same map.
- `SHOUT` sends a message to the players who are online on your map.
  `WHISPER` and `GUILD SAY` send a message on all maps.
- `WHO` also shows the map of each player.
- The score of a player is the total of their scores on all maps.

#### Map Commands

- `MAPS` - Show the maps.
- `MAP [map]` - Show the metadata and the statistics of a map.
- `PLAY [map]` - Go to a map. The response is the description of your
  location on that map.

```text
> MAPS
LOST IN SHOREDITCH   EASY    BY ADMIN
THE SEWER KING       HARD    BY ADA
> MAP THE SEWER KING
THE SEWER KING
BY ADA. HARD.
FOLLOW THE RATS UNDER THE CITY AND FIND THE CROWN OF THE SEWER KING.
LOCATIONS: 14. TREASURE: 80.
PLAYED BY 23 PLAYERS. WON BY 4 PLAYERS.
>
```

#### Map Metadata

Each map has:

- **Title:** 3 to 40 letters, digits, and spaces. Each title must be
  unique. Titles are not case-sensitive. The title of a map does not
  change.
- **Summary:** 1 to 300 characters.
- **Difficulty:** EASY, MEDIUM, or HARD.
- **Author:** a player name. The author of LOST IN SHOREDITCH is `ADMIN`.

The game calculates:

- the number of locations and the total treasure value,
- the number of players who played the map,
- the number of players who won the map.

### Extension 4b: Map Editor

All players can make maps. The map editor is API operations only.

#### Editor Operations

The author changes a draft of a map. Players do not see drafts.

- Start a draft of a new map. The draft is empty.
- Start a draft of a new version of your map. The draft is a copy of the
  published version.
- Set the title, the summary, and the difficulty. The title of a new
  version cannot change.
- Add, rename, describe, and remove a location. When a location is
  removed, its connections and its items are removed too.
- Connect two locations in a direction. The editor adds the reverse
  connection automatically.
- Disconnect two locations. The editor removes the reverse connection
  automatically.
- Add an item to a location, and remove an item from a location.
- Set the [properties](#item-properties) of an item.
- Set the gold of a location.
- Set the start location and the katacomb exit.
- Validate the draft.
- Publish the draft.
- Discard the draft.

#### Item Properties

The special items of the base game become item properties. All maps
use the same properties.

- **Takeable:** `TAKE` and `DROP` work.
- **Openable:** `OPEN` and `CLOSE` work.
- **Treasure value:** the value of the item for the score.
- **Gold:** the game collects the gold when a player opens the item for
  the first time. Openable items only.
- **Locked by [item]:** the item is locked at the start. `USE [item]` in
  the same location unlocks it. Openable items only.
- **Opens connection [direction] [location]:** when the item is open, the
  connection and its reverse connection are open. Openable items only.
- **Used up:** `USE` removes the item from the bag.

LOST IN SHOREDITCH uses the properties like this:

| Item    | Properties                                                |
| ------- | --------------------------------------------------------- |
| BEER    | Takeable. Used up.                                        |
| KEY     | Takeable.                                                 |
| RING    | Takeable. Treasure value 20.                              |
| CRATE   | Openable. Gold 10.                                        |
| MANHOLE | Openable. Locked by KEY. Opens connection DOWN KATACOMBS. |
| GOBLET  | Takeable. Treasure value 50.                              |

#### Editor Rules

1. Only the author can change a map. An author can have one draft of
   each map.
2. The editor does not let a draft break the
   [World Rules](#world-rules). For example, a connection to a direction
   that has a connection already does not occur. This also applies to
   the connections that items open.
3. Validation finds these errors:
   - There is no title, summary, or difficulty.
   - A different map has the same title.
   - There is no start location.
   - There is no katacomb exit.
   - A location is not reachable from the start location.
   - The katacomb exit is not reachable from the start location.
   - Two items have the same name.
   - An item is locked by an item that is not in the map, or that is not
     takeable.
   - The total gold of the map is more than 100. The total gold is the
     gold of all locations and all items.
4. For reachability, validation counts all connections as open,
   including the connections that items open.
5. A draft with validation errors does not publish. The response shows
   all the errors, not only the first error.
6. Publish makes a new version of the map. A new map is version 1. A new
   version of a map is version 2, version 3, and so on. `MAP` shows the
   version.
7. A player goes into the new version of a map at their next `LOGIN` or
   `PLAY` on that map:
   - A player in a location that is in the new version stays there.
   - A player in a location that is not in the new version goes to the
     start location.
   - The bag and the gold of the player do not change. Items in the bag
     stay in the bag, also when they are not in the new version.
   - An item that is in the old version and the new version keeps its
     state for the player: taken, open, closed, or locked. A new item
     starts in its start state.
   - A player does not get the gold of a location or an item again if
     they collected it in an earlier version.

```text
VALIDATION FAILED:
- THE LOCATION ROOFTOP GARDEN IS NOT REACHABLE FROM BRICK LANE.
- THERE IS NO KATACOMB EXIT.
- THE TOTAL GOLD IS 140. THE MAXIMUM IS 100.
```

### Extension 4c: Map Review

Curators approve maps before players can play them. Map review is API
operations only.

#### Curators

- Each account is a player. A player can also be a curator.
- At the start, one curator account exists: name `ADMIN`. The
  configuration gives its password.
- A curator can make a player into a curator.
- Only curators can review maps. All other players get the response
  `YOU ARE NOT A CURATOR.`

#### Changes for Map Review

- The author cannot publish a draft. The author submits the draft for
  review. A curator publishes it.
- A map is OFFICIAL or COMMUNITY. `MAPS` and `MAP` show the type.
  `MAPS OFFICIAL` and `MAPS COMMUNITY` show one type only.
- The maps from the configuration are official.

```text
> MAPS
LOST IN SHOREDITCH   OFFICIAL    EASY    BY ADMIN
THE SEWER KING       COMMUNITY   HARD    BY ADA
>
```

#### Review Operations

- Submit a draft for review. Authors only.
- Cancel a submission. Authors only.
- Show the submitted maps, oldest first. Curators only.
- Approve a map. Curators only.
- Reject a map, with a reason. Curators only.
- Mark a published map as official or as community. Curators only.
- Withdraw a published map, with a reason. Curators only.

#### Review Rules

1. A draft with validation errors cannot be submitted. The response
   shows all the errors.
2. The author cannot change a submitted draft. When the author cancels
   the submission, the map is a draft again.
3. A curator cannot review a map of which they are the author.
4. A rejected map goes back to the author as a draft. The author sees
   the reason.
5. Approval publishes the map. A new map is a community map. A new
   version keeps the type of the map.
6. A withdrawn map is not in `MAPS`, and players cannot play it. Players
   on the map go to their last position on LOST IN SHOREDITCH
   immediately. The author sees the reason, and can submit a new
   version.
7. LOST IN SHOREDITCH cannot be withdrawn.

### Extension 5 (Optional): Moderation

Players report messages, and moderators review the reports. `MUTE` hides
a player from one player only. A moderator action applies to all
players. Moderators review messages only. Curators review maps.

#### Moderators

- A player can also be a moderator. An account can now have more than
  one role. For example, `ADMIN` is a curator and a moderator at the
  start.
- A moderator can make a player into a moderator.
- All players can use `REPORT`. Only moderators can use the other
  moderation commands. All other players get the response
  `YOU ARE NOT A MODERATOR.`

#### Moderation Commands

- `REPORT [player]` - Report the last message that you got from a
  player.
- `REPORTS` - Show the open reports, oldest first.
- `DISMISS [report]` - Close a report without an action.
- `SILENCE [report] [minutes]` - Stop the player from sending messages
  for a period.
- `BAN [report]` - Close the account of the player.

#### Moderation Rules

1. A report keeps a copy of the message, the sender, the time, and the
   names of the players who reported it. The game deletes messages after
   the player reads them, but the copy stays in the report.
2. If you did not get a message from the player, the response is
   `NO MESSAGE TO REPORT.` You do not get messages from players that you
   muted, so you cannot report them.
3. A player can report a message one time only. A second report of the
   same message gets the response `YOU REPORTED THIS MESSAGE ALREADY.`
4. When more than one player reports the same message, the game adds the
   names to the same report. It does not make a new report.
5. Each report has a number. The number does not change until the
   report closes.
6. A moderator cannot act on a report about their own message.
7. A moderator cannot silence or ban a different moderator.
8. A silenced player cannot use `SAY`, `SHOUT`, `WHISPER`, or
   `GUILD SAY`. The response is `YOU ARE SILENCED FOR [N] MINUTES.`,
   where `[N]` is the number of minutes that remain. All other commands
   work.
9. A silence is 1 to 1440 minutes.
10. A ban ends the session of the player. The player cannot `LOGIN`
    again. A banned player leaves their guild.
11. An action closes the report.

```text
> REPORTS
1. LINUS SHOUTS: <MESSAGE>
   REPORTED BY: ADA, GRACE
   TIME: 2026-10-06 21:14
> SILENCE 1 60
LINUS IS SILENCED FOR 60 MINUTES.
>
```

## Resources

- [Zork I gameplay example](https://www.youtube.com/watch?v=TNN4VPlRBJ8) —
  optional background. Watch the first two or three minutes to see typed
  commands, text descriptions, and game responses.
- [Play Zork I in the browser](https://archive.org/details/msdos_Zork_I_-_The_Great_Underground_Empire_1980) —
  optional background. Click Start, then try `examine mailbox`, `take
leaflet`, `north`, and `inventory`.
- [MUD](https://en.wikipedia.org/wiki/Multi-user_dungeon)
- [How to program a text adventure in C](https://helderman.github.io/htpataic/htpataic01.html)
