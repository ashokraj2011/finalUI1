# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `spec-filter2`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/spec-filter2/artifacts/specification/spec.md`
- Source SHA-256: `c0e218dd8735b95f7f44ec33ea0111311a0279c3ea3be9f333d42139a1165055`

## Summary from “Agent brief”

The rule studio needs a filter block for the visual designer that behaves like the existing function filter library but is authored directly within the rule canvas. The feature must let a rule author define a record filter before evaluation, choose ordering, then select all, first, last, or a range of rows. It must work within the current rule model and remain editable, serializable, and reviewable without leaving the designer. The scope excludes adding filter logic to the functions library itself and excludes changing the backend rule engine outside the app-level dataset preparation and UI configuration model.

## Requirements

- The visual designer must expose a filter block in the rule authoring surface so an analyst can add record filtering as part of rule configuration. *(S1)* [spec-filter2:REQ-001]
- The filter block must support source collection selection, field comparison, operator, and value entry, matching the same pattern used by the function filter library in the app. *(S1)* [spec-filter2:REQ-002]
- The filter block must support ordering by an attribute and direction before row selection so the rule author can choose a sorted record sequence. *(S2)* [spec-filter2:REQ-003]
- The filter block must support selection modes of all, first, last, and range rows, including a bounded start and end index for range selection. *(S2)* [spec-filter2:REQ-004]
- The system must apply the filtered dataset before rule evaluation so downstream decision logic evaluates only the selected records, not the full source set. *(S2)* [spec-filter2:REQ-005]
- The filter configuration must be editable, persisted with the rule definition, and visible in the same designer view used to author the rule. *(S1, S2)* [spec-filter2:REQ-006]
- The UI must handle empty, failure, and partial data states without silently producing misleading rule results. *(S2)* [spec-filter2:REQ-007]

## Non-functional requirements

- **Availability and correctness:** the authoring UI must maintain the existing rule validation flow and must not block rule creation when the filter is configured normally. The filter must be deterministic across repeated saves and reloads. [spec-filter2:REQ-008]
- **Accessibility:** controls for the filter block must use the same keyboard and visible focus patterns as other configuration panels in the rule studio. [spec-filter2:REQ-009]
- **Observability:** the design must show enough state to diagnose whether the selected records were empty, partially loaded, or filtered by criteria. [spec-filter2:REQ-010]

## Boundary conditions

- The filter block is part of the visual designer page and is not added to the functions library as a separate global function.
- Supported selection modes are `all`, `first`, `last`, and `range`.
- Sorting must support an attribute and direction (`asc` or `desc`).
- The filter must operate before rule evaluation; it does not replace the evaluation logic itself.
- The implementation must remain within the front-end rule authoring model and the current rule data shape; no backend contract changes are required for the initial scope.
