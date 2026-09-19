# Connascence Violations Kata

## Overview

This is a **verification fixture, not a practice exercise**. Each folder
contains a small, self-contained example of exactly one Connascence type,
translated directly from *Agile Technical Practices Distilled*'s
Connascence chapter worked examples (`NotificationSystem.SendEmail`,
transport-mode switch, checksum duplication, `ReceiptSender`, arbitrary
timeouts, a shared global instance). Its purpose is to give a known-answer
set for [jev-review](https://github.com/pedromsantos/jev-review)'s upcoming
Connascence rules to be verified against before those rules are implemented
— every file's violation is deliberate and documented below.

`CoV` (Connascence of Value) is intentionally not represented here — it's
already covered by jev-review's existing `unwrapped-domain-primitive` (Step
2) and `unenforced-invariant` (Step 3) checks. `CoMT` (Connascence of Manual
Task) is intentionally not represented either: it's connascence between code
and an external, undocumented manual step (a deployment script, a runbook),
which no single-file code review can ever see.

Equivalent kata exist for the other languages this project's tooling
supports (Go, Java, Python, C#, C), built from the same spec.

## What's here

| File | Type | Why |
|---|---|---|
| `Position/NotificationSystem.ts` | Connascence of Position | three same-typed `string` parameters carry meaning only through argument order |
| `Meaning/TransportSelector.ts` | Connascence of Meaning | `"1"`/`"2"`/`"3"`/`"4"` mean bike/car/train/bus only by an unstated, shared convention |
| `Algorithm/ChecksumCalculator.ts` | Connascence of Algorithm | the checksum computation (`sum % 10`) is duplicated across two methods instead of extracted once |
| `ExecutionOrder/ReceiptSender.ts` | Connascence of Execution Order | `archive()` is only correct after `sendToCustomer()`, but nothing enforces that order |
| `Timing/BackgroundJobRunner.ts` | Connascence of Timing | waits a fixed, arbitrary delay instead of the job's actual completion |
| `Identity/GlobalCounter.ts` + `Identity/CounterConsumer.ts` | Connascence of Identity | every consumer's correctness depends on sharing this exact module-level instance |
