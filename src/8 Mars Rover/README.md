# Mars Rover kata

## Problem

A robot rover is landed by NASA on a plateau on Mars.
The plateau is divided up into a grid to simplify navigation.
This plateau, must be navigated by the rover so that it´s on-board cameras can get a complete view of the surrounding terrain to send back to Earth.
A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points.

An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover, NASA sends a simple string of letters.
The possible letters are ‘L’, ‘R’ and ‘M’.

‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot.
‘M’ means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

## Input

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that have been deployed.
Each rover has two lines of input.
The first line gives the rover’s position, and the second line is a series of instructions telling the rover how to explore the plateau.
The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.

The first line defines the upper-right coordinates of the plateau. Example: ‘5 5’
• The lower-left coordinates are always ‘0 0’.
• The second line contains the rover’s starting position and direction. Example ‘1 2 N’ measn x
=1, y=2 and Direction=North
• The third line contains the sequence of commands to execute. Example: ‘LMLMLMLMM’

### Example input

```text
55
12N
MLMLMLMM
```

Assume that NASA will never send invalid messages to the rover, nor will it send a message moving the rover outside the defined grid.

## Output

The output for the rover should be its final co-ordinates and heading.

## Examples

Input:

```text
5 5
1 2 N
LMLMLMLMM
```

Expected Output:

```text
1 3 N
```

Input:

```text
5 5
3 3 E
MMRMMRMRRM
```

Expected Output:

```text
5 1 E
```
