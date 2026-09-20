# logic-engine — deterministic light world model

> Generated 20 September 2026 (2026-09-20T00:40:34.832Z) · source `162f755566af3231995b2decd4bb699964fc27d7` · branch `y-story`

## Repository shape

- Files indexed: 84
- Source-like files: 51
- Test-like files: 9
- Build manifests: 2
- Deployment/operations files: 0
- Languages: TypeScript (48), JavaScript (3)
- Top-level areas: src (63), (root) (14), server (4), .vscode (3)

## Facts {#core.facts}

<!-- singularity-flow:repository-facts:start -->
```yaml
# Derived from the repository, not inferred. Every path and line is checkable.
files: 84
languages_scanned: 51
frameworks: [Angular, Express, Tailwind CSS, TypeScript]
entrypoints:
  - { path: server/index.js, declared: main, at: "server/package.json:5" }
commands:
  - { run: "npm run ng", at: "package.json:5" }
  - { run: "npm run client", at: "package.json:6" }
  - { run: "npm run server", at: "package.json:7" }
  - { run: "npm run start", at: "package.json:8" }
  - { run: "npm run build", at: "package.json:9" }
  - { run: "npm run watch", at: "package.json:10" }
  - { run: "npm run test", at: "package.json:11" }
  - { run: "npm run start", at: "server/package.json:7" }
# What the rest of the repository depends on. A count, not an impression.
most_depended_on:
  - { path: src/app/models/types.ts, imported_by: 16 }
  - { path: src/app/services/rule-store.service.ts, imported_by: 12 }
  - { path: src/app/services/rule-engine.service.ts, imported_by: 11 }
  - { path: src/app/types.ts, imported_by: 9 }
  - { path: src/app/kernel/ast.ts, imported_by: 7 }
  - { path: src/app/kernel/schema.ts, imported_by: 7 }
  - { path: src/app/kernel/index.ts, imported_by: 6 }
  - { path: src/app/kernel/evaluate.ts, imported_by: 5 }
# Commits touching each file in the last year, from Git history.
most_changed:
  - { path: src/app/components/rule-canvas/rule-canvas.component.ts, commits: 2 }
  - { path: .browserslistrc, commits: 1 }
  - { path: .editorconfig, commits: 1 }
  - { path: .env.example, commits: 1 }
  - { path: .gitignore, commits: 1 }
  - { path: .npmrc, commits: 1 }
  - { path: .postcssrc.json, commits: 1 }
  - { path: .vscode/extensions.json, commits: 1 }
# 66 exported top-level declarations; the most-depended-on files' are listed.
key_symbols:
  - { name: isComparisonTerm, kind: function, at: "src/app/kernel/ast.ts:52" }
  - { name: isLogicalTerm, kind: function, at: "src/app/kernel/ast.ts:56" }
  - { name: isRuleRefTerm, kind: function, at: "src/app/kernel/ast.ts:60" }
  - { name: NULLARY_OPERATORS, kind: binding, at: "src/app/kernel/ast.ts:65" }
  - { name: ORDERING_OPERATORS, kind: binding, at: "src/app/kernel/ast.ts:71" }
  - { name: SET_OPERATORS, kind: binding, at: "src/app/kernel/ast.ts:79" }
  - { name: MEMBERSHIP_OPERATORS, kind: binding, at: "src/app/kernel/ast.ts:82" }
  - { name: OPERATOR_DISPLAY, kind: binding, at: "src/app/kernel/ast.ts:87" }
  - { name: operatorDisplay, kind: function, at: "src/app/kernel/ast.ts:102" }
  - { name: comparisonLabel, kind: function, at: "src/app/kernel/ast.ts:107" }
  - { name: typeLabel, kind: function, at: "src/app/kernel/schema.ts:33" }
  - { name: SchemaRegistry, kind: class, at: "src/app/kernel/schema.ts:44" }
  - { name: SAMPLE_SCHEMA, kind: binding, at: "src/app/kernel/schema.ts:89" }
  - { name: RuleEngineService, kind: class, at: "src/app/services/rule-engine.service.ts:35" }
  - { name: RuleStoreService, kind: class, at: "src/app/services/rule-store.service.ts:37" }
tests: 9
```
<!-- singularity-flow:repository-facts:end -->

## Likely entry points

- `package.json`
- `server/index.js`
- `server/package.json`
- `src/app/kernel/index.ts`
- `src/main.ts`

## Observed commands

- `npm run build`
- `npm run client`
- `npm run ng`
- `npm run server`
- `npm run start`
- `npm run test`
- `npm run watch`

## Grounding boundary

This model was generated locally without Copilot or another AI model and consumed **zero model tokens**. It intentionally records only deterministic repository metadata. It does not claim runtime behavior, business meaning, ownership, security, test coverage, or architectural intent. Deeper phases can replace it with a quick, standard, or deep model when semantic analysis is worth the token cost.
