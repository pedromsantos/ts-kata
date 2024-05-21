# Social Network

## Source

<https://github.com/sandromancuso/social_networking_kata>

## Goal

- Implement a networking application (similar to Twitter) satisfying the scenarios below.
- Use a Domain Driven Design and Hexagonal architecture approach.
- Start from the use cases, we will not be implementing the transport layer for this project.
- Use a in-memory database implementation.

### Scenarios

#### Posting: Alice can publish messages to a personal timeline

```cmd
> Alice -> I love the weather today
```

#### Posting: Bob can publish messages to a personal timeline

```cmd
> Bob -> Damn! We lost!
> Bob -> Good game though.
```

#### Reading: We can view Alice's timeline

```cmd
> Alice
> I love the weather today (5 minutes ago)
```

#### Reading: We can view Bob's timeline

```cmd
> Bob
> Good game though. (1 minute ago)
> Damn! We lost! (2 minutes ago)
```

#### Following: Charlie can subscribe to Alice's and Bob's timelines, and view an aggregated list of all subscriptions sorted by time of publishing

```cmd
> Charlie -> I'm in New York today! Anyone want to have a coffee?
> Charlie follows Alice
> Charlie wall
> Charlie - I'm in New York today! Anyone want to have a coffee? (2 seconds ago)
> Alice - I love the weather today (5 minutes ago)
> Charlie follows Bob
> Charlie wall
> Charlie - I'm in New York today! Anyone wants to have a coffee? (15 seconds ago)
> Bob - Good game though. (1 minute ago)
> Bob - Damn! We lost! (2 minutes ago)
> Alice - I love the weather today (5 minutes ago)
```

## Details

Users submit commands to the application.
There are four commands.

posting: [user name] -> [message]
reading: [user name]
following: [user name] follows [another user]
wall: [user name] wall

'posting', 'reading', 'following' and 'wall' are not part of the commands; commands always start with the user's name.

- Don't worry about handling any exceptions or invalid commands.
  - Assume that the user will always type the correct commands.
  - Just focus on the sunny day scenarios.
- Don't bother making it work over a network or across processes.
- It can all be done in memory, assuming that users will all use the same terminal.
- Non-existing users should be created as they post their first message.
- Application should not start with a pre-defined list of users.

IMPORTANT: Focus on writing the best code you can produce.
Do not rush.
Take as much time as you need; there is no deadline.

## Unit vs Integration vs Acceptance vs E2E Testing

|                       | **Unit**                    | **Integration aka contract**                            | **Acceptance aka system**                           | **E2e aka functional**                                      |
| --------------------- | --------------------------- | ------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------- |
| **Boundary**          | Class, Aggregate            | Class - External dependency                             | Application code (mock/stub) external dependencies  | Application and network dependencies services and databases |
| **Size**              | Tiny                        | Tiny to Small                                           | Small to Medium                                     | Large                                                       |
| **Environment**       | Development                 | Integration test env                                    | Developement/QA                                     | Prod like                                                   |
| **Data**              | Mock data                   | Test data                                               | Fake or Data                                        | Copy of real data or real data                              |
| **System Under Test** | Isolated behaviour          | Integration layer and external dependency               | App flow with (mocked/stubed) external dependencies | App and all dependencies                                    |
| **Scenarios**         | Developer                   | Developer                                               | Developer/QA                                        | End user                                                    |
| **When**              | Before each commit/on build | On build                                                | Before each commit/on build                         | On build                                                    |
| **Execution time**    | Very fast                   | Medium to slow (depending on external dependency speed) | Very fast to fast, on worst case medium             | Slow                                                        |
