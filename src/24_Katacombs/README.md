# Katacombs

## Source

<https://github.com/conso/katacombs>

## Project Requirements

- Implement using Domain Driven Design and Hexagonal architecture
- Focus on use cases (transport layer implementation not required)
- Use in-memory database implementation

## Game Overview

A text-based adventure game where players:

- Explore interconnected locations
- Move using cardinal directions or special connections
- Collect treasures
- Find the katacomb exit to win
- Score based on collected treasure value

## Gameplay Guide

### Game Start

```text
LOST IN SHOREDITCH.
YOU ARE STANDING AT THE END OF BRICK LANE BEFORE A SMALL BRICK BUILDING CALLED THE OLD TRUMAN BREWERY.
AROUND YOU IS A FOREST OF RESTAURANTS.
A SMALL STREAM OF CRAFTED BEER FLOWS OUT OF THE BUILDING AND DOWN A GULLY.
>
```

### Available Commands

#### Movement

- `GO N/E/S/W` - Move in cardinal directions
- `GO UP/DOWN` - Use stairs
- `LOOK [direction/item]` - Examine surroundings or items

#### Interaction

- `OPEN [item]` - Open doors, gates, etc.
- `CLOSE [item]` - Close doors, gates, etc.
- `TAKE [item]` - Collect items (max 10 in bag)
- `DROP [item]` - Leave items
- `BAG` - View inventory
- `USE [item]` - Interact with items in specific locations

#### System Commands

- `?` - Show help menu
- `QUIT` - End game

### Game Mechanics

#### Items & Inventory

- Bag limit: 10 items
- Items can be taken and dropped anywhere
- Location descriptions list available items

#### Gold Collection

- Automatic collection when:
  - First visit to a location with gold
  - First time opening an item containing gold
- Total gold viewable in bag

#### World Rules

1. Each location must have a unique title
2. Locations must have matching reverse connections
   - If going South from A leads to B, going North from B must lead to A
   - Applies to all directions (N/S/E/W/UP/DOWN)

## Features

### Feature look and move in the Katacombs

```gherkin
Scenario: New Katacombs Player
  Given I'm a new player of Katacombs
  When I register to play the game
  Then I'm listed as a player in the players list
  And I'm shown the description of the entry of Katacombs
  And the possible paths with a short description of the path plus the direction North, South, East, West, Up or Down
  And the items present in that location

Scenario: Look in a direction from a location with a path to the direction
  Given I'm playing Katacombs
  When I look in a direction
  And there is a path to that direction
  Then I'm shown a description of the path plus a brief description what lies in that direction

Scenario: Look in a direction without a path to the direction
  Given I'm playing Katacombs
  When I look in a direction
  But there isn't a path to that direction
  Then I'm shown a message saying "Nothing to look in this direction"

Scenario: Move in a direction from a location with a path to the direction
  Given I'm playing Katacombs
  When I look in a direction
  And there is a path to that direction
  Then I'm shown a description of the new location
  And the possible paths with a short description of the path plus the direction North, South, East, West, Up or Down
  And the items present in that location

Scenario: Move in a direction without a path to the direction
  Given I'm playing Katacombs
  When I look in a direction
  But there isn't a path to that direction
  Then I'm shown a message saying "Cannot move in this direction"

Scenario: Move in a direction with a closed path to the direction
  Given I'm playing Katacombs
  When I look in a direction
  But the path is closed
  Then I'm shown a message saying "Cannot move in this direction because ..."
```

### Feature pick and drop items

```gherkin
Scenario: Inspect Player Bag
  Given I'm playing Katacombs
  When I inspect my bag
  And the bag contains items
  Then I'm shown a message displaying the bag items

Scenario: Inspect empty Player Bag
  Given I'm playing Katacombs
  When I inspect my bag
  And the bag is empty
  Then I'm shown a message "The bag is empty"

Scenario: Take an item from a location
  Given I'm playing Katacombs
  When Take an item from a location
  And the item exists in the location
  And I don't have that item in my bag yet
  Then I'm shown a message saying "Took %s"
  And the item is present in my bag

Scenario: Take an item from a location that is not present
  Given I'm playing Katacombs
  When Take an item from a location
  But the item does not exists in the locationction
  Then I'm shown a message saying "There is no %s to take here"
  And the item is not present in my bag

Scenario: Take an item from a location but item is already in the bag
  Given I'm playing Katacombs
  When Take an item from a location
  nd the item exists in the location
  But I already have the item on my bag
  Then I'm shown a message saying "I already have %s in my bag"

Scenario: Drop an existing item from the bag
  Given I'm playing Katacombs
  When Drop an item from the bag
  And the item exists in the bag
  Then I'm shown a message saying "Droped %"
  And the item is no longer present in my bag

Scenario: Drop a non existing item from the bag
  Given I'm playing Katacombs
  When Drop an item from the bag
  But the item does not exist in the bag
  Then I'm shown a message saying "I don't have a % to drop"
```

### Feature using items

```gherkin
Scenario: Use a key in the bag to open a loked door
  Given I'm playing Katacombs
  And I'm in a location with a path behind a locked door
  And I have the key to open the door in my bag
  When I use the key to open the door
  Then I'm shown a message "Door open"
  And I'm shown a short description of the path
```

### Feature quit Katacombs

```gherkin
Scenario: Quit Game
  Given I'm playing Katacombs
  When I quit the game
  Then I'm shown a message "Good bye"
```

## Resources

- [MUD](https://en.wikipedia.org/wiki/Multi-user_dungeon)
- [How to program a text adventure in C](https://helderman.github.io/htpataic/htpataic01.html)
