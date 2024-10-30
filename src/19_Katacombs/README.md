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
