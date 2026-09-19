/* eslint-disable */
// Connascence of Algorithm: the same checksum computation (sum of char
// codes mod 10) is duplicated in both methods instead of extracted once
// — if the algorithm ever changes, both call sites must be updated in
// lockstep or they silently disagree.
export class ChecksumCalculator {
  addChecksum(inputData: string): string {
    let sum = 0;
    for (const ch of inputData) sum += ch.charCodeAt(0);
    const checksum = sum % 10;
    return inputData + checksum;
  }

  check(inputDataWithChecksum: string): boolean {
    const inputData = inputDataWithChecksum.slice(0, -1);
    const expected = Number(inputDataWithChecksum.slice(-1));
    let sum = 0;
    for (const ch of inputData) sum += ch.charCodeAt(0);
    return sum % 10 === expected;
  }
}
