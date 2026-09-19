# SOLID Violations Kata

## Overview

This is a **verification fixture, not a practice exercise**. Each folder
contains a small, self-contained example of exactly one SOLID principle
violation, translated directly from *Agile Technical Practices Distilled*'s
SOLID chapter worked examples (Car/`Save`, `CarEngineStatusReportController`,
`Chef`/`Oven`/`Microwave`, `IAmACar`, `Kitchen`/`MicrowaveOven`). Its purpose
is to give static-analysis/AI code-review tooling (specifically
[jev-review](https://github.com/pedromsantos/jev-review)) a known-answer set
to check its SOLID rules against — every file's violation is deliberate and
documented below, not hidden.

Equivalent kata exist for the other languages this project's tooling
supports (Go, Java, Python, C#, C), built from the same spec so results can
be compared across languages.

## What's here

| File | Violates | Why |
|---|---|---|
| `Srp/Car.ts` | SRP | `save()` mixes a persistence concern into a class otherwise about domain behaviour (mileage/travel) |
| `Ocp/CarEngineStatusReportController.ts` | OCP (and DIP) | every new report format needs a new method here, and it constructs its concrete views directly instead of receiving them injected |
| `Lsp/Microwave.ts` | LSP | overrides `Oven.cook()` to throw instead of honouring the base contract |
| `Lsp/Chef.ts` | — | not itself a violation, but its `instanceof Microwave` special-case is the client-code tell of `Microwave`'s LSP violation |
| `Isp/IAmACar.ts` | ISP | bundles `refillGasoline`/`refillElectricity`, capabilities no single car supports both of |
| `Isp/ElectricCar.ts` | — | the forced implementer: throws on the gasoline method it can't honestly support |
| `Dip/Kitchen.ts` | DIP (and OCP) | constructs `MicrowaveOven` directly; can't work with any other oven without being edited |
| `Dip/MicrowaveOven.ts` | DIP | constructs `MicrowaveGenerator` directly instead of receiving it injected |

## Verified against jev-review

All expected violations were confirmed live against jev-review's Step 5
(SOLID) at time of writing: `Car.ts` → `srp-violation` (0.97),
`CarEngineStatusReportController.ts` → `ocp-violation` (0.94) and
`dip-violation` (0.94, both legitimate — it does both), `Microwave.ts` →
`lsp-violation` (0.98), `Chef.ts` → `ocp-violation` (0.91, via the
type-switch), `IAmACar.ts` → `isp-violation` (0.98), `Kitchen.ts` →
`dip-violation` (0.99) and `ocp-violation` (0.74, both legitimate — a
hard-wired dependency also blocks extension), `MicrowaveOven.ts` →
`dip-violation` (0.98).
