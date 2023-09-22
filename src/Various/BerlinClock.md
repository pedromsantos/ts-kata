# Berlin Clock

Create a representation of the Berlin Clock for a given time (hh::mm:ss).

The Berlin Uhr (Clock) is a rather strange way to show the time. On
the top of the clock there is a yellow lamp that blinks on/off every
two seconds. The time is calculated by adding rectangular lamps.

The top two rows of lamps are red. These indicate the hours of a
day. In the top row there are 4 red lamps. Every lamp represents 5
hours. In the lower row of red lamps every lamp represents 1 hour. So
if two lamps of the first row and three of the second row are switched
on that indicates 5+5+3=13h or 1 pm.

The two rows of lamps at the bottom count the minutes. The first of
these rows has 11 lamps, the second 4. In the first row every lamp
represents 5 minutes. In this first row the 3rd, 6th and 9th lamp are
red and indicate the first quarter, half and last quarter of an
hour. The other lamps are yellow. In the last row with 4 lamps every
lamp represents 1 minute.

The lamps are switched on from left to right.

## Feature 1 - Converting Digital Time to Berlin Time

What we want first is a way to get a textual representation of a Berlin Clock time based on a digital time.
This is so we can use this converter everywhere, all we have to do is hook up a frontend.
We're going to be going over the clock row by row to make things clearer and ensure we get everything right first time.

### Implement the Single Minutes Row

As a clock user
I want to be able to see single minutes
So that I can accurately tell the time down to the minute

Given I have started the converter
When I enter $time
Then $row is returned for the single minutes row

| **Input**    | **Output** |
| ------------ | ---------- |
| **00:00:00** | "OOOO"     |
| **23:59:59** | "YYYY"     |
| **12:32:00** | "YYYY"     |
| **12:34:00** | "YYYY"     |
| **12:35:00** | "OOOO"     |

### Implement the Five Minutes Row

As a clock user
I want to be able to see five minutes
So that I can tell higher minute amounts more easily at a glance

Given I have started the converter
When I enter $time
Then $row is returned for the five minutes row

| **Input**    | **Output**    |
| ------------ | ------------- |
| **00:00:00** | "OOOOOOOOOOO" |
| **23:59:59** | "YYRYYRYYRYY" |
| **12:04:00** | "OOOOOOOOOOO" |
| **12:23:00** | "YYRYOOOOOOO" |
| **12:35:00** | "YYRYYRYOOOO" |

### Implement the Single Hours Row

As a clock user
I want to be able to see single hours
So that I can tell what hour it is

Given I have started the converter
When I enter $time
Then $row is returned for the single hours row

| **Input**    | **Output** |
| ------------ | ---------- |
| **00:00:00** | "OOOO"     |
| **23:59:59** | "RRRO"     |
| **02:04:00** | "RROO"     |
| **08:23:00** | "RRRO"     |
| **14:35:00** | "RRRR"     |

### Implement the Five Hours Row

As a clock user
I want to be able to see five hours
So that I can tell higher hour amounts more easily at a glance

Given I have started the converter
When I enter $time
Then $row is returned for the five hours row

| **Input**    | **Output** |
| ------------ | ---------- |
| **00:00:00** | "OOOO"     |
| **23:59:59** | "RRRR"     |
| **02:04:00** | "OOOO"     |
| **08:23:00** | "ROOO"     |
| **16:35:00** | "RRRO"     |

### Implement the Seconds Lamp

As a clock user
I want to be able to see seconds passing
So that I can see if my clock is working at a glance

Given I have started the converter
When I enter $time
Then $lamp is returned for the seconds lamp

| **Input**    | **Output** |
| ------------ | ---------- |
| **00:00:00** | "Y"        |
| **23:59:59** | "O"        |

### Integrate the Entire Berlin Clock

As a clock user
I want to be able to see an entire clock
So that I can tell what time it is at a glance

Given I have started the converter
When I enter $time
Then $clock is returned

| **Input**    | **Output**                 |
| ------------ | -------------------------- |
| **00:00:00** | "YOOOOOOOOOOOOOOOOOOOOOOO" |
| **23:59:59** | "ORRRRRRROYYRYYRYYRYYYYYY" |
| **16:50:06** | "YRRROROOOYYRYYRYYRYOOOOO" |
| **11:37:01** | "ORROOROOOYYRYYRYOOOOYYOO" |

## Feature 2 - Converting Berlin Time to Digital Time

The change to using Berlin Time has gone so well that we've decided to introduce it everywhere,
from the clocks on the microwaves to the company-approved wristwatches. Unfortunately,
people are having trouble quickly deciphering the current time which is having a detrimental effect on productivity.
As such, we need to create a converter that takes a Berlin Time and returns a Digital Time.

### Convert Berlin Time to Digital Time

As a Berlin Clock user
I want to be able to convert a Berlin Time to a Digital Time
So that I can tell what time it is more easily

Given I have started the converter
When I enter a $berlinTime
Then $digitalTime is returned

| **Input**                    | **Output** |
| ---------------------------- | ---------- |
| **YOOOOOOOOOOOOOOOOOOOOOOO** | "00:00:00" |
| **ORRRRRRROYYRYYRYYRYYYYYY** | "23:59:59" |
| **YRRROROOOYYRYYRYYRYOOOOO** | "16:50:06" |
| **ORROOROOOYYRYYRYOOOOYYOO** | "11:37:01" |

## References

<https://agilekatas.co.uk/katas/BerlinClock-Kata>
