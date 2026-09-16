<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "ashok-filter",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 1,
  "status": "in_progress",
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
      "sha256": "3d4be26090abe105cb15e976eaaf175742dbb854637d9f9275a6906d9d1ed309",
      "bytes": 6266
    },
    "generation": 1,
    "publishedAt": "2026-09-16T15:27:31.615Z"
  },
  "sourceCommit": "a7e4511db5f40f8c4f32d2e170d87e71e22f70d4",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "79f5f674d3f48ebd1e393f47343c5334e27d3115c0075314da19942ec67acc4b",
  "sourceSha256": "8dbf12b7723958731ad4ccae30216995528bea257729ba2939e0daf902f01762",
  "template": {
    "path": "singularity/work-items/ashok-filter/config/wfa/blobs/sha256/27424a624b1dab57323fd7482ac62708bd42d11ba42e41c102f94e15182fe485",
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
    "path": "singularity/work-items/ashok-filter/context/clarifications-specification-gen1.json",
    "sha256": "bb41a9656d2804424b3946b636056c6f9a3c78ae01bb5dc84e09f4858f67798b",
    "promptSha256": "e0e9193885c618e1df9103f580af857fcd8bfcdd56ce09633590fda8bb7c79f7",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-09-16T15:25:58.147Z",
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
      "path": "singularity/work-items/ashok-filter/telemetry/specification-gen1.json",
      "sha256": "b40916e3af8edc6bf6e7c6a3c11028e9bea4f84c02fa62348e2bcf7298e58c97",
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
      "startedAt": "2026-09-16T15:27:31.615Z",
      "completedAt": "2026-09-16T15:27:31.615Z",
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

# Specification - ashok-filter

## Agent brief

The rule authoring experience needs a dedicated filter block that runs before rule evaluation. The
block lets an authorized user select searchable attributes, apply comparison and range operators,
and order the results before the engine consumes them. The pinned Story requires UI behavior,
permissions, empty and failure states, filter configuration, and result ordering to be specified.

## Actors

The primary actor is the person configuring and using a rule-authoring filter. The clarification
response did not identify the actor's authority or the view for an unauthorized reader. That
authorization decision remains open and is not inferred by this specification.

## User scenarios

### S1 - Configure a filter before rule evaluation

**Priority:** P1
**Actor:** Rule-authoring user
**Context:** A rule-authoring view is available and the evaluation engine has not consumed the
filter configuration.

- **Given** an entity with searchable attributes is available
  **When** the user selects one or more attributes and applies supported comparison or range
  operators
  **Then** the filter block displays the selected configuration and makes it available to the
evaluation flow.

- **Given** a configured filter
  **When** the user changes an attribute, operator, or value
  **Then** the displayed configuration reflects the change before evaluation consumes it.

### S2 - Order filtered results

**Priority:** P1
**Actor:** Rule-authoring user
**Context:** A filter configuration can produce an ordered result set.

- **Given** filtered results are available
  **When** the user selects ascending or descending ordering and an optional SQL-like limit
  **Then** results are presented in the requested direction and limited when a limit is supplied.

## Failure and empty states

- **Empty:** The clarification response identifies the outcome as failure but does not define the
  presentation for zero records. The exact empty-state copy and recovery action remain open.
- **Failure:** When filtering or evaluation cannot complete, the UI must expose a failure state and
  must not present the result as successfully evaluated.
- **Partial:** The clarification response does not define partial-completion behavior. Whether
  partially available results may be shown, and how they are labeled, remains open.

## Permissions

The clarification response is `unknown`; no role or unauthorized-reader behavior is specified.
Implementation must not invent an authority model. This is a publication-blocking open question.

## Boundary conditions

- The filter runs before rule evaluation.
- Searchable attributes include all attributes available on the entity, subject to the eventual
authority model.
- Comparison and range operators include all operators available to the underlying entity/query
capability, subject to the eventual operator contract.
- Ordering supports ascending and descending directions using SQL-like semantics.
- A user may supply a result limit; the limit's numeric range, default, and behavior at or beyond
its boundary remain open.

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

## Acceptance criteria

- A screenshot shows the dedicated filter block before evaluation, with attribute, operator, and
  value controls visible. *(S1)* [ashok-filter:AC-001]
- Testing demonstrates that changing the selected attribute, operator, or value changes the
  configuration consumed by evaluation. *(S1)* [ashok-filter:AC-002]
- Testing demonstrates ascending and descending result ordering and verifies that a supplied limit
  constrains the result set. *(S2)* [ashok-filter:AC-003]
- Testing demonstrates that a filtering or evaluation failure is surfaced as a failure state and
  is not reported as successful evaluation. *(S1, S2)* [ashok-filter:AC-004]
- The final screenshot and test viewport/scenario set are recorded before approval. *(S1, S2)*
  [ashok-filter:AC-005]

## Non-functional requirements

No measurable latency, throughput, availability, accessibility, privacy, or retention target is
present in the pinned Story or clarification responses. These targets remain open rather than
being invented here.

## Constitution articles

No constitution article IDs were provided by the pinned Story or clarification responses.

## Assumptions

- The rule engine exposes entity attributes and supported operators to the filter block.
- The evaluation flow can consume a structured filter configuration before rule evaluation.
- SQL-like ordering means a selected field is ordered in ascending or descending direction.

## Open questions

- Which roles may configure and use the filter, and what does an unauthorized reader see?
- What exact UI and recovery action represent no matching records?
- What behavior and labeling apply to partially completed filtering?
- What numeric limit range, default, and boundary behavior apply?
- Which viewport and test scenario set are required for the screenshot and testing evidence?
- Which measurable non-functional targets and constitution articles govern this Story?

## Out of scope

- Redesigning the rule evaluation engine.
- Defining attributes or operators that are not exposed by the underlying entity capability.
- Establishing an authorization model without a confirmed role decision.
- Choosing empty, partial, non-functional, or constitution policies that the Story does not state.
