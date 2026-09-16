# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `ashok-filter`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/ashok-filter/artifacts/planning/plan.md`
- Source SHA-256: `88d6148a207643ef48915d50dba6aa6aa5142f07c9572b09935c07c768acec97`

## Summary from “Agent brief”

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add the filter block to the rule-authoring surface and keep its state in the existing Angular
component/service boundary. The UI will expose searchable attributes, capability-supported
operators, ordering, and an optional limit before invoking evaluation. The implementation will
preserve the filter configuration as structured state, reject or surface failed filter/evaluation
operations as failure states, and prove the behavior with focused unit and component tests. This
serves `ashok-filter:REQ-001` through `ashok-filter:REQ-007` and the screenshot/testing evidence
required by `ashok-filter:AC-001` through `ashok-filter:AC-005`.

## Test strategy

Each requirement is proved by a focused unit or component test. Acceptance criteria are carried
through the same tests and the recorded screenshot scenario; exact implementation paths are
reconciled after coding.

| Clause | Expected paths | Planned tests |
|---|---|---|
| `ashok-filter:REQ-001` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/components/rule-sets/rule-sets.component.html` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:REQ-002` | `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:REQ-003` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:REQ-004` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:REQ-005` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/kernel/kernel.spec.ts` | `src/app/kernel/kernel.spec.ts` |
| `ashok-filter:REQ-006` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/kernel/kernel.spec.ts` | `src/app/kernel/kernel.spec.ts` |
| `ashok-filter:REQ-007` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:AC-001` | `src/app/components/rule-sets/rule-sets.component.html` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:AC-002` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:AC-003` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/kernel/kernel.spec.ts` | `src/app/kernel/kernel.spec.ts` |
| `ashok-filter:AC-004` | `src/app/components/rule-sets/rule-sets.component.ts`, `src/app/services/rule-engine.service.ts` | `src/app/services/rule-engine.service.spec.ts` |
| `ashok-filter:AC-005` | `src/app/components/rule-sets/rule-sets.component.html` | `src/app/services/rule-engine.service.spec.ts` |

## Risks and rollback

The main risks are a UI/operator list diverging from the entity capability, sending incomplete
configuration into evaluation, applying ordering or limit after evaluation, and treating an error
as a successful empty result. Detect these with capability-driven tests, configuration handoff
assertions, ordering/limit tests, and explicit failure-state assertions. Roll back by reverting the
filter component/template and the narrow service/kernel contract changes; existing rule evaluation
must remain usable when no filter is configured. Record the final screenshot viewport and scenario
set required by `ashok-filter:AC-005` before approval.
