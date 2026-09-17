<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "spec-filter2",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 0,
  "status": "in_progress",
  "generatedBy": null,
  "generatedAgent": null,
  "authorship": {
    "schemaVersion": 1,
    "producer": "legacy-unspecified",
    "channel": "legacy",
    "governedAgentContext": null,
    "kernelModel": {
      "invoked": false,
      "status": "unavailable",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "source": null
  },
  "sourceCommit": null,
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "e2cd41272a10adc40d0f004b35c269b0a9b1f8a911865ad7fe9709423e0fa2b0",
  "sourceSha256": "71a78e0e3447a1b9343a45bf20b9855e52a490f91608ce0df68b3d738f848ceb",
  "template": {
    "path": "singularity/work-items/spec-filter2/config/wfa/blobs/sha256/27424a624b1dab57323fd7482ac62708bd42d11ba42e41c102f94e15182fe485",
    "sha256": "27424a624b1dab57323fd7482ac62708bd42d11ba42e41c102f94e15182fe485",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/spec-driven/spec.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [],
  "remoteOutputs": [],
  "usage": [],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Specification — spec-filter2

## Agent brief

The rule studio needs a filter block for the visual designer that behaves like the existing function filter library but is authored directly within the rule canvas. The feature must let a rule author define a record filter before evaluation, choose ordering, then select all, first, last, or a range of rows. It must work within the current rule model and remain editable, serializable, and reviewable without leaving the designer. The scope excludes adding filter logic to the functions library itself and excludes changing the backend rule engine outside the app-level dataset preparation and UI configuration model.

## Actors

- **Rule author / analyst**: creates and edits rule logic in the visual designer and sets filter conditions before evaluation.
- **Rule reviewer / operator**: inspects the configured filter and confirms that the filtered record set matches the intended business rule context.
- **Application runtime / rule engine**: consumes the post-filtered dataset when evaluating a rule.

## User scenarios

### S1 — Add a filter block to a rule term in the visual designer

**Priority:** P1
**Actor:** Rule author
**Context:** The author is building a rule in the visual designer and needs an intermediate record-selection step before the rule evaluates.

- **Given** the author is on the visual designer canvas
  **When** they add a filter block to a rule term
  **Then** the filter block appears alongside the current rule logic controls and is configurable in the same authoring flow

- **Given** the author has selected a filter block
  **When** they set the source collection, field, operator, value, sort field, sort direction, and selection mode
  **Then** the configured filter is visible and persists with the rule definition

### S2 — Apply filtered record ordering and row selection before evaluation

**Priority:** P1
**Actor:** Rule author
**Context:** A rule depends on a subset of records and the author needs to sort and narrow the rows before evaluation.

- **Given** a dataset contains multiple records
  **When** the author applies a filter using a field comparison and chooses first, last, or range selection with ordering
  **Then** only the selected rows are passed to the downstream rule evaluation

- **Given** the filter is configured with no matching records or a missing data source
  **When** the rule is evaluated
  **Then** the system shows an empty or failure state rather than silently evaluating with unrelated records

## Failure and empty states

- **Empty:** no records exist in the selected source collection; the filter should show an empty result state and not evaluate against stale or unrelated rows.
- **Failure:** the configured field, source collection, or dependency is unavailable or invalid; the interface should surface a clear failure state and keep the rule editable.
- **Partial:** some records load but the selection criteria exclude others; the effect must be deterministic and the filtered dataset must be visible to the author.

## Permissions

- **Rule author** may create, modify, remove, and review filter blocks within the rule visual designer.
- **Rule reviewer** may inspect the configured filter and verify row order and selection semantics, but may not edit production logic without author rights.
- **Unauthenticated or lower-privilege readers** should see the rule view without mutation controls, with no details beyond the established read-only permission model.

## Boundary conditions

- The filter block is part of the visual designer page and is not added to the functions library as a separate global function.
- Supported selection modes are `all`, `first`, `last`, and `range`.
- Sorting must support an attribute and direction (`asc` or `desc`).
- The filter must operate before rule evaluation; it does not replace the evaluation logic itself.
- The implementation must remain within the front-end rule authoring model and the current rule data shape; no backend contract changes are required for the initial scope.

## Requirements

- The visual designer must expose a filter block in the rule authoring surface so an analyst can add record filtering as part of rule configuration. *(S1)* [spec-filter2:REQ-001]
- The filter block must support source collection selection, field comparison, operator, and value entry, matching the same pattern used by the function filter library in the app. *(S1)* [spec-filter2:REQ-002]
- The filter block must support ordering by an attribute and direction before row selection so the rule author can choose a sorted record sequence. *(S2)* [spec-filter2:REQ-003]
- The filter block must support selection modes of all, first, last, and range rows, including a bounded start and end index for range selection. *(S2)* [spec-filter2:REQ-004]
- The system must apply the filtered dataset before rule evaluation so downstream decision logic evaluates only the selected records, not the full source set. *(S2)* [spec-filter2:REQ-005]
- The filter configuration must be editable, persisted with the rule definition, and visible in the same designer view used to author the rule. *(S1, S2)* [spec-filter2:REQ-006]
- The UI must handle empty, failure, and partial data states without silently producing misleading rule results. *(S2)* [spec-filter2:REQ-007]

## Acceptance criteria

- In the visual designer, a user can add a filter block to a rule term and configure `sourceCollection`, `filterField`, `filterOperator`, `filterValue`, `sortByField`, `sortDirection`, and `selectionType` without leaving the designer. *(S1)* [spec-filter2:AC-001]
- When a user chooses `first`, `last`, or `range`, the filtered rows are ordered and narrowed before the rule engine evaluates them, so only the selected subset participates in the result. *(S2)* [spec-filter2:AC-002]
- When the source collection is empty or unavailable, the system displays a clear empty or failure state and prevents misleading rule evaluation with unrelated records. *(S2)* [spec-filter2:AC-003]

## Non-functional requirements

- **Availability and correctness:** the authoring UI must maintain the existing rule validation flow and must not block rule creation when the filter is configured normally. The filter must be deterministic across repeated saves and reloads. [spec-filter2:REQ-008]
- **Accessibility:** controls for the filter block must use the same keyboard and visible focus patterns as other configuration panels in the rule studio. [spec-filter2:REQ-009]
- **Observability:** the design must show enough state to diagnose whether the selected records were empty, partially loaded, or filtered by criteria. [spec-filter2:REQ-010]

## Constitution articles

- [SPK:REQ-100] The rule studio must preserve user intent and rule authoring context without silently broadening scope.
- [SPK:REQ-101] Publication is blocked until the specification is complete and contains no unresolved template placeholders.

## Assumptions

- The existing app already exposes a rule canvas and function-filter patterns that can serve as the baseline for the visual designer filter block.
- Rule evaluation is front-end driven for this story and does not require a separate backend schema migration.
- `all`, `first`, `last`, and `range` are the supported selection semantics for the current release.

## Out of scope

- Adding a new global function to the functions library itself.
- Changing the server-side rule engine contract or data ingestion model.
- Supporting arbitrary custom selection expressions beyond the defined `first`, `last`, `range`, and `all` modes.
