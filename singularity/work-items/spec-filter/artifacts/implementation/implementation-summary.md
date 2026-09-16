<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "spec-filter",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 1,
  "status": "approved",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "developer",
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
      "agentId": "developer"
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
      "filename": "implementation-summary.md",
      "mediaType": "text/markdown",
      "sha256": "13efa3a935642066c4a82ee22ea764a0b049d43b574d1c091dfda95b2ca8acd5",
      "bytes": 2152
    },
    "generation": 1,
    "publishedAt": "2026-09-16T22:37:43.799Z"
  },
  "sourceCommit": "51a41ce7c3a9d80a03b4f6ef078ac4d22d0686a0",
  "generationCommit": "bbd08b0a0a1fc4084216be3bb2bf2ed3f5c2358c",
  "publicationCommit": "bbd08b0a0a1fc4084216be3bb2bf2ed3f5c2358c",
  "configSha256": "79f5f674d3f48ebd1e393f47343c5334e27d3115c0075314da19942ec67acc4b",
  "sourceSha256": "a53fda7bb970a5aff173f82c2ce099b46406773e726358a6d5373bea32a2b09f",
  "template": {
    "path": "singularity/work-items/spec-filter/config/wfa/blobs/sha256/61cd7cba79a0dd2914a25b53496b8bd9c575c36219597d65b8ec10010e801d9c",
    "sha256": "61cd7cba79a0dd2914a25b53496b8bd9c575c36219597d65b8ec10010e801d9c",
    "source": "workflow-snapshot",
    "sourcePath": "singularity/templates/common/implementation.md"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/spec-filter/context/inputs-implementation-gen1.json",
    "sha256": "8ad3de11a0cbe3dd11993b1dec97811df9a5ffc85e74e2e2c33662e07531709e",
    "renderedSha256": "5bfead5e5bf256896274d9f96c25002e50c2b6abad5347917b3150917e20c7b0",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/spec-filter/telemetry/implementation-gen1.json",
      "sha256": "57d3b6a100877c12e1db6a8018ad3dfe266723c8597a751495a39c611931bb79",
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
      "startedAt": "2026-09-16T22:37:43.799Z",
      "completedAt": "2026-09-16T22:37:43.799Z",
      "agent": "developer",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [
    {
      "decision": "approved",
      "phase": "implementation",
      "at": "2026-09-16T22:43:01.370Z",
      "actor": {
        "name": "Ashok Raj",
        "email": "88361104+ashokraj2011@users.noreply.github.com",
        "login": "ashokraj2011",
        "githubLookup": "resolved"
      },
      "agent": "developer",
      "authorityGroup": "engineering-reviewers",
      "identityAssurance": "configured-local",
      "channel": "copilot-selection-receipt",
      "generation": 1,
      "artifactSha256": [
        {
          "path": "singularity/work-items/spec-filter/artifacts/implementation/implementation-summary.md",
          "sha256": "f240343391a6adca9886c821d18c035f9034d5d2892fde0876dd871227de6143"
        },
        {
          "path": "src/app/components/rule-sets/rule-sets.component.ts",
          "sha256": "cf181bc5f63e75a6ecd28545f1ffd8e92aee912ac6bcce27d75a999ecb2a77bd"
        },
        {
          "path": "src/app/services/rule-engine.service.spec.ts",
          "sha256": "e4f615c12ba970960ff2dcf7878ddda04d3d31157e716553f458b2ea1fc0b3d2"
        },
        {
          "path": "src/app/services/rule-engine.service.ts",
          "sha256": "69f576596df96b008de622557039f86adcd4ba0698a243ef520621b876553a4b"
        }
      ],
      "reviewPacketSha256": "e3a757cf15ca8350568b5200d633a94ca04b75f4aae1390f4403ec87fea7b68e",
      "evidenceCommit": "1916a1e3e193b4a1045452c96fb74861c52bf807",
      "artifactSetSha256": "50bf3a6e2d9940f63533030099f93d9babeb848e2b46eb0e3ffafb8d5dd93eaf",
      "architectureIntent": null,
      "architectureDecision": null,
      "reviewEvidenceCommit": "1916a1e3e193b4a1045452c96fb74861c52bf807",
      "actionContext": {
        "phase": "implementation",
        "label": "Implementation",
        "generation": 1,
        "submittedAt": "2026-09-16T22:41:16.053Z",
        "artifacts": [
          {
            "path": "singularity/work-items/spec-filter/artifacts/implementation/implementation-summary.md",
            "sha256": "f240343391a6adca9886c821d18c035f9034d5d2892fde0876dd871227de6143"
          },
          {
            "path": "src/app/components/rule-sets/rule-sets.component.ts",
            "sha256": "cf181bc5f63e75a6ecd28545f1ffd8e92aee912ac6bcce27d75a999ecb2a77bd"
          },
          {
            "path": "src/app/services/rule-engine.service.spec.ts",
            "sha256": "e4f615c12ba970960ff2dcf7878ddda04d3d31157e716553f458b2ea1fc0b3d2"
          },
          {
            "path": "src/app/services/rule-engine.service.ts",
            "sha256": "69f576596df96b008de622557039f86adcd4ba0698a243ef520621b876553a4b"
          }
        ],
        "agentBriefs": [
          {
            "consumerPhase": "convergence",
            "status": "fallback-whole",
            "path": "singularity/work-items/spec-filter/context/briefs/implementation-gen1-for-convergence.json",
            "renderedPath": null,
            "renderedSha256": null,
            "integritySha256": "2dcc26c92cd2e431c12ac71c621f368cfb417c7916bb881427c012de4ba659b4"
          },
          {
            "consumerPhase": "verification",
            "status": "fallback-whole",
            "path": "singularity/work-items/spec-filter/context/briefs/implementation-gen1-for-verification.json",
            "renderedPath": null,
            "renderedSha256": null,
            "integritySha256": "93538c451ab9a5a4a3fa9cf1e1ad42d62e682654f387a272952d6a4a6afabcc5"
          }
        ],
        "reviewPacketSha256": "e3a757cf15ca8350568b5200d633a94ca04b75f4aae1390f4403ec87fea7b68e",
        "submittedSourceCommit": "bbd08b0a0a1fc4084216be3bb2bf2ed3f5c2358c",
        "planId": "8b2318b6ebae80e45864b532"
      },
      "selfApproval": true
    }
  ],
  "selfApproval": true,
  "conformanceTree": null
}
-->

# spec-filter — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

## Implemented outcome

The Visual Designer now exposes a dedicated Filter block that matches the approved rule-condition operator set, supports ordering and row selection, and rejects incomplete configuration instead of silently evaluating invalid filter state. The shared rule-engine filter path applies criteria before downstream Visual Designer terms evaluate, preserving the original Functions surface as-is.

## Changed components and decisions

- `src/app/components/rule-sets/rule-sets.component.ts`: expanded the supported filter operators to include `not_contains`, `exists`, and `not_exists`, and updated validation warnings so nullary operators are accepted without a value while incomplete criteria remain visible.
- `src/app/services/rule-engine.service.ts`: fixed filter validation and row matching so presence checks and negative checks behave correctly, with `exists` / `not_exists` treated as valid filter criteria and value-based operators validated consistently.
- `src/app/services/rule-engine.service.spec.ts`: added regression coverage for the full filter operator set and invalid configuration handling.

This implementation stays within the approved scope: the Filter block remains in the Visual Designer only and does not add functionality to the Functions surface.

## Tests and operational notes

Validated with the targeted rule-engine regression suite:

- `npm test -- --watch=false --browsers=ChromeHeadless --include src/app/services/rule-engine.service.spec.ts`

Result: 16 success cases, 0 failures.

Notes:
- Scope remains limited to the Visual Designer filter path and the shared engine evaluation logic.
- Manual screenshot verification remains as the UX confirmation step called for by the specification.
- No Function-library or unrelated rule model surfaces were changed.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/spec-filter/artifacts/specification/spec.md sha256=912910d2869c45498a236338fff05be3a3ae16324e837751ac5b15bde1ddfde8 status=captured projection=approved-summary representation-sha256=sha256:5916c0736b040b607fc5974bb3a7c01d1767cfd853774c42b96ee063e50cd254 brief-sha256=5916c0736b040b607fc5974bb3a7c01d1767cfd853774c42b96ee063e50cd254 expansion=sfref:v1:story:spec-filter:9087c020acec28af4eef01373515609f1d4ab8bece0ef34b69e0ce5128e040a5 -->

# Approved agent brief — Specification

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `spec-filter`
- Producer: `specification` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/spec-filter/artifacts/specification/spec.md`
- Source SHA-256: `5b368a30ba919e0250db73a7cd4bc616ab9b2f521f4f5084be27f3009743be3a`

## Summary from “Agent brief”

Add a Filter block to the Rule Visual Designer so records are filtered before the existing terms
evaluate them. The block belongs in the Visual Designer only, not in Functions. It supports the same
operators as rule conditions, can order records by attributes, and can select first, last, or a range
of rows. The implementation is manually verified with relevant screenshots and a summary of the
generated code.

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

## Boundary conditions

- The Filter block is available in the Rule Visual Designer and is not added to Functions.
- Filtering occurs before Visual Designer term evaluation.
- A range selection includes only the rows defined by its configured bounds.
- First and last selection operate on the configured ordering; without ordering, the existing record
  order is preserved.

> Exact source expansion: `sfref:v1:story:spec-filter:9087c020acec28af4eef01373515609f1d4ab8bece0ef34b69e0ce5128e040a5`. Use `singularity-flow show sfref:v1:story:spec-filter:9087c020acec28af4eef01373515609f1d4ab8bece0ef34b69e0ce5128e040a5 --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/spec-filter/artifacts/planning/plan.md sha256=db5dc7164b5364c6f5e5e25234932d4ae62021ec0d47a1b19ddef63c4b341760 status=captured projection=approved-summary representation-sha256=sha256:5ee447badf3bf6297354001ee1955f289c17d92d16840f7169d3b28d9082b50e brief-sha256=5ee447badf3bf6297354001ee1955f289c17d92d16840f7169d3b28d9082b50e expansion=sfref:v1:story:spec-filter:18a4efb41c264ff6782a8060445b3249df886cc0adcf5867e15e65f49bbe580e -->

# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `spec-filter`
- Producer: `planning` generation 1
- Consumer: `implementation`
- Source: `singularity/work-items/spec-filter/artifacts/planning/plan.md`
- Source SHA-256: `43077335e2de0a2bfabc9573f31d58062676eaa18b450e3861bb2f24feabe1e7`

## Summary from “Agent brief”

Implement the Filter block in the Visual Designer only, upstream of existing Visual Designer term evaluation. The block will mirror the same condition operators already used for rule conditions, accept a record attribute for ordering, and support first/last/range selection before downstream terms run. The implementation will be validated by targeted rule-engine and UI regression checks so the feature is proven without leaking the filter into the Functions surface.

## Test strategy

| Clause | Expected paths | Planned tests |
|---|---|---|
| `spec-filter:REQ-001` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/components/functions/functions.component.ts` | `src/app/services/rule-engine.service.spec.ts`, `src/app/kernel/kernel.spec.ts` |
| `spec-filter:REQ-002` | `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:REQ-003` | `src/app/kernel/ast.ts`, `src/app/services/rule-engine.service.ts` | `src/app/kernel/kernel.spec.ts` |
| `spec-filter:REQ-004` | `src/app/services/rule-engine.service.ts`, `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:REQ-005` | `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:REQ-006` | `src/app/services/rule-engine.service.ts`, `src/app/kernel/evaluate.ts` | `src/app/kernel/kernel.spec.ts`, `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:REQ-007` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:REQ-008` | `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/services/rule-engine.service.spec.ts`, `src/app/kernel/kernel.spec.ts` |
| `spec-filter:REQ-009` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts`, `src/app/kernel/kernel.spec.ts` |
| `spec-filter:AC-001` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/components/functions/functions.component.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:AC-002` | `src/app/kernel/ast.ts`, `src/app/services/rule-engine.service.ts` | `src/app/kernel/kernel.spec.ts`, `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:AC-003` | `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `spec-filter:AC-004` | `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/services/rule-engine.service.spec.ts`, `src/app/kernel/kernel.spec.ts` |

## Risks and rollback

The principal risk is introducing the filter semantics into the wrong surface or changing the ordering of evaluation relative to downstream terms. This is mitigated by keeping the filter in the Visual Designer only, validating the ordering pipeline before downstream terms, and checking the rule-engine evaluation order with targeted regression tests. Rollback is straightforward: revert the Filter term integration and operator wiring while leaving the shared Functions library untouched, then restore the prior rule evaluation order if validation shows a regression.

> Exact source expansion: `sfref:v1:story:spec-filter:18a4efb41c264ff6782a8060445b3249df886cc0adcf5867e15e65f49bbe580e`. Use `singularity-flow show sfref:v1:story:spec-filter:18a4efb41c264ff6782a8060445b3249df886cc0adcf5867e15e65f49bbe580e --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
