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
each extension is complete without the extensions after it. Extensions 5,
6, and 7 are optional. Extension 6 does not need Extension 5. You can
start Extension 7 after Extension 1.

1. [Authentication](#extension-1-authentication)
2. [Player Chat](#extension-2-player-chat)
3. [Player Guilds](#extension-3-player-guilds)
4. Maps:
   - 4a. [Map Catalogue](#extension-4a-map-catalogue)
   - 4b. [Map Editor](#extension-4b-map-editor)
   - 4c. [Map Review](#extension-4c-map-review)
5. [Moderation](#extension-5-optional-moderation) (optional)
6. [Subscriptions](#extension-6-optional-subscriptions) (optional)
7. [Web Client](#extension-7-optional-web-client) (optional)

The commands use these placeholders: `[player]` is a player name,
`[guild]` is a guild name, `[map]` is a map title, and `[message]` is the
text of a message.

When this README does not give a response, choose a clear response and
test it.

### Quality Requirements

Each extension has quality requirements: performance, scale, security,
reliability, and privacy. They are part of the extension.

#### How to Measure

- Measure on one developer machine with the in-memory database.
- Use a load test tool, for example k6 or Locust.
- Measure latency at the REST API, from the request to the response.
  "p95 under 50 ms" means that 95 of 100 requests take less than 50 ms.
- Availability targets (SLAs) are design targets. You cannot measure
  them in a kata. Write how your design meets each target, for example
  in an architecture decision record (ADR).

#### Quality Requirements for All Extensions

- **Logs:** log each command with its latency. Never log passwords,
  session tokens, the text of whispers, or Stripe secrets.
- **Health:** the API has a health endpoint.
- **API versions:** the REST API has a version. A change that breaks
  clients needs a new version.
- **Accessibility:** responses are plain text that screen readers can
  read. A symbol, for example `*`, is never the only way to show a
  meaning.
- **Translation:** keep all response texts in one place, so that a
  translation is possible later.
- **Shutdown:** at shutdown, the game completes the requests in progress
  before it stops. When you replace the in-memory database, the unread
  messages also stay after a restart.

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

#### Quality Requirements for Authentication

- **Password storage:** use Argon2, bcrypt, or scrypt. The cost is in
  the configuration, so that tests can use a low cost.
- **Session tokens:** random, with a minimum of 128 bits. Tokens are
  never in URLs or in logs.
- **No account discovery:** a `LOGIN` with an unknown name does the same
  password hash work as a `LOGIN` with an incorrect password. The
  response time does not show if the name exists.
- **Login rate limit:** a maximum of 20 `LOGIN` commands in 1 minute
  from each IP address.
- **Performance:** `LOGIN` p95 under 300 ms. All other game commands p95
  under 50 ms, with 1,000 players online and 50 commands each second.
- **Capacity:** 10,000 accounts and 1,000 sessions at the same time.
- **Availability:** 99.5% each month for the game commands.

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

#### Quality Requirements for Chat

- **Throughput:** 200 messages each second, with 1,000 players online.
  This includes a `SHOUT` to all 1,000 players.
- **Send latency:** p95 under 100 ms. The sender does not wait until all
  the players get the message.
- **Delivery latency:** a message is ready for the players who get it
  in less than 1 second (p99).
- **No loss and no duplicates:** each player gets each message one time.
- **Sequence:** messages from one sender arrive in the sequence that the
  sender sent them.
- **Bounded memory:** a player has a maximum of 500 unread messages. When
  there are more, the game deletes the oldest messages and shows
  `[N] OLDER MESSAGES WERE DROPPED.`
- **Concurrency:** the limit of 5 messages in 10 seconds also applies
  when a player sends requests in parallel.
- **Stretch:** send messages to the players with Server-Sent Events or
  WebSockets, p95 under 500 ms. Then players do not have to send a
  command to get their messages.

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

#### Quality Requirements for Guilds

- **Concurrent joins:** when two players join a guild that has space for
  one more member at the same time, only one player joins.
- **Concurrent names:** when two players make guilds with the same name
  at the same time, only one guild is made.
- **Gold:** the game removes the gold for a guild one time only. The
  gold of a player is never less than 0.
- **Leaderboard:** `GUILDS` p95 under 200 ms, with 1,000 guilds. The
  scores in `GUILDS` can be up to 60 seconds old.

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

#### Quality Requirements for the Map Catalogue

- **Map size:** a maximum of 200 locations and 500 items in each map.
- **Performance:** `MAPS` p95 under 200 ms, with 500 maps. The
  statistics can be up to 5 minutes old.
- **Memory:** the progress of 10,000 players on 20 maps each fits in
  1 GB. Keep only the changes from the start state of each map.

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

#### Quality Requirements for the Map Editor

- **Validation:** validation of a map with 200 locations takes less than
  1 second.
- **Performance:** editor operations p95 under 100 ms.

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

#### Quality Requirements for Map Review

- **Audit:** the game records each review operation: who, when, what,
  and the reason. Nobody can change the records. The game keeps them for
  2 years.
- **Authorization:** the server checks the curator role for each review
  operation. It never trusts the client.

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

#### Quality Requirements for Moderation

- **Privacy:** only moderators can read the reports. The game deletes
  the copy of a reported whisper 90 days after the report closes.
- **Audit:** the game records each moderator action. Nobody can change
  the records.
- **Silence:** a silence starts to apply to all chat commands in less
  than 1 second.
- **Throughput:** the report queue accepts 100 reports each minute.

### Extension 6 (Optional): Subscriptions

Players can pay for a MEMBER subscription. Stripe is the payment
gateway. A subscription gives perks. The perks never change a score.

This extension uses Extensions 1 to 4c. It does not need
[Extension 5](#extension-5-optional-moderation).

#### Plans and Entitlements

- There is one plan: MEMBER. It has two prices: monthly and yearly. The
  configuration gives the Stripe price IDs.
- A plan gives entitlements. The game checks entitlements, not plans.
  The MEMBER plan gives all of these entitlements:

- **PREMIUM_MAPS:** play premium maps.
- **EARLY_ACCESS:** play a new official map 7 days before all other
  players.
- **LARGE_GUILD:** when the guild leader has this entitlement, the guild
  has a maximum of 25 members.
- **CREATOR:** have drafts of 5 maps at the same time, see detailed map
  statistics, and get priority in the review queue.
- **SUPPORTER_BADGE:** a `*` after the player name in `WHO` and in the
  `PLAYERS:` line.
- **LONG_MESSAGES:** send messages of up to 500 characters.

#### Subscription Commands

- `SUBSCRIBE MONTHLY` - Start a monthly subscription. The response is
  the URL of a Stripe Checkout page.
- `SUBSCRIBE YEARLY` - Start a yearly subscription. The response is the
  URL of a Stripe Checkout page.
- `SUBSCRIPTION` - Show the state, the price, the end of the current
  period, and the entitlements.
- `SUBSCRIPTION MANAGE` - The response is the URL of the Stripe Customer
  Portal. On the portal, the player can cancel, change the card, and
  change between monthly and yearly.
- `MAP STATS [map]` - Show the detailed statistics of your map. Players
  with CREATOR only.

```text
> SUBSCRIBE MONTHLY
GO TO THIS PAGE TO PAY: https://checkout.stripe.com/c/pay/cs_test_...
> SUBSCRIPTION
STATE: ACTIVE
PRICE: MONTHLY
RENEWS ON: 2026-11-06
ENTITLEMENTS: PREMIUM_MAPS, EARLY_ACCESS, LARGE_GUILD, CREATOR,
SUPPORTER_BADGE, LONG_MESSAGES
>
```

#### Payment Gateway Rules

1. All calls to Stripe go through a payment gateway port. Tests use a
   fake payment gateway. Only the Stripe adapter calls Stripe.
2. The game never gets or keeps card details. Players pay on the Stripe
   Checkout page and on the Stripe Customer Portal.
3. Each account has a maximum of one Stripe customer. The game makes the
   customer at the first `SUBSCRIBE`, and keeps the customer ID and the
   subscription ID.
4. A player with a subscription that is not ENDED cannot `SUBSCRIBE`
   again. The response is `YOU HAVE A SUBSCRIPTION ALREADY.`
5. The configuration gives the Stripe API key, the webhook signing
   secret, and the price IDs.
6. Use Stripe test mode and test cards only. Do not use live keys.

#### Webhook Rules

1. The subscription state changes only when the game gets a Stripe
   webhook event. When a player comes back from the Checkout page, the
   state does not change.
2. The game verifies the signature of each event. An event with an
   incorrect signature gets HTTP 400 and changes nothing.
3. Stripe can send the same event more than one time. Each event changes
   the state one time only.
4. Stripe can send events in a different sequence. When an event
   arrives, the game gets the current subscription from the payment
   gateway and uses that data.
5. The game handles these events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.paid`
   - `invoice.payment_failed`
6. The game gives a 2xx response to all other events and ignores them.

#### Subscription States

| State      | Stripe status                 | Entitlements          |
| ---------- | ----------------------------- | --------------------- |
| NONE       | No subscription, or not paid. | No.                   |
| ACTIVE     | `active`                      | Yes.                  |
| CANCELLING | `active`, cancels at the end. | Until the period end. |
| PAST_DUE   | `past_due`                    | For 7 days.           |
| ENDED      | `canceled` or `unpaid`        | No.                   |

1. When a payment fails, Stripe tries again. The player keeps the
   entitlements for 7 days after the first failed payment. After 7 days,
   the entitlements stop, also when the Stripe state is still
   `past_due`.
2. When a payment is successful, a PAST_DUE subscription is ACTIVE
   again.
3. A change between monthly and yearly does not change the
   entitlements. Stripe calculates the cost of the change.
4. After ENDED, the player can `SUBSCRIBE` again.

#### Changes for Subscriptions

- **Premium maps:** a curator can mark an official map as premium.
  `MAPS` and `MAP` show PREMIUM. A player without PREMIUM_MAPS who
  tries to `PLAY` a premium map gets the response
  `THIS MAP IS FOR MEMBERS.` LOST IN SHOREDITCH cannot be premium.
- **Early access:** a new official map opens to all players 7 days after
  a curator makes it official. Before that, only players with
  EARLY_ACCESS can play it.
- **Guilds:** the maximum is 25 members when the leader has LARGE_GUILD.
- **Map editor:** a player can have drafts of 1 map at the same time.
  With CREATOR, a player can have drafts of 5 maps at the same time.
- **Map review:** the submitted maps of players with CREATOR come first.
  In each group, the oldest map comes first.
- **Detailed map statistics:** for each location, the number of players
  who visited it. For the map, the number of players who stopped before
  the katacomb exit, and the location where most of them stopped.
- **Chat:** a message has 1 to 500 characters with LONG_MESSAGES.
- **Moderation:** if you do Extension 5, a ban cancels the subscription
  at the end of the period. There is no refund.

#### When Entitlements Stop

- **PREMIUM_MAPS and EARLY_ACCESS:** a player on a map that they cannot
  play now goes to their last position on LOST IN SHOREDITCH. The game
  keeps their progress on the map. When the player gets the entitlement
  again, they continue from their last position.
- **LARGE_GUILD:** the guild keeps all its members. The leader cannot
  invite players until the guild has fewer than 10 members. This also
  applies when a new leader does not have LARGE_GUILD.
- **CREATOR:** the player keeps all their drafts, but cannot start a
  draft of a new map until they have no drafts. Their submitted maps
  lose the review priority.
- **SUPPORTER_BADGE:** the `*` goes away.
- **LONG_MESSAGES:** messages have a maximum of 200 characters again.
  Old messages do not change.

#### Quality Requirements for Subscriptions

Payment data needs stricter security than the other data.

- **Card data:** no card data enters the system or the logs. This keeps
  the system in the PCI DSS SAQ A scope.
- **Secrets:**
  - The Stripe API key and the webhook signing secret come from the
    environment or a secret store. They are never in the repository, in
    logs, or in responses.
  - You can change (rotate) the secrets without a change to the code.
  - Use a restricted API key with only the permissions that the game
    needs.
  - Keep test keys and live keys separate.
- **Webhook security:**
  - The game rejects events that are more than 5 minutes old, to stop
    replayed events.
  - The game keeps the IDs of processed events for 30 days, to find
    duplicate events.
- **Webhook performance:** the webhook endpoint responds in less than
  2 seconds. Slow work runs in the background.
- **Webhook availability:** 99.9% each month. Stripe tries again for up
  to 3 days, so a short outage does not lose events.
- **Calls to Stripe:**
  - Each create request sends an idempotency key. A retry never makes a
    second customer or a second Checkout session.
  - A call stops after 5 seconds. The game tries again a maximum of 3
    times, with exponential backoff.
  - A circuit breaker stops the calls to Stripe while Stripe fails.
- **Stripe outages:**
  - Entitlement checks never call Stripe. They use the data in the game.
  - When Stripe is not available, `SUBSCRIBE` gets the response
    `PAYMENTS ARE NOT AVAILABLE NOW. TRY AGAIN LATER.` All other
    commands work.
- **Consistency:**
  - The subscription state in the game matches Stripe less than 1
    minute after a webhook event.
  - A daily reconciliation job compares the subscriptions in the game
    with Stripe. It corrects the differences and reports them.
- **Data access:**
  - Payment data is in a separate module. Only that module can read it.
  - The game records each access to payment data.
  - The game keeps only the customer ID, the subscription ID, the state,
    and the end of the period.
  - The game keeps the records of payment events for 7 years, for tax.
- **Security tests:** tests show that:
  - an event with an incorrect signature is rejected,
  - an old, replayed event is rejected,
  - a duplicate event changes nothing,
  - secrets are never in the logs.

### Extension 7 (Optional): Web Client

Players play in a web browser. You build the client for your own API.
Use any technology: a single-page app, or pages that the server makes
(for example HTMX, Blazor, Thymeleaf, Go templates, or Jinja).

You can start this extension after Extension 1. Then add the screens for
each extension that you do.

#### Changes for the Web Client

- **Live updates:** the server sends events to the client with
  Server-Sent Events (SSE). The chat stretch requirement is now
  required.
- **Session cookie:** the session token can be in a cookie. See the
  [quality requirements](#quality-requirements-for-the-web-client).
- **Cross-origin requests:** if the client is on a different origin,
  the API accepts requests from the client origin only (CORS).
- **Checkout pages:** the Stripe Checkout success URL and cancel URL go
  to pages of the client.

#### Live Updates

1. The client opens one SSE connection for each session.
2. The server sends these events:
   - a new message,
   - a player arrives in or leaves the location of the player,
   - an invitation to a guild,
   - a change of the subscription state,
   - the map of the player is withdrawn,
   - the session ends.
3. A message that the client gets with SSE is read. It does not show
   again in the response to the next command.
4. When the connection stops, the client connects again. It sends the
   ID of the last event (`Last-Event-ID`), and the server sends the
   events that the client did not get. The client does not show an
   event two times.
5. When the session ends, the client goes to the login page.

#### Screens

| Extension      | Screens                                          |
| -------------- | ------------------------------------------------ |
| Base game, 1   | Register, login, game screen.                    |
| 2 Chat         | Chat panel on the game screen.                   |
| 3 Guilds       | Guild page, guild leaderboard.                   |
| 4a Maps        | Map catalogue, map details.                      |
| 4b Map editor  | Draft list, map editor.                          |
| 4c Map review  | Review queue, map preview.                       |
| 5 Moderation   | Moderation console.                              |
| 6 Subscription | Subscription, Checkout success, Checkout cancel. |

- **Game screen:**
  - A console: an input for text commands and a log of the responses.
    The up and down arrow keys show the earlier commands.
  - A location panel: the description, the exits as buttons, and the
    items with buttons for their commands (for example `TAKE`).
  - A bag panel: the items, the gold, and the score.
  - A players panel: the other players in the location.
  - The title of the current map.
- **Chat panel:** tabs for all messages, guild messages, and whispers.
  Each tab shows the number of unread messages. The menu of a player
  name has `WHISPER` and `MUTE`.
- **Guild page:** the members, the leader, and the score. The leader
  can invite and kick players. A player sees their invitations and can
  accept them.
- **Map catalogue:** filters for type, difficulty, and premium. Each map
  has a `PLAY` button.
- **Map editor:**
  - A graph of the locations and the connections. When the author adds a
    connection, the reverse connection shows immediately.
  - Forms for locations, items, and item properties.
  - The validation errors, each with a link to the location or item.
- **Review queue:** the submitted maps, a read-only preview of each map,
  and buttons to approve, reject (with a reason), mark as official, and
  withdraw. The draft list of the author shows the reason for a
  rejection.
- **Moderation console:** the open reports with the copy of the message
  and the names of the reporters. Buttons to dismiss, silence (with the
  minutes), and ban. A ban needs a confirmation.
- **Subscription page:** the state, the price, the renewal date, and the
  entitlements. Buttons to subscribe monthly or yearly, and to manage
  the subscription.
- **Checkout success page:** shows
  `PAYMENT RECEIVED. YOUR PERKS START WHEN STRIPE CONFIRMS THE PAYMENT.`
  It waits for the subscription event, then shows the perks.

#### Client Rules

1. The client is a view. All game rules run on the server. The client
   never decides if a command is allowed.
2. A button sends the same command as the console. The response shows
   in the console log.
3. The client shows only the screens that the roles and the
   entitlements of the player allow. The server still checks each
   request.
4. The Checkout success page never gives perks. Only the server state
   gives perks.
5. When the connection to the server stops, the client shows
   `CONNECTION LOST. TRYING AGAIN.` and connects again.

#### Quality Requirements for the Web Client

- **Cross-site scripting (XSS):** the client escapes all text from
  players: messages, player names, guild names, map texts, and reasons.
  It never shows HTML from players.
- **Content Security Policy:** the client sends a Content Security
  Policy that does not allow inline scripts.
- **Session token:**
  - Keep the token in a cookie that is `HttpOnly`, `Secure`, and
    `SameSite=Strict`. Do not keep it in `localStorage`.
  - When the token is in a cookie, protect requests that change data
    against cross-site request forgery (CSRF).
  - `LOGOUT` deletes the cookie.
- **Accessibility:**
  - Meet WCAG 2.2 level AA.
  - All actions work with the keyboard only.
  - Screen readers read new console lines and new messages (ARIA live
    regions).
  - Color is never the only way to show a meaning.
- **Performance:**
  - Largest Contentful Paint under 2.5 seconds on a mid-range phone.
  - The client shows a response less than 100 ms after it gets it.
  - For a single-page app, the JavaScript is a maximum of 200 KB after
    compression.
- **Live updates:** the client connects again in less than 5 seconds.
  After it connects again, no events are lost and no events show two
  times.
- **Devices:** the client works on screens that are 360 px wide or more,
  and with touch.
- **Browsers:** the last 2 versions of Chrome, Edge, Firefox, and
  Safari.
- **Tests:**
  - End-to-end browser tests for these journeys: register, play, and
    win; chat between two browsers; subscribe with the fake payment
    gateway.
  - Contract tests between the client and the API.

## Resources

- [Zork I gameplay example](https://www.youtube.com/watch?v=TNN4VPlRBJ8) —
  optional background. Watch the first two or three minutes to see typed
  commands, text descriptions, and game responses.
- [Play Zork I in the browser](https://archive.org/details/msdos_Zork_I_-_The_Great_Underground_Empire_1980) —
  optional background. Click Start, then try `examine mailbox`, `take
leaflet`, `north`, and `inventory`.
- [MUD](https://en.wikipedia.org/wiki/Multi-user_dungeon)
- [How to program a text adventure in C](https://helderman.github.io/htpataic/htpataic01.html)
- [k6](https://grafana.com/docs/k6/latest/) and
  [Locust](https://docs.locust.io/) — load test tools.
- [PCI DSS SAQ A](https://docs.stripe.com/security/guide) — how Stripe
  Checkout keeps card data out of your system.
- [Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [OWASP Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [Playwright](https://playwright.dev/) — end-to-end browser tests.
- [Pact](https://docs.pact.io/) — contract tests.
- [Stripe subscriptions with Checkout](https://docs.stripe.com/billing/subscriptions/build-subscriptions)
- [Stripe webhooks](https://docs.stripe.com/webhooks)
- [Stripe Customer Portal](https://docs.stripe.com/customer-management)
- [Stripe test clocks](https://docs.stripe.com/billing/testing/test-clocks) —
  test renewals and failed payments without waiting.
- [Stripe CLI](https://docs.stripe.com/stripe-cli) — send webhook events
  to your local server.
