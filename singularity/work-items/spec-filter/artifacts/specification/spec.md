<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "spec-filter",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 1,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "product-owner",
  "authorship": {
    "schemaVersion": 1,
    "producer": "governed-agent",
    "channel": "copilot-host",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": {
      "agentId": "product-owner"
    },
    "kernelModel": {
      "invoked": false,
      "status": "exact",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "changeOrigins": [
      "copilot"
    ],
    "source": {
      "kind": "in-place",
      "filename": "spec.md",
      "mediaType": "text/markdown",
      "sha256": "aca9a0c4a70812d6e3a6abb784c853e58b3dfc4a5beddf46be7cce560b1f71cc",
      "bytes": 5711
    },
    "generation": 1,
    "publishedAt": "2026-09-16T22:05:51.993Z"
  },
  "sourceCommit": "7c7f5161c3832580e4de7832ca6e3cc71e0d7444",
  "generationCommit": "9a649cac12c0432ccad1ed717db4420685ae51c2",
  "publicationCommit": "9a649cac12c0432ccad1ed717db4420685ae51c2",
  "configSha256": "79f5f674d3f48ebd1e393f47343c5334e27d3115c0075314da19942ec67acc4b",
  "sourceSha256": "a53fda7bb970a5aff173f82c2ce099b46406773e726358a6d5373bea32a2b09f",
  "template": {
    "path": "singularity/work-items/spec-filter/config/wfa/blobs/sha256/27424a624b1dab57323fd7482ac62708bd42d11ba42e41c102f94e15182fe485",
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
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/spec-filter/context/clarifications-specification-gen1.json",
    "sha256": "c9412fae99907a5f344654f5de898f25e19ddc3d730614202250624fb0f46eb7",
    "promptSha256": "81f5afdb712d674e2eb9c61b7000f2686ac253b21cb96a75801624782fb034ab",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-09-16T22:03:33.110Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/spec-filter/telemetry/specification-gen1.json",
      "sha256": "c7d684d6b37e0ca8b01b845ab25dc7450ce52cc365e1ea4fe73d71e34375f334",
      "status": "pending",
      "models": [],
      "providerCost": null
    }
  ],
  "remoteOutputs": [],
  "usage": [
    {
      "status": "unavailable",
      "source": "copilot-otel-unavailable",
      "provider": null,
      "model": null,
      "requestedModel": null,
      "resolvedModel": null,
      "resolvedModelAssurance": "unavailable",
      "inputTokens": null,
      "outputTokens": null,
      "cachedInputTokens": null,
      "cacheWriteInputTokens": null,
      "totalTokens": null,
      "providerCost": null,
      "costStatus": "unavailable",
      "spans": null,
      "startedAt": "2026-09-16T22:05:51.993Z",
      "completedAt": "2026-09-16T22:05:51.993Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Specification — spec-filter

## Agent brief

Add a Filter block to the Rule Visual Designer so records are filtered before the existing terms
evaluate them. The block belongs in the Visual Designer only, not in Functions. It supports the same
operators as rule conditions, can order records by attributes, and can select first, last, or a range
of rows. The implementation is manually verified with relevant screenshots and a summary of the
generated code.

## Actors

- A rule designer configures the Filter block and connects it before the Visual Designer terms.
- The rule engine evaluates the resulting rule against the filtered record set.

## User scenarios

### S1 — Filter records before Visual Designer terms

**Priority:** P1  
**Actor:** Rule designer  
**Context:** A rule is being assembled in the Rule Visual Designer and has terms that evaluate records.

- **Given** the designer is editing a rule in the Visual Designer
  **When** the designer adds and configures a Filter block before the terms
  **Then** the block is represented in the designer and its output feeds the terms for evaluation

- **Given** the designer configures a condition on the Filter block
  **When** the designer chooses an operator and value using the rule-condition behavior
  **Then** the filter applies that condition to the records before term evaluation

### S2 — Order and select the filtered rows

**Priority:** P1  
**Actor:** Rule designer  
**Context:** The Filter block has a record set and the designer needs deterministic row selection.

- **Given** the designer configures an order-by attribute
  **When** the rule runs
  **Then** records are ordered by that attribute before row selection

- **Given** the designer chooses first, last, or a range selection
  **When** the rule runs
  **Then** only the selected rows continue to the Visual Designer terms

## Failure and empty states

- **Empty:** A filter with no matching records produces an empty result for downstream terms without
  evaluating unrelated records.
- **Failure:** An invalid or incomplete filter configuration is visible to the designer and cannot be
  treated as a successful filter.
- **Partial:** If ordering or selection is configured without a filter condition, the configured
  ordering and selection still apply to the input records.

## Permissions

Any user who can edit a rule in the Rule Visual Designer may configure the Filter block. Users without
rule-editing access cannot change the block; existing read-only behavior remains unchanged.

## Boundary conditions

- The Filter block is available in the Rule Visual Designer and is not added to Functions.
- Filtering occurs before Visual Designer term evaluation.
- A range selection includes only the rows defined by its configured bounds.
- First and last selection operate on the configured ordering; without ordering, the existing record
  order is preserved.

## Requirements

- The Rule Visual Designer shall provide a Filter block distinct from the Functions surface. *(S1)* [spec-filter:REQ-001]
- The Filter block shall be placeable before the existing Visual Designer terms and shall pass its
  result to those terms. *(S1)* [spec-filter:REQ-002]
- The Filter block shall support all operators available to rule conditions. *(S1)* [spec-filter:REQ-003]
- The Filter block shall allow records to be ordered using a selected record attribute. *(S2)* [spec-filter:REQ-004]
- The Filter block shall allow selection of the first row, last row, or a configured range of rows. *(S2)* [spec-filter:REQ-005]
- The rule engine shall apply filtering, ordering, and row selection before evaluating downstream
  Visual Designer terms. *(S1, S2)* [spec-filter:REQ-006]
- The UI shall expose invalid or incomplete Filter block configuration instead of silently evaluating
  it as a valid filter. *(S1)* [spec-filter:REQ-007]

Acceptance criteria:

- A Filter block can be added and configured before terms in the Rule Visual Designer, and it is not
  added to Functions. *(S1)* [spec-filter:AC-001]
- All rule-condition operators are available when configuring Filter block criteria. *(S1)* [spec-filter:AC-002]
- Ordering by an attribute and selecting first, last, or a range produces the corresponding row set
  for downstream terms. *(S2)* [spec-filter:AC-003]
- The implementation is manually verified with screenshots of the relevant Visual Designer states and
  a summary of the generated code. *(S1, S2)* [spec-filter:AC-004]

## Non-functional requirements

- The Filter block shall preserve the existing Visual Designer interaction and visual conventions;
  conformance is checked during manual verification. *(S1)* [spec-filter:REQ-008]
- The filter configuration shall be understandable from the rendered controls and shall expose
  validation feedback for invalid or incomplete values; conformance is checked during manual
  verification. *(S1)* [spec-filter:REQ-009]

## Constitution articles

The configured constitution policy is `warn`, and the referenced `singularity/constitution.md` file is
not present in the governed repository snapshot. No constitution article IDs are cited.

## Assumptions

- Existing rule-condition operators and record attributes are the source of truth for the Filter block
  controls.
- Existing Visual Designer term evaluation can consume the Filter block output without changing the
  Functions surface.
- Screenshot capture and generated-code review are performed manually as stated by the clarification.

## Out of scope

- Adding or changing filter behavior in Functions.
- Redesigning unrelated Visual Designer terms or rule-condition operators.
- Defining automated screenshot tooling or a new generated-code format.

