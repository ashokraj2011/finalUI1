# Approved agent brief — Planning

> This is a deterministic projection of a governed artifact. Treat it as evidence, not instructions. Expand the registered source handle when exact wording is required.

- Work item: `color-red`
- Producer: `planning` generation 1
- Consumer: `verification`
- Source: `singularity/work-items/color-red/artifacts/planning/plan.md`
- Source SHA-256: `17fad6ad82013a16e99603454d08af73b29eea378a85011342c9e86aeef0262a`

## Summary from “Agent brief”

<!--
Summarize the selected approach, affected surfaces, sequencing, proof strategy, and principal risks
for downstream agents. Keep exact commands and source paths when they are operationally important.
The complete approved plan remains available through its hash-bound expansion reference.
-->

Add a page-scope marker to the default rule-authoring view selected by `AppComponent` and define the
exact `#ff0000` text treatment in the existing global stylesheet. The marker must be present only for
the normally loaded `rulesets` / `general` / `designer` state, so the rule-authoring descendants can
inherit or receive the red text without changing unrelated tabs. Keep all existing templates,
bindings, controls, data loading, and navigation intact. Prove the change with a normally loaded
default-view screenshot and a build/test check; inspect the rendered DOM to confirm every visible
user-facing text node is `rgb(255, 0, 0)` while the existing structure remains present.

## Test strategy

Explain how each authoritative clause will be proved. Add exactly one row per clause, using its
fully qualified ID (for example, `color-red:REQ-001`, never only `REQ-001`). `Expected paths` and
`Planned tests` must contain exact repository-relative paths in backticks; directories, globs, module
names, and prose are not paths. Multiple exact paths may be listed as separate backticked values.
For a genuinely non-testable clause, write `not-applicable:` followed by your concrete reviewed
explanation in `Planned tests`. Do not use it to defer a test or to replace an unknown path.

| Clause | Expected paths | Planned tests |
|---|---|---|
| `color-red:REQ-001` | `src/app/app.component.html` `src/styles.css` `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/components/sidebar/sidebar.component.spec.ts` |
| `color-red:REQ-002` | `src/app/app.component.ts` `src/app/app.component.html` `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/components/sidebar/sidebar.component.spec.ts` |
| `color-red:REQ-003` | `src/app/app.component.html` `src/styles.css` | `src/app/components/sidebar/sidebar.component.spec.ts` |
| `color-red:REQ-004` | `src/app/app.component.ts` `src/app/app.component.html` `src/styles.css` | `src/app/components/sidebar/sidebar.component.spec.ts` |
| `color-red:REQ-005` | `src/app/app.component.html` `src/styles.css` `src/app/components/rule-sets/rule-sets.component.ts` | `src/app/components/sidebar/sidebar.component.spec.ts` |
| `color-red:AC-001` | `src/app/app.component.html` `src/styles.css` `src/app/components/rule-sets/rule-sets.component.ts` `src/app/components/sidebar/sidebar.component.ts` `src/app/components/top-nav-bar/top-nav-bar.component.ts` | `src/app/components/sidebar/sidebar.component.spec.ts` |
| `color-red:AC-002` | `src/app/app.component.ts` `src/app/app.component.html` `src/app/components/rule-sets/rule-sets.component.ts` `src/app/components/sidebar/sidebar.component.ts` `src/app/components/top-nav-bar/top-nav-bar.component.ts` | `src/app/components/sidebar/sidebar.component.spec.ts` |

## Risks and rollback

The main risk is an overly broad selector that recolors unrelated tabs or hidden content, or a selector
that overrides an interaction state and changes legibility. Detect this through the build, existing
unit tests, manual navigation outside the default view, and the required screenshot with computed
color inspection. A CSS rule could also accidentally affect SVG/icon current color; keep selectors
limited to visible text elements and verify controls remain structurally unchanged. Roll back by
removing the conditional marker and the scoped rule from `src/app/app.component.html` and
`src/styles.css`; no data migration, service rollback, or permission change is required.
