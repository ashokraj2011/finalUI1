# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `spec-filter`
- Producer: `planning` generation 1
- Consumer: `convergence`
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
