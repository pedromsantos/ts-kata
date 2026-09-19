/* eslint-disable */
// Connascence of Timing: waiting a fixed, arbitrary delay instead of
// actually waiting on the job's completion — correctness depends on the
// job finishing within 1000ms, a race condition disguised as a constant.
export class BackgroundJobRunner {
  private jobResult: string | null = null;

  startJob(): void {
    setTimeout(() => {
      this.jobResult = 'done';
    }, 300);
  }

  async waitForResult(): Promise<string | null> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return this.jobResult;
  }
}
