/* eslint-disable */
// Connascence of Identity: correctness of every consumer depends on
// them all sharing this exact single module-level instance — there is
// no way to have two independent counters, and the dependency is
// invisible from any one consumer's own code.
class Counter {
  private value = 0;

  increment(): number {
    this.value += 1;
    return this.value;
  }

  current(): number {
    return this.value;
  }
}

export const GlobalCounter = new Counter();
