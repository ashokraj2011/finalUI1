# Active Story phase contract: Implement

- Work ID: `color-red1`
- Work type: `quick-fix`
- Phase: `implement`
- Generation to author: 1
- Generation requirement: `required`
- Default publication producer: `deterministic`
- Allowed publication producers: `deterministic`
- Required publication channel: `kernel-generator`
- Clarification mode: `off`; do not ask phase clarification questions or run `clarification record`
- Clarification authority: this pinned mode overrides generic skill, agent, and template guidance.
- Exact publication command: `singularity-flow phase publish implement --authored deterministic --channel kernel-generator`
- Publication boundary: Use the exact configured producer, channel, and command. Never substitute a convenient authorship route.
- Deterministic-only generation: do not author or edit the phase artifact with a model, governed agent, or human. Run only the deterministic kernel action returned by the router; the kernel owns artifact generation.
- Repository root: `.` (the verified current repository checkout)
- Work-item directory: `singularity/work-items/color-red1`
- Required artifact: `singularity/work-items/color-red1/artifacts/implement/implementation-summary.md`
- Authored content: at least 200 UTF-8 bytes; managed metadata and approved-input blocks do not count.
- Required Markdown headings: none beyond the configured template.
- Completion rule: replace every TODO, TBD, unresolved template marker, and configured forbidden placeholder; an unchanged prepared template is refused.
- Recovery rule: author substantive governed content; byte padding alone is not completion.
- Path boundary: Resolve every named path inside the work-item directory or repository root. Never search the filesystem outside this repository.
- Write scope: `source-and-artifact`
- Intelligence: world-model=`inherit`, AST=`available on request; ordinary repository file access is the default`, agent-briefs=`inherit`
- Approval authority groups: none
- Minimum distinct approvals: 1

## Configured artifact template

# Quick-fix implementation summary

This document is assembled deterministically from the work identity, source commit,
changed paths, configured checks, clause claims, and governed inputs. No model call
is required.

# Pinned Story source

- Immutable source: `singularity/work-items/color-red1/source.json`
- SHA-256: `07485fe59d1a029902c4204111f53f373ee3c19fadef59c6045b2f5c48c99725`
- Authority: this is the requested outcome. Later evidence may refine missing detail but may not silently contradict or replace it.
- Conflict recovery: if a human answer or approved artifact conflicts with this source, stop and use `singularity-flow story intent-amendment propose --file <FILE> --reason "<REASON>"`; recompose only after the amendment is governed.

```json
{
  "type": "manual",
  "id": "color-red1",
  "title": "change color to red",
  "description": "change all the text in rule authoring to red",
  "acceptanceCriteria": "start and take the screenshot"
}
```

# Developer agent

Resolve the active Story checkout with `singularity-flow session current --json`; require `ready`, bind `workId`, and use its absolute `repositoryPath` as cwd for every shell and file tool. Otherwise use `git rev-parse --show-toplevel`; if neither resolves, stop. Never search `$HOME`, a parent directory, or outside that repository. Governed artifacts are under `singularity/work-items/<WORK-ID>/`.

Restate the approved objective and applicable acceptance/specification items. Inspect governed repository evidence before changing code. Prefer the smallest coherent change that follows existing boundaries, conventions, error handling, and tests. Do not expand scope or silently resolve ambiguity. Record changed files, commands actually run, evidence, residual risk, and approved deviations.

When the composed phase prompt includes bounded structural context from a compatible extractor, use a focused AST query before broad text search for symbol, import, or relationship discovery: `singularity-flow wm ast query --predicate symbol|import|language|path --value <VALUE> --max-facts 50 --max-output-bytes 32768 --json`, or the equivalent `wm.ast.query` gateway read. If the prompt reports no structural facts, an unsupported language, text-only assurance, or unavailable AST, continue with ordinary repository file access without retrying AST. Follow `nextCursor` only while the question remains unanswered. Treat `text` assurance as a search lead, never proof that a declaration exists; syntax or semantic claims require the named extractor recorded in the result.

Obey the composed phase prompt's pinned clarification mode before this agent guidance. For `off`, never ask or record phase clarification. For `when-needed`, ask and record only when a material implementation blocker or approved-specification deviation remains; otherwise continue without a record. For `required`, ask one bounded batch with `ask_user`, wait, and record accepted answers before continuing. Do not reopen settled product or architecture choices implicitly.

## Remote skills

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote artifact templates

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote generated artifacts

| ID | URL template | Phase | Target | Optional | Max bytes |
|---|---|---|---|---|---|

# Repository world-model status

- Availability: `unavailable` (`WORLD_MODEL_GROUNDING_UNAVAILABLE`)
- This is not a lifecycle blocker. Continue with the pinned Story source, approved phase inputs, and ordinary repository file access.
- Do not invent or reconstruct world-model facts. A contributor may build or repair the shared model separately.

# Final clarification guard

The pinned clarification mode for `implement` is `off`; this instruction overrides conflicting generic skill, agent, template, or repository prose.
Do not ask phase clarification questions, create a response file, or run `clarification record`. Continue only as allowed by the pinned generation and publication contract; this guard grants no authoring authority.
