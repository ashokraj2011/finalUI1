<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "x-usecase",
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
      "sha256": "aa99ac26047f48ecd75e8ea98815b0e4eb3ca50469e7ad183edd6a8f0f89058a",
      "bytes": 4513
    },
    "generation": 1,
    "publishedAt": "2026-09-17T04:44:02.447Z"
  },
  "sourceCommit": "f5a7e3eaf05435e4feccece1317890c5506398f1",
  "generationCommit": "3352f9e5d1591fa6f9fc0169b4c4b54d00b3f2d2",
  "publicationCommit": "3352f9e5d1591fa6f9fc0169b4c4b54d00b3f2d2",
  "configSha256": "7bc73fa79087e21f5579672cdae93a210e7bd8934505bdd31dc38223793a6c16",
  "sourceSha256": "8cffd50361a081dc7a66dd93a70270b2481b738f0bc4b1d7218371b1c4528010",
  "template": {
    "path": "singularity/work-items/x-usecase/config/wfa/blobs/sha256/d91d55500e7dbc30a388633bce723623157619bca0bbc9bbaf8e64dfd85308a8",
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
    "path": "singularity/work-items/x-usecase/context/clarifications-intake-gen1.json",
    "sha256": "2f3811059ac4b674e4b5211971b3dcd7e5a9672477e9ffd54d898e217068334f",
    "promptSha256": "89a8e430391f2c783f8f121dd148d35613d2106d2bbf177e899f9cfd2209d418",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-09-17T04:42:19.484Z",
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
      "path": "singularity/work-items/x-usecase/telemetry/intake-gen1.json",
      "sha256": "30ad3c6a09acda6366b5a5ba5a8a158be5807c9b3ff2870aa535d27b0248780f",
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
      "startedAt": "2026-09-17T04:44:02.447Z",
      "completedAt": "2026-09-17T04:44:02.447Z",
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

# x-usecase — Classic delivery intake

## Request and outcome

The repository is an Angular-based Rule Engine Console that models schema-driven decision logic, rule orchestration, and validator workflows. This Story aims to complete the intake for the project by defining the expected user-facing behavior and success conditions for the console before implementation continues.

The intended outcome is a working decisioning interface where a user can inspect the data schema, author or review rules, switch between rule editing modes, view a visual flow canvas, validate logic, and inspect execution history without leaving the single application shell.

## Scope and constraints

Included behavior:
- A left-rail navigation for Schema, Rulesets, Functions, Validator, History, and Settings views.
- Dynamic top-bar state, search, and publish action behavior within the active console workspace.
- Rule-set editing states for general logic and decision-table modes.
- Visual canvas or workflow representation for decision logic orchestration.
- Validator and execution-history screens that surface output from the local rule engine state.

Excluded behavior:
- Production-grade authentication or authorization.
- Persistent backend data storage beyond the local mock or server-backed glossary fetch.
- Full deployment automation or cloud hosting configuration.
- External business rule authoring beyond the in-app rule model and mock data layer.

Constraints:
- The app is Angular 17 and runs locally with the existing scripts in `package.json`.
- The UI must remain usable in a browser without blocking on unavailable services.
- The project should continue to work with the local glossary fetch at `http://localhost:65421/api/glossary` when available, while tolerating failures gracefully.
- Rollback is straightforward because the app remains a front-end-only rule console with local mock configuration and no irreversible external system change.

## Acceptance criteria

| Clause | Observable outcome |
|---|---|
| [x-usecase:AC-001] | The application presents a consistent Rule Engine console shell with sidebar navigation, top bar, and context-aware header updates when switching between Schema, Rulesets, Functions, Validator, History, and Settings. |
| [x-usecase:AC-002] | The Rulesets area supports both General Logic and Decision Table modes and exposes designer, canvas, and configuration sub-views that respond to the active mode selection without page reloads. |
| [x-usecase:AC-003] | The user can observe feedback and status notifications from rule actions, such as a publish operation or system state change, and the validator/history views surface active execution and testing artifacts for review. |

## Planned implementation evidence

| Clause | Expected paths | Planned tests |
|---|---|---|
| `x-usecase:AC-001` | `src/app/app.component.ts`, `src/app/app.component.html` | not-applicable: no dedicated UI test file exists; validated by npm run build and a manual browser smoke check |
| `x-usecase:AC-002` | `src/app/app.component.ts`, `src/app/app.component.html`, `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/components/rule-canvas/rule-canvas.component.ts`, `src/app/components/rule-config/rule-config.component.ts` | not-applicable: no dedicated UI test file exists; validated by npm run build and a manual browser smoke check |
| `x-usecase:AC-003` | `src/app/data.ts`, `src/app/components/history-logs/history-logs.component.ts`, `src/app/components/validator/shell/shell.component.ts`, `src/app/services/rule-store.service.ts` | not-applicable: no dedicated UI test file exists; validated by npm run build and a manual browser smoke check |

## Initial evidence

The request is grounded in the repository’s Angular application structure and the existing Rule Engine UI implementation:

- `README.md` identifies the project as a Rule Engine and Angular application entry point.
- `package.json` confirms the app is an Angular 17 project using `ng build`, `ng test`, and a local server startup flow.
- `src/app/app.component.ts` defines the active navigation tabs, subviews, notification handling, and rule-engine state integration.
- `src/app/app.component.html` renders the sidebar, top nav, and multiple dashboard views for schema, rulesets, functions, validator, and history.
- `src/app/data.ts` and the component set under `src/app/components/` provide the initial decision rules, schema fields, flow nodes, and execution log fixtures used by the console.
