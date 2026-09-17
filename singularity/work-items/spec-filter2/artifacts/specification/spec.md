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

<!--
Scenarios come first, and general requirements come after them `[SPK:REQ-068]`. That ordering is the
template's opinion: a requirement written before anyone has described the situation it serves tends
to describe the system instead of the need, and nobody notices until verification.

Where the current Story evidence leaves something material unknown, say so with a marker rather
than guessing. Use this syntax:

    [NEEDS CLARIFICATION: <one question grounded in the current Story evidence>]

Replace the angle-bracketed placeholder; never copy or ask it as written. The question must be one
non-empty line and must arise from the pinned sources, approved upstream artifacts, repository world
model, or a contradiction among them. Markers are extracted the same way clauses are, so a marker
inside fenced or inline code is ignored `[SPK:REQ-063]`. This phase blocks publication while any
marker is unresolved, and a marker is only resolved when a later generation removes it *and* records
the answer `[SPK:REQ-067]` — deleting the text alone is an integrity failure, not an answer.
-->

## Agent brief

<!--
Summarize the approved intent for downstream agents in a compact, standalone form. Include the
problem, intended outcome, principal actors, most important scenarios, hard constraints, and major
exclusions. Do not introduce claims that are absent from the sections below. Exact requirements and
boundary conditions are preserved separately by the governed projection.
-->

## Actors

Who uses this, and what authority does each hold?

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — <the most important situation, in the user's words>

**Priority:** P1
**Actor:** <role>
**Context:** <what is true before this begins>

- **Given** <the starting state>
  **When** <the actor does this>
  **Then** <the observable outcome>

- **Given** <a variation worth stating>
  **When** <…>
  **Then** <…>

### S2 — <the next situation>

**Priority:** P2

- **Given** … **When** … **Then** …

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** <no records yet>
- **Failure:** <the dependency is unavailable>
- **Partial:** <some of it worked>

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- <requirement>. *(S1)* [spec-filter2:REQ-001]
- <requirement>. *(S1, S2)* [spec-filter2:REQ-002]

Acceptance criteria use the same stable, namespaced form:

- <observable acceptance outcome>. *(S1)* [spec-filter2:AC-001]

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

Use governed requirement anchors here too (for example `[spec-filter2:REQ-003]`); `NFR-001` by
itself is only a display label and is not a stable clause identity.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

- <ART-…>

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.
