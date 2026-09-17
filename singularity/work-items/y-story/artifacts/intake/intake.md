<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "y-story",
  "workType": "classic-delivery",
  "phase": "intake",
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
      "filename": "intake.md",
      "mediaType": "text/markdown",
      "sha256": "9fb7e793306e3a18c7062b568aea196bd24c8f7d3267e4ec507f4d31c9724bc9",
      "bytes": 5772
    },
    "generation": 1,
    "publishedAt": "2026-09-17T05:26:22.895Z"
  },
  "sourceCommit": "0ea642dc9bf78017567f5fd22fafc5345b638126",
  "generationCommit": "3c3463469b300def1a907b2f639851be82155e6f",
  "publicationCommit": "3c3463469b300def1a907b2f639851be82155e6f",
  "configSha256": "7bc73fa79087e21f5579672cdae93a210e7bd8934505bdd31dc38223793a6c16",
  "sourceSha256": "1c22ed7a584554ed9d0b88b49b0186bdd8c0ecebdb5bfd8f2616ab981d77d258",
  "template": {
    "path": "singularity/work-items/y-story/config/wfa/blobs/sha256/d91d55500e7dbc30a388633bce723623157619bca0bbc9bbaf8e64dfd85308a8",
    "sha256": "d91d55500e7dbc30a388633bce723623157619bca0bbc9bbaf8e64dfd85308a8",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/classic-delivery/intake.md"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/y-story/context/clarifications-intake-gen1.json",
    "sha256": "40e585826c9f67c35bc83811e87f7d779aa0a83c34b2d9db4cd5dfdf34621c76",
    "promptSha256": "da60efb89b4e807f923238d419decedb6ec52d144f4332ad53d137139879aff3",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-09-17T05:24:26.231Z",
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
      "path": "singularity/work-items/y-story/telemetry/intake-gen1.json",
      "sha256": "ba312049967aef7091e917b415421b674c975c7a1c6b829d0ec07a839d2c8365",
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
      "startedAt": "2026-09-17T05:26:22.895Z",
      "completedAt": "2026-09-17T05:26:22.895Z",
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

# y-story — Classic delivery intake

## Request and outcome

Rule designers configure General Logic in the visual rule designer using an ordered list of
"Term" blocks (Term 1, Term 2, ...), each holding AND/OR-joined conditions on record attributes.
There is currently no way to order or subset the underlying record set itself before those terms
evaluate it — a designer who wants "the 3 most recent records" or "the last N rows" has no
supported block for that.

This Story adds a new **Filter block** to General Logic in the rule designer canvas
([y-story:REQ-001]), positioned immediately before the first Term block ([y-story:REQ-002]).
The Filter block lets a designer pick one or more attributes to order the record set by
(ascending/descending) and then choose a selection mode — first N rows, last N rows, or an
explicit row range — over the ordered set ([y-story:REQ-003]). The available attributes reuse
the same attribute list already offered by the existing Term/condition pickers
([y-story:REQ-004]).

Measurable outcome: after adding a Filter block, running `npm start` and opening the app in a
browser, a designer can see the Filter block above Term 1 in General Logic, configure ordering
attributes and a first/last/range selection, and see that configuration persist in the node's
model exactly like existing Term configuration does.

## Scope and constraints

In scope:
- A new Filter block UI in the rule designer's General Logic section (canvas component), rendered
  above Term 1, with: attribute-based ordering (one or more attributes, ascending/descending) and
  a row-selection mode of `first`, `last`, or `range` (start/end row numbers).
- Wiring the Filter block's configuration into the existing node/decision-logic model so it is
  stored and re-rendered the same way Term data is today.
- Reusing the existing attribute source already used by Term/condition pickers — no new attribute
  metadata source is introduced.

Out of scope:
- Any backend/API/server change (`server/` is untouched); this is a UI-layer-only change.
- Actual runtime evaluation/execution semantics of the filter against real data — this Story only
  adds the configuration block and its stored model, per the Story's own acceptance criteria
  ("stop after coding, start the server and show the app in browser").
- Automated test suites; acceptance is manual visual verification in the browser per clarified
  scope.

Constraints:
- Must follow the existing rule-canvas component's structural and styling conventions (same file:
  `src/app/components/rule-canvas/rule-canvas.component.ts`) so the Filter block looks and behaves
  consistently with the existing Term blocks.
- No changes to `server/` or any HTTP/API contract.

## Acceptance criteria

| Clause | Observable outcome |
|---|---|
| [y-story:AC-001] | Opening a rule/node's General Logic in the rule designer canvas shows a Filter block positioned above Term 1. |
| [y-story:AC-002] | The Filter block lets the user choose one or more ordering attributes (ascending/descending) from the same attribute list used by Term conditions. |
| [y-story:AC-003] | The Filter block lets the user choose a selection mode of first N, last N, or an explicit row range, and this choice is stored in the node's decision-logic model. |
| [y-story:AC-004] | After `npm start`, the app loads in the browser with no console errors introduced by the new Filter block, and the configured Filter block state is visible/persisted when reopening the node. |

## Planned implementation evidence

| Clause | Expected paths | Planned tests |
|---|---|---|
| `y-story:REQ-001` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria (no automated test suite in scope) |
| `y-story:REQ-002` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria |
| `y-story:REQ-003` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria |
| `y-story:REQ-004` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria |
| `y-story:AC-001` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria (no automated test suite in scope) |
| `y-story:AC-002` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria |
| `y-story:AC-003` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria |
| `y-story:AC-004` | `src/app/components/rule-canvas/rule-canvas.component.ts` | not-applicable: manual browser verification per Story acceptance criteria |

## Initial evidence

- Story request (`singularity/work-items/y-story/USER-STORY.md`): add a filter block in the rule
  designer's General Logic, before Term 1, ordering records by attributes and selecting
  first/last/range rows; acceptance criteria is to start the server and show the app in the
  browser.
- Repository evidence: `src/app/components/rule-canvas/rule-canvas.component.ts` implements the
  General Logic UI, including the per-term "Term N" header binding, `addTerm`/`removeTerm`, and the
  `decisionLogic.terms` model that a Filter block must integrate with the same way.
- Recorded clarifications (`singularity/work-items/y-story/context/clarifications-intake-gen1.json`):
  placement before Term 1; filter semantics (order + first/last/range); attribute source reuse;
  UI-only scope; manual verification acceptance.
