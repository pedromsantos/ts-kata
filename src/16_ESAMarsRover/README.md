# Mars Rover ESA kata

## Problem Description

A robotic rover developed by ESA (European Space Agency) navigates a rectangular plateau on Mars, capturing and transmitting terrain imagery back to Earth.

### Grid System

- The plateau is represented as a rectangular grid
- Position format: `X:Y:Direction` (e.g., '0:0:N')
- Coordinates increase northward: (X, Y) → (X, Y + 1)
- Cardinal directions: N, S, E, W

### Command System

Commands are sent as multiline strings:

- `L`: Rotate 90° left
- `R`: Rotate 90° right
- `M`: Move forward one grid square
- All movements include timestamps for execution duration tracking

## Input Specification

### Message Format

1. **Grid Definition**: `"X:Y"` (upper-right coordinates, origin at 0:0)
2. **Initial Position**: `"X:Y:Direction"`
3. **Command Sequence**: String of commands (L/R/M)
4. **Start Timestamp**: ISO format

Example:

```text
5:5
1:2:N
LMLMLMLMM
1994-11-05T08:32:20.10Z
```

> Note: All input messages are guaranteed valid and within grid boundaries.

## Output Specification

The rover responds with:

1. Final position (`X:Y:Direction`)
2. Completion timestamp

Example:

```text
1:3:N
1994-11-05T12:02:11.11Z
```

## Multilingual Support

### Features

- Supports commands in all EU official languages
- Cardinal directions (N, S, E, W) remain constant
- Extensible for future language additions
- Language specified in message header

### Command Translations

| Language   | Left | Right | Move |
| ---------- | ---- | ----- | ---- |
| English    | L    | R     | M    |
| Spanish    | I    | D     | A    |
| French     | G    | D     | A    |
| Portuguese | E    | D     | A    |
| Italian    | S    | D     | A    |

### Example Messages

```text
EN
5:5
1:2:N
LMLMLMLMM
1994-11-05T08:32:20.10Z
```

## Technical Interface

```typescript
interface Rover {
  execute(): void;
}

interface Radio {
  send(message: string): void;
  receive(): string;
}
```

> Note: Radio implementation is handled by a separate team.
