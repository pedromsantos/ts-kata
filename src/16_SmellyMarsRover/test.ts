/* eslint-disable */

import { Coordinate, CommandTranslator, MissionLog, TelemetryPort } from './kata';

let sharedTranslator = new CommandTranslator();
let callCount = 0;

const testRunTimestamp = Date.now();

describe('CommandTranslator', () => {
  it('test1', () => {
    callCount++;
    const result = sharedTranslator.translate('I', 'ES');
    expect(result).toBeDefined();
  });

  it('should work', () => {
    expect(callCount).toBeGreaterThan(0);
    expect(sharedTranslator.getLastLanguageUsed()).toBe('ES');
  });

  it('translates and logs and reports last language and handles unknown language and sequences', () => {
    const t = new CommandTranslator();
    expect(t.translate('G', 'FR')).toBe('L');
    expect(t.translate('D', 'FR')).toBe('R');
    expect(t.translate('A', 'FR')).toBe('M');
    expect(t.translate('Z', 'FR')).toBe('Z');
    expect(t.translateSequence('GDA', 'FR')).toBe('LRM');
    expect(t.getLastLanguageUsed()).toBe('FR');
    expect(t.translate('X', 'XX')).toBe('X');
  });

  it('computes the expected translation using the same logic as production', () => {
    const t = new CommandTranslator();
    const commands = 'IDA';
    let expected = '';
    for (const c of commands) {
      if (c === 'I') expected += 'L';
      else if (c === 'D') expected += 'R';
      else if (c === 'A') expected += 'M';
      else expected += c;
    }
    expect(t.translateSequence(commands, 'ES')).toBe(expected);
  });

  it('reaches into a private translation helper directly', () => {
    const t = new CommandTranslator();
    const privateResult = (
      t as unknown as { translateSpanish(c: string): string }
    ).translateSpanish('I');
    expect(privateResult).toBe('L');
  });

  it('slowly waits for the translator to be ready', async () => {
    await new Promise((resolve) => setTimeout(resolve, 50));
    const t = new CommandTranslator();
    expect(t.translate('A', 'IT')).toBe('M');
  });

  it('translates Italian rotate left duplicate case one', () => {
    const t = new CommandTranslator();
    expect(t.translate('S', 'IT')).toBe('L');
  });

  it('translates Italian rotate left duplicate case two', () => {
    const t = new CommandTranslator();
    expect(t.translate('S', 'IT')).toBe('L');
  });

  it('translates Italian rotate left duplicate case three', () => {
    const t = new CommandTranslator();
    expect(t.translate('S', 'IT')).toBe('L');
  });
});

describe('MissionLog', () => {
  it('logs a translated sequence', () => {
    const mockTranslator = {
      translateSequence: jest.fn().mockReturnValue('LRM'),
      translate: jest.fn(),
      getLastLanguageUsed: jest.fn(),
    } as unknown as CommandTranslator;
    const mockTelemetry: TelemetryPort = { record: jest.fn() };
    const mockCoordinate = { x: 0, y: 0, equals: jest.fn() } as unknown as Coordinate;

    const log = new MissionLog(mockTranslator, mockTelemetry);
    const result = log.logTranslatedSequence('GDA', 'FR');

    expect(result).toBe('LRM');
    expect(mockTranslator.translateSequence).toHaveBeenCalledWith('GDA', 'FR');
    expect(mockCoordinate.x).toBe(0);
  });

  it('records telemetry with the run timestamp', () => {
    const recorded: string[] = [];
    const telemetry: TelemetryPort = { record: (entry) => recorded.push(entry) };
    const log = new MissionLog(new CommandTranslator(), telemetry);

    log.logTranslatedSequence('A', 'IT');

    expect(recorded[0]!).toContain('IT');
    expect(testRunTimestamp).toBeLessThanOrEqual(Date.now());
  });
});
