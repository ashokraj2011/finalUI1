# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `ashok-filter`
- Producer: `specification` generation 1
- Consumer: `planning`
- Source: `singularity/work-items/ashok-filter/artifacts/specification/spec.md`
- Source SHA-256: `8cb7d9de0b1f37d4f251ab7a328d0b971612f3b424ad097c7f7c0442417ad054`

## Summary from “Agent brief”

The rule authoring experience needs a dedicated filter block that runs before rule evaluation. The
block lets an authorized user select searchable attributes, apply comparison and range operators,
and order the results before the engine consumes them. The pinned Story requires UI behavior,
permissions, empty and failure states, filter configuration, and result ordering to be specified.

## Requirements

- The UI shall provide a dedicated filter block that executes before rule evaluation. *(S1)*
  [ashok-filter:REQ-001]
- The filter block shall allow selection of searchable entity attributes. *(S1)*
  [ashok-filter:REQ-002]
- The filter block shall allow comparison and range operators supported by the underlying entity
  capability. *(S1)* [ashok-filter:REQ-003]
- The filter configuration shall be exposed to the evaluation flow only after the current user
  configuration is represented in the UI. *(S1)* [ashok-filter:REQ-004]
- The UI shall support ascending and descending result ordering. *(S2)* [ashok-filter:REQ-005]
- The UI shall support an optional result limit using SQL-like limit semantics. *(S2)*
  [ashok-filter:REQ-006]
- A filtering or evaluation failure shall be represented as a failure state rather than a
  successful result. *(S1, S2)* [ashok-filter:REQ-007]

## Non-functional requirements

No measurable latency, throughput, availability, accessibility, privacy, or retention target is
present in the pinned Story or clarification responses. These targets remain open rather than
being invented here.

## Boundary conditions

- The filter runs before rule evaluation.
- Searchable attributes include all attributes available on the entity, subject to the eventual
authority model.
- Comparison and range operators include all operators available to the underlying entity/query
capability, subject to the eventual operator contract.
- Ordering supports ascending and descending directions using SQL-like semantics.
- A user may supply a result limit; the limit's numeric range, default, and behavior at or beyond
its boundary remain open.
