# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `filter-rule`
- Producer: `specification` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/filter-rule/artifacts/specification/spec.md`
- Source SHA-256: `0d98d4f4cf83d7e2743da29a01767939f19991262ef77c32ef67d36577b326a4`

## Summary from “Agent brief”

The rule authoring experience needs a dedicated filter block that runs before rule evaluation. The user must be able to choose searchable attributes, apply comparison and range operators, and sort results before the engine consumes them. This specification defines the UI behavior, required permissions, empty and failure states, and the acceptance criteria for the filter configuration and result ordering.

## Requirements

1. The rule editing experience shall include a dedicated filter block that is evaluated before rule execution, and this block shall be represented in the authored rule model. [filter-rule:REQ-001]
2. The filter block shall allow the designer to select a supported attribute, an operator, and a value for at least the supported rule-model fields defined by the current schema. [filter-rule:REQ-002]
3. The filter block shall support comparison and range-based operators, and it shall reject unsupported combinations before the rule is saved. [filter-rule:REQ-003]
4. The filtered result set shall respect the configured sort order and shall present a deterministic ordering before the rule engine evaluates the final rule. [filter-rule:REQ-004]
5. The filter block shall allow the designer to apply a first/last or range-based subset selection before evaluation without altering the original rule definition. [filter-rule:REQ-005]
6. The rule authoring UI shall show an explicit empty state when no records match the current filter and an explicit failure state when the filter cannot be evaluated. [filter-rule:REQ-006]
7. The system shall prevent saving incomplete or invalid filter configurations and shall require the designer to resolve the error before proceeding. [filter-rule:REQ-007]
8. A reader or reviewer shall be able to inspect the configured filter and ordering without being able to mutate it unless they possess design authority. [filter-rule:REQ-008]

## Non-functional requirements

- The filter configuration and validation feedback shall complete without blocking the authoring interaction beyond the time needed to render the current rule state. [filter-rule:NFR-001]
- The UI shall remain readable and operable for authors using standard accessibility controls and keyboard navigation when defining or validating filters. [filter-rule:NFR-002]
- Filter state and validation messages shall be clear enough that a reviewer can understand the logic without reverse engineering the underlying rule engine. [filter-rule:NFR-003]

## Boundary conditions

- The filter block operates before rule evaluation and does not alter the underlying rule semantics.
- The system must support a predefined set of rule attributes drawn from the existing rule model and must reject unknown fields.
- Supported operators include equality, comparison, range, and grouping semantics for the filter logic.
- Sorting is limited to one active sort attribute with ascending or descending direction in the initial implementation.
- The filter range selection may specify a subset using first/last or index-based range semantics as defined by the rule authoring UI.
- All invalid or partial filter states must be surfaced in the UI before the rule is considered valid for save.
