<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "color-red",
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
      "sha256": "a9265e4020a97dd62bcf3bf1d0cea554f380b87299e1412d14ece33a3c9b0cfd",
      "bytes": 4355
    },
    "generation": 1,
    "publishedAt": "2026-09-14T23:56:01.230Z"
  },
  "sourceCommit": "e76f96edb90a18b67425164cdfcad818b16329db",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "79f5f674d3f48ebd1e393f47343c5334e27d3115c0075314da19942ec67acc4b",
  "sourceSha256": "e545d7ab906a16586328471319d4365508b734d078b3d4cbe49e5f57075232b3",
  "template": {
    "path": "singularity/work-items/color-red/config/wfa/blobs/sha256/27424a624b1dab57323fd7482ac62708bd42d11ba42e41c102f94e15182fe485",
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
    "path": "singularity/work-items/color-red/context/clarifications-specification-gen1.json",
    "sha256": "09da96b351920435bf7202d416cb397532e3b32d9355743138fb086dc3b98489",
    "promptSha256": "e155107e39983bca4436d9e1f80af3407cef642dfec7841f9c64a432ae959033",
    "responses": 3,
    "markers": [],
    "recordedAt": "2026-09-14T23:54:06.412Z",
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
      "path": "singularity/work-items/color-red/telemetry/specification-gen1.json",
      "sha256": "b9ad9bae9a2d75f512d743eb61eefbfd8c7624ed46b0b275837e7a86d7523a9f",
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
      "startedAt": "2026-09-14T23:56:01.229Z",
      "completedAt": "2026-09-14T23:56:01.229Z",
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

# Specification — color-red

## Agent brief

The rule authoring page must present all visible, user-facing text in CSS red (`#ff0000`). The
existing rule-authoring workflow, content, controls, permissions, and layout remain unchanged. The
primary verification is a screenshot of the default rule authoring view after it has loaded.

## Actors

- **Page user:** Views and uses the existing rule authoring page. Existing access and authority are
  unchanged by this visual change.

## User scenarios

### S1 — See the rule authoring page text in red

**Priority:** P1  
**Actor:** Page user  
**Context:** The user opens the rule authoring page in its normal default state.

- **Given** the rule authoring page has loaded successfully
  **When** the page user views its visible user-facing text
  **Then** that text is rendered as CSS red (`#ff0000`).

- **Given** the page is shown in the default rule authoring state used for verification
  **When** a screenshot is captured
  **Then** the screenshot visibly demonstrates the red text treatment without requiring a change
  to the existing page workflow.

## Failure and empty states

- **Empty:** If the default page has no authored rule content, all other visible user-facing text
  still uses CSS red (`#ff0000`).
- **Failure:** If the page cannot load, this change does not add a new recovery behavior; existing
  loading or error behavior remains unchanged.
- **Partial:** If some rule-authoring content is absent, every visible user-facing text element that
  is present still uses CSS red (`#ff0000`).

## Permissions

The change grants no new access and removes no access. A user who can currently view the rule
authoring page sees the color change; a user who cannot access it remains subject to the existing
permission behavior.

## Boundary conditions

- The scope is the rule authoring page only.
- “All visible text” means every user-facing text element visible in the default rule authoring
  view, including labels and controls; it does not include hidden or unloaded content.
- The required color is exactly CSS `#ff0000`; no alternate red, gradient, opacity adjustment, or
  color-dependent interaction is specified.
- The page's existing viewport and default loaded state are the screenshot verification conditions.

## Requirements

- Render all visible user-facing text on the default rule authoring page in CSS `#ff0000` without
  changing the page's existing behavior. (S1) [color-red:REQ-001]
- Preserve the existing rule-authoring content, layout, controls, loading behavior, and permission
  behavior while applying the color change. (S1) [color-red:REQ-002]
- Limit the color change to the rule authoring page; unrelated pages and hidden or unloaded content
  are outside this requirement. (S1) [color-red:REQ-003]

Acceptance criteria:

- A screenshot of the normally loaded default rule authoring view shows every visible user-facing
  text element in CSS `#ff0000`. (S1) [color-red:AC-001]
- The screenshot shows the existing rule authoring page structure and controls, with no required
  workflow or permission change. (S1) [color-red:AC-002]

## Non-functional requirements

- The color update must not add a measurable delay to the existing page load; verify by confirming
  the default view reaches its existing loaded state under the same project startup conditions.
  (S1) [color-red:REQ-004]
- Text must remain legible and the existing page layout must not shift as a result of the color
  update; verify in the required screenshot condition. (S1) [color-red:REQ-005]

## Constitution articles

No constitution article IDs were supplied by the pinned Story or approved inputs, so this
specification asserts no additional article binding.

## Assumptions

- The repository's existing rule authoring page is the page named by the pinned Story.
- “Red” means CSS `#ff0000`, as confirmed at the clarification checkpoint.
- The default rule authoring view at the existing project viewport is sufficient screenshot evidence,
  as confirmed at the clarification checkpoint.

## Out of scope

- Changing rule-authoring behavior, validation, persistence, or navigation.
- Changing text content, typography, layout, icons, backgrounds, borders, or color treatment on
  unrelated pages.
- Adding new permissions, responsive breakpoints, themes, or screenshot tooling.
