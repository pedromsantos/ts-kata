# Mars Rover ESA kata

## Problem

A robotic rover developed by ESA (Europen Space Agency) will land on a plateau on Mars.
The rover will navigate the plateau while its cameras get a complete view of the terrain and send it back to Earth.

The plateau is divided up into a virtual rectangular grid to simplify navigation.
An example position might be ‘0 0 N’, which means the rover is in the bottom left corner and facing North.
Assume that the square North from (X, Y) is (X, Y + 1).
The rover’s position is a combination of (X, Y) coordinates and a cardinal compass point (‘N’, ‘S’, ‘E’, ‘W’).

To control the rover, ESA sends messages encoded as a multiline string.
The possible commands are ‘L’, ‘R’, and ‘M’.
Commands ‘L’ and ‘R’ make the rover spin 90 degrees left or right without moving from its current spot.
Command ‘M’ makes the rover move forward one grid square in the current heading of the rover (‘N’, ‘S’, ‘E’, ‘W’).

When the rover finishes executing the instructions.
It transmits its final position plus a timestamp back to ESA using its onboard radio.
Timestamps on messages allow ESA to calculate how long it took the rover to execute the commands.

## Input

- The first line defines the upper-right coordinates of the plateau. Example: ‘5 5’
  - The lower-left coordinates are always ‘0 0’.
- The second line contains the rover’s starting position and direction.
  - Example ‘1 2 N’ measn x=1, y=2 and Direction=North
- The third line contains the sequence of commands to execute.
  - Example: ‘LMLMLMLMM’
- The fourth line is the timestamp in ISO format.
  - Example: ‘1994-11-05T08:32:20.10Z’

### Example input

```text
55\n
12N\n
LMLMLMLMM\n
1994-11-05T08:32:20.10Z
```

Assume that ESA will never send invalid messages to the rover, nor will it send a message moving the rover outside the defined grid

## Output

The output of the rover is a message it sends to ESA using the onboard radio after executing the commands.

- The first line contains the final location of the rover.
- The second line contains a timestamp of when command execution is finished.

Example output:

```text
13N\n
1994-11-05T12:02:11.11Z
```

## Extra

- Commands can be in any EU official language.
- N, S, E, and W are not translated.
- We expect to support more EU official languages in the future
- Language is specified in the first line of the message.

Example input (same message using various EU languages)

```text
// COMMANDS IN ENGLISH
EN\n
55\n
12N\n
LMLMLMLMM\n
1994-11-05T08:32:20.10Z

// COMMANDS IN SPANISH
ES\n
55\n
12N\n
IAIAIAIAA\n
1994-11-05T08:32:20.10Z

// COMMANDS IN FRENCH
FR\n
55\n
12N\n
GAGAGAGAA\n
1994-11-05T08:32:20.10Z

// COMMANDS IN PORTUGUESE
PT\n
55\n
12N\n
EAEAEAEAA\n
1994-11-05T08:32:20.10Z

// COMMANDS IN ITALIAN
IT\n
55\n
12N\n
SASASASAA\n
1994-11-05T08:32:20.10Z
```
