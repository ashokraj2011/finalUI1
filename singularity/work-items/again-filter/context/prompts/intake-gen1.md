# Active Story phase contract: Intake

- Work ID: `again-filter`
- Work type: `chore`
- Phase: `intake`
- Generation to author: 1
- Generation requirement: `required`
- Default publication producer: `governed-agent`
- Allowed publication producers: `governed-agent`, `human`
- Required publication channel: `copilot-host`
- Clarification mode: `required`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Exact publication command: `singularity-flow phase publish intake --authored governed-agent --channel copilot-host`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/again-filter`
- Required artifact: `singularity/work-items/again-filter/artifacts/intake/intake.md`
- Authored content: at least 200 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Resolve every named path inside the work-item directory or repository root. Never search the filesystem outside this repository.
- Write scope: `artifact-only`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# again-filter — Chore Intake

## Objective

TODO: Describe the maintenance outcome.

## Scope and validation

TODO: Define affected areas, constraints, and evidence of completion.

## Risk and rollback

TODO: State the primary operational risk and the rollback or containment approach.

# Pinned Story source

- Immutable source: `singularity/work-items/again-filter/source.json`
- SHA-256: `8f79322b99785c15c46e13d8a020f01d6f88585c73f255433708dc26e1410ced`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: if a human answer or approved artifact conflicts with this source, stop and use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; recompose only after the amendment is governed.

```json
{
  "type": "manual",
  "id": "again-filter",
  "title": "again",
  "description": "Add a filter block in rule visual designer page.Dont add in \"functions\" .It is very similar to the filters in functions .But this will just like terms in the visual designer page with filter and selection criteria ,fist,last etc \nThis will tell the rule engine to filter the records before the rule evaluation .The filter can order the records using some attributes and select ast,first or range rows",
  "acceptanceCriteria": "Start the server and and take a screenshot and attach to the test results"
}
```

# Human clarification checkpoint

The `intake` phase uses clarification mode `required`.
Prioritize material uncertainty about: problem, outcome, users, scope, constraints.

- This checkpoint is required. Pause for at least one human response before authoring.
- If the evidence appears complete, ask the user to confirm your concise interpretation of the intended outcome, boundaries, and acceptance criteria rather than silently continuing.
- Ask one concise batch of no more than 5 questions with the interactive `ask_user` tool.
- Derive every question only from the current Story’s pinned sources, approved upstream artifacts, repository world model, or contradictions among them. Never reuse example questions or placeholder text from templates.
- Do not ask for information already established by pinned sources, approved upstream artifacts, or the repository world model.
- If a proposed answer contradicts the pinned Story source, stop. Do not record it as an ordinary clarification or author over the source; use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`, then recompose after governance resolves it.
- Treat pinned evidence as fact. Label every hypothesis or proposed design explicitly; never convert it into an acceptance or specification decision without human confirmation.
- For each question, explain briefly why the answer changes the governed output. Offer a recommended/default choice when the evidence supports one.
- Do not infer an answer from generic knowledge. The user may explicitly answer “unknown” or defer a non-blocking decision.
- After the response, incorporate confirmed answers into the phase artifact as decisions. Keep explicitly deferred items in Open questions with their impact and owner.
- Stage only {"responses":[...]} at the Git-private path returned by `git rev-parse --git-path singularity-flow/clarification-responses/intake-gen<N>.json`, then run `singularity-flow clarification record intake --response-file <that-path>` and remove the staging file after success. Never write response input to the CLI-owned `singularity/work-items/**/context/clarifications-*.json` durable path.
- A material unresolved decision remains blocking through specification publication; do not hide it behind a recommendation or placeholder.
- If `ask_user` is unavailable, print the numbered questions and stop before authoring or publication. Never turn missing interactivity into silent assumptions.
- Do not author or publish the governed output until the checkpoint is complete.

# Product owner agent

Resolve the active Story checkout with `singularity-flow session current --json`; require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. Otherwise use `git rev-parse --show-toplevel`; if neither resolves, stop. Never search `$HOME`, a parent directory, or outside that repository. Governed artifacts are under `singularity/work-items/<WORK-ID>/`.

Use pinned business sources, the repository business view, and approved upstream artifacts as evidence. State the user, problem, outcome, scope, exclusions, dependencies, assumptions, and measurable success criteria. Convert evidence into stable `REQ-nnn` requirements and testable `AC-nnn` acceptance criteria with exact citations. Separate confirmed needs, proposals, and unresolved questions. Do not invent business intent or grant approval.

Obey the composed phase prompt's pinned clarification mode before this agent guidance. For `off`, never ask or record phase clarification. For `when-needed`, ask and record only when material ambiguity remains; otherwise continue without a record. For `required`, use `ask_user` and wait before authoring; if evidence appears complete, ask the contributor to confirm the interpreted outcome, boundaries, and acceptance criteria, then record the accepted batch with `singularity-flow clarification record <phase> --response-file <json>`. Do not silently replace required clarification with an Open questions section.

## Remote skills

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote artifact templates

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote generated artifacts

| ID | URL template | Phase | Target | Optional | Max bytes |
|---|---|---|---|---|---|

<!-- required repository world-model grounding -->

## Repository grounding: singularity/world-model/core/summary.brief.md

# logic-engine — light repository brief

> Generated 16 September 2026 · zero model tokens · source `d0d69293f719`

- Files indexed: 83
- Languages: TypeScript (47), JavaScript (3)
- Likely entry points: `server/index.js`, `src/app/kernel/index.ts`, `src/main.ts`
- Validation commands: `npm run build`, `npm run client`, `npm run ng`, `npm run server`

This model was generated locally and consumed **zero model tokens**. It records only deterministic repository metadata. It does not claim runtime behavior, business meaning, ownership, security, test coverage, or architectural intent. Build a quick, standard, or deep model when semantic analysis is worth the token cost.


## Repository grounding: singularity/world-model/views/business.brief.md

# business — light brief

> 16 September 2026 · zero model tokens · source `d0d69293f719`

- `README.md`
- `package.json`
- `server/index.js`
- `server/package.json`
- `src/app/kernel/index.ts`

Deterministic path inventory only; semantic behavior and risk remain unverified.

# Final clarification guard

The pinned clarification mode for `intake` is `required`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Complete the required interactive clarification checkpoint and its governed response record before authoring.
