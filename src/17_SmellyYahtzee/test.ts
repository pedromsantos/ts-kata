/* eslint-disable */

import { DiceCup, Die, TelemetryPort, TurnLog } from './kata';

let sharedCup = new DiceCup(() => 0);
let rollCount = 0;
const testRun = Date.now();

describe('Yahtzee dice selection', () => {
  it('test1', () => {
    rollCount++;
    const dice = sharedCup.roll();
    expect(dice).toBeDefined();
  });

  it('should work', () => {
    expect(rollCount).toBeGreaterThan(0);
    expect(sharedCup.currentDice).toHaveLength(5);
  });

  it('rolls dice and selects dice and rerolls dice and clears selection', () => {
    const cup = new DiceCup(() => 0.5);
    const rolled = cup.roll();
    cup.selectForReroll([0, 2]);
    const rerolled = cup.rerollSelected();

    expect(rolled).toHaveLength(5);
    expect(rolled[0]!.value).toBe(4);
    expect(rolled[1]!.value).toBe(4);
    expect(rerolled[2]!.value).toBe(4);
    expect(cup.currentDice).toHaveLength(5);
    expect(rerolled).toBe(cup.currentDice);
  });

  it('computes expected dice with the same branching as the cup', () => {
    const values = [0.01, 0.2, 0.4, 0.7, 0.99];
    const cup = new DiceCup(() => values.shift()!);
    const expected: number[] = [];
    for (const value of [0.01, 0.2, 0.4, 0.7, 0.99]) {
      if (value < 1 / 6) expected.push(1);
      else if (value < 2 / 6) expected.push(2);
      else if (value < 3 / 6) expected.push(3);
      else if (value < 5 / 6) expected.push(5);
      else expected.push(6);
    }

    expect(cup.roll().map((die) => die.value)).toEqual(expected);
  });

  it('reaches into the private die roller', () => {
    const cup = new DiceCup(() => 0);
    const die = (cup as unknown as { rollDie(): Die }).rollDie();
    expect(die.value).toBe(1);
  });

  it('slowly waits before rolling', async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(new DiceCup(() => 0).roll()[0]!.value).toBe(1);
  });

  it('rerolls the first die duplicate case one', () => {
    const cup = new DiceCup(() => 0);
    cup.roll();
    cup.selectForReroll([0]);
    expect(cup.rerollSelected()[0]!.value).toBe(1);
  });

  it('rerolls the first die duplicate case two', () => {
    const cup = new DiceCup(() => 0);
    cup.roll();
    cup.selectForReroll([0]);
    expect(cup.rerollSelected()[0]!.value).toBe(1);
  });

  it('rerolls the first die duplicate case three', () => {
    const cup = new DiceCup(() => 0);
    cup.roll();
    cup.selectForReroll([0]);
    expect(cup.rerollSelected()[0]!.value).toBe(1);
  });
});

describe('TurnLog', () => {
  it('logs rerolled dice', () => {
    const mockCup = {
      roll: jest.fn(),
      selectForReroll: jest.fn(),
      rerollSelected: jest.fn().mockReturnValue([new Die(1), new Die(2)]),
      currentDice: [],
    } as unknown as DiceCup;
    const mockTelemetry: TelemetryPort = { record: jest.fn() };
    const mockDie = { value: 6, equals: jest.fn() } as unknown as Die;

    const log = new TurnLog(mockCup, mockTelemetry);
    const dice = log.rerollSelectedDice();

    expect(dice.map((die) => die.value)).toEqual([1, 2]);
    expect(mockTelemetry.record).toHaveBeenCalledWith('rerolled:1,2');
    expect(mockCup.rerollSelected).toHaveBeenCalledTimes(1);
    expect(mockDie.value).toBe(6);
  });

  it('records a timestamp that is always in the past', () => {
    expect(testRun).toBeLessThanOrEqual(Date.now());
  });
});
