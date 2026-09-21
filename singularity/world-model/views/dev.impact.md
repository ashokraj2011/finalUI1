<!--
SFlow World-Model View
source: repository-root@5e4b873cc690d7639e281818c07801cdbae02840
source-manifest-sha256: sha256:ec19afc6139a343ed8b04354a421fd764940d2332b9d45acf06d9b3e8602894b
scope-sha256: sha256:ef6e514a4d006db6aac321c12ca9cba1b61b065b81491ad2f9ffe7b91606e7f6
view: dev.impact@4
view-spec-sha256: sha256:533e81e352ca8e38a12024424901e82668735ea5a638f7d5c85e30723ca24c41
fact-ledger-sha256: sha256:528418948e8d5eef47a617bf3907dbfafd9d77abe74f85c1ab8a3a3588930fed
composer-core-sha256: sha256:fdaa70bade7e5a477faa69be261ff677b6e3ba50f1211c5e6b3398c83ecfe0bf
composition-candidate-sha256: sha256:cdbe6e2f05a3c4b8aa1f0381fad9ebda0f593d6680d2fdc308e9ab7dd8e50468
validator-sha256: sha256:c1c91733965f33d55a4f4ef8b5b862f421d8fc66351a41b1ce1aaa939bcdc2a5
-->

# Development impact {#dev.impact}

**TL;DR** src/main.ts imports the in-scope module src/app/app.config.ts. No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope. No registered deterministic producer supplied contract-change for dev.impact@4 within the pinned scope. [F:FACT-0021cde11fa95571,FACT-374ead2c5ee323d4,FACT-7d3561e3d65d4556]

## Changed structure {#dev.impact.changed-structure}

- src/main.ts imports the in-scope module src/app/app.config.ts. [F:FACT-0021cde11fa95571]
- src/app/components/validator/coverage-tab/coverage-tab.component.ts imports the in-scope module src/app/kernel/index.ts. [F:FACT-06307a3d32d89834]
- src/app/services/persistence.ts line 85 contains a lexical reference candidate to same-file declaration STORE_KEYS at line 58; semantic resolution is unavailable. [F:FACT-09ccfbd8ccb1f3aa]
- src/app/components/validator/coverage-tab/coverage-tab.component.ts imports the in-scope module src/app/services/rule-engine.service.ts. [F:FACT-13738ea3f66958a0]
- src/app/components/sidebar/sidebar.component.spec.ts lines 1-54 differ from the exact first-parent baseline; no semantic symbol boundary is inferred. [F:FACT-374f03431476d1a2]
- src/app/kernel/diff.spec.ts lines 1-60 differ from the exact first-parent baseline; no semantic symbol boundary is inferred. [F:FACT-b854cc875ce9b931]

## Dependency impact {#dev.impact.dependency-impact}

- src/app/kernel/coverage.ts line 98 contains a lexical reference candidate to same-file declaration CoverageGap at line 92; semantic resolution is unavailable. [F:FACT-02046b3d3ac6b6a4]
- src/app/kernel/lint.ts imports the in-scope module src/app/kernel/schema.ts. [F:FACT-075080499ea4c0f6]
- src/app/components/validator/overview-tab/overview-tab.component.ts line 176 contains a lexical reference candidate to same-file declaration RuleHealth at line 9; semantic resolution is unavailable. [F:FACT-0acda99e8f0853b0]
- src/app/kernel/schema.ts line 47 contains a lexical reference candidate to same-file declaration NamespaceDef at line 19; semantic resolution is unavailable. [F:FACT-1544a000a377fbff]
- src/app/services/rule-engine.service.spec.ts lines 1-130 differ from the exact first-parent baseline; no semantic symbol boundary is inferred. [F:FACT-4fad48b9450681c8]
- src/app/services/rule-store.service.spec.ts lines 1-169 differ from the exact first-parent baseline; no semantic symbol boundary is inferred. [F:FACT-d405bac277b2c89a]

## Affected contracts {#dev.impact.affected-contracts}

- src/app/kernel/schema.ts line 23 contains a lexical reference candidate to same-file declaration AttrType at line 8; semantic resolution is unavailable. [F:FACT-03a1e06ef1d170e6]
- src/app/components/sidebar/sidebar.component.spec.ts imports the in-scope module src/app/components/sidebar/sidebar.component.ts. [F:FACT-081b7b3d10a656d7]
- src/app/kernel/coverage.ts line 39 contains a lexical reference candidate to same-file declaration CoverageReport at line 25; semantic resolution is unavailable. [F:FACT-0d20de3e680257db]
- src/app/services/persistence.ts line 81 contains a lexical reference candidate to same-file declaration STORE_KEYS at line 58; semantic resolution is unavailable. [F:FACT-16219d5c4fe78c94]
- src/app/services/mock-db.service.spec.ts lines 1-101 differ from the exact first-parent baseline; no semantic symbol boundary is inferred. [F:FACT-9998337de7d06a65]

## Test impact {#dev.impact.test-impact}

- src/app/components/validator/coverage-tab/coverage-tab.component.ts imports the in-scope module src/app/models/types.ts. [F:FACT-03c394edadfc610b]
- src/app/components/rule-sets/rule-sets.component.ts imports the in-scope module src/app/types.ts. [F:FACT-098bbc001ec72044]
- src/app/kernel/evaluate.ts line 115 contains a lexical reference candidate to same-file declaration EvalResult at line 28; semantic resolution is unavailable. [F:FACT-11bc3d304e21ef69]
- src/app/services/rule-store.service.ts imports the in-scope module src/app/validator-data/sample-rules.ts. [F:FACT-16cbf1b6f182137c]
- src/app/services/persistence.spec.ts lines 1-77 differ from the exact first-parent baseline; no semantic symbol boundary is inferred. [F:FACT-b5fa9ca45a8da886]

## Unavailable analysis {#dev.impact.unavailable-analysis}

- No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope. [F:FACT-374ead2c5ee323d4]
- No registered deterministic producer supplied contract-change for dev.impact@4 within the pinned scope. [F:FACT-7d3561e3d65d4556]

## Facts {#dev.impact.facts}

```json
{
  "fact_ledger_sha256": "sha256:528418948e8d5eef47a617bf3907dbfafd9d77abe74f85c1ab8a3a3588930fed",
  "facts": [
    {
      "assurance": "structurally-derived",
      "claim": "src/main.ts imports the in-scope module src/app/app.config.ts.",
      "claimSha256": "sha256:e30413b73fef673ed5b7ce218c45a2b7a971145a868605e63a662843c439cd33",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-522771c415c5bb29"
      ],
      "factSha256": "sha256:92aebf2201c4b8a96b1de60f475af881be32b4e7415fe48277304473d09b515d",
      "factType": "dependency-edge",
      "id": "FACT-0021cde11fa95571",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/main.ts->src/app/app.config.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/kernel/coverage.ts line 98 contains a lexical reference candidate to same-file declaration CoverageGap at line 92; semantic resolution is unavailable.",
      "claimSha256": "sha256:e46b470f7633655195a308c2fd3d17b1f59a660e60a3572d9c778cde6879a0ff",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-3735c732a18100d9"
      ],
      "factSha256": "sha256:6801c6f85f5be4372239290fd20fee818cba73fd168e56df9ff4cbd306f8ef3f",
      "factType": "dependency-edge",
      "id": "FACT-02046b3d3ac6b6a4",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/kernel/coverage.ts:98->src/app/kernel/coverage.ts#CoverageGap",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/kernel/schema.ts line 23 contains a lexical reference candidate to same-file declaration AttrType at line 8; semantic resolution is unavailable.",
      "claimSha256": "sha256:2c02a2330e72daa7468d823f9339c34864f8f47cec424bf0df8c2c0b5bf7884b",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-ff06ce2d130b86e6"
      ],
      "factSha256": "sha256:bf67ca58944f9766b4720f0cdc8b89f7c987c5899e7d07725d57bfe60630476d",
      "factType": "dependency-edge",
      "id": "FACT-03a1e06ef1d170e6",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/kernel/schema.ts:23->src/app/kernel/schema.ts#AttrType",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/components/validator/coverage-tab/coverage-tab.component.ts imports the in-scope module src/app/models/types.ts.",
      "claimSha256": "sha256:6455b2cc64f02cbb73aa61ce7f4c2dac445aecfc9cae867ad19b2ba7be902751",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-13c45214b37a82d1"
      ],
      "factSha256": "sha256:57b286726ceb2bd284d8f6132f9c9ec19b931a0f8b48842339e96e7f054a6abd",
      "factType": "dependency-edge",
      "id": "FACT-03c394edadfc610b",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/validator/coverage-tab/coverage-tab.component.ts->src/app/models/types.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/components/validator/coverage-tab/coverage-tab.component.ts imports the in-scope module src/app/kernel/index.ts.",
      "claimSha256": "sha256:ead000c60c472463d4aeaaeaf32cf05c4d9171f79bc855a152994baa13264a3e",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-d0e56088ca7c573d"
      ],
      "factSha256": "sha256:9291d73ad8814b2cc2173e837af152e90b7ae654f19b2fbcf9e2819956807f9a",
      "factType": "dependency-edge",
      "id": "FACT-06307a3d32d89834",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/validator/coverage-tab/coverage-tab.component.ts->src/app/kernel/index.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/kernel/lint.ts imports the in-scope module src/app/kernel/schema.ts.",
      "claimSha256": "sha256:15f2b0b7bb17827e5a72d009e7e14d9e886578f7ed98048dd5db218b3be854c4",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-bd5ef19efcb43191"
      ],
      "factSha256": "sha256:4da450e63bad148e867b0e3de12b0c9b6f4cb1b3aed26c951a7cad8c26833670",
      "factType": "dependency-edge",
      "id": "FACT-075080499ea4c0f6",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/kernel/lint.ts->src/app/kernel/schema.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/components/sidebar/sidebar.component.spec.ts imports the in-scope module src/app/components/sidebar/sidebar.component.ts.",
      "claimSha256": "sha256:b72115509180fca90f86e03694c2c29b6d75a0dce58de648885ac35b7f63d5e5",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-c17fe93b5c767d18"
      ],
      "factSha256": "sha256:9a7d51d0a08e91c1fde001242a2de61cf84c519dc5d10e3f7bdd2a009cae156a",
      "factType": "dependency-edge",
      "id": "FACT-081b7b3d10a656d7",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/sidebar/sidebar.component.spec.ts->src/app/components/sidebar/sidebar.component.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/components/rule-sets/rule-sets.component.ts imports the in-scope module src/app/types.ts.",
      "claimSha256": "sha256:691bdb720c77b53c0d1c908c27b8f62e4dd64786d1c849a08d7fd5464a637438",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-7695992c22b5c9e9"
      ],
      "factSha256": "sha256:c9b2d80f0ba9e3fa86d63c9171494979c84e927bdaac163df804c25e33bf1e8e",
      "factType": "dependency-edge",
      "id": "FACT-098bbc001ec72044",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/rule-sets/rule-sets.component.ts->src/app/types.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/services/persistence.ts line 85 contains a lexical reference candidate to same-file declaration STORE_KEYS at line 58; semantic resolution is unavailable.",
      "claimSha256": "sha256:c2892ede9cfec9bf9819f2d51a07a26341cd711b360527beb0af81c4b1cbb82f",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-df9297d0144e1662"
      ],
      "factSha256": "sha256:c5779ca9303d15876305cae5a6c69d01a401113fefafb87058d8668090e25aae",
      "factType": "dependency-edge",
      "id": "FACT-09ccfbd8ccb1f3aa",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/services/persistence.ts:85->src/app/services/persistence.ts#STORE_KEYS",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/components/validator/overview-tab/overview-tab.component.ts line 176 contains a lexical reference candidate to same-file declaration RuleHealth at line 9; semantic resolution is unavailable.",
      "claimSha256": "sha256:42361cf403b54cbe8cd4e733f38c5531a1f724929b96a1e0387c767b6f3b863d",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-3436641a9b2464f8"
      ],
      "factSha256": "sha256:3c200b7b44fa97d1a297a553136e49b5a284519f4adbb1b8585e587ad222ed26",
      "factType": "dependency-edge",
      "id": "FACT-0acda99e8f0853b0",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/components/validator/overview-tab/overview-tab.component.ts:176->src/app/components/validator/overview-tab/overview-tab.component.ts#RuleHealth",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/kernel/coverage.ts line 39 contains a lexical reference candidate to same-file declaration CoverageReport at line 25; semantic resolution is unavailable.",
      "claimSha256": "sha256:2997e397fb0a9025c1ff5c81cc1f0b6eb3a42d4cb31fce70c80dff9d67615b39",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-1ac4249e2790465a"
      ],
      "factSha256": "sha256:2445db51398b9cbbf2b4e1537763bcd6b5c7dbe65ead3bdc7690aa20aff98817",
      "factType": "dependency-edge",
      "id": "FACT-0d20de3e680257db",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/kernel/coverage.ts:39->src/app/kernel/coverage.ts#CoverageReport",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/kernel/evaluate.ts line 115 contains a lexical reference candidate to same-file declaration EvalResult at line 28; semantic resolution is unavailable.",
      "claimSha256": "sha256:7e93ece83f521d111994dbb9edf66dd201b71387feff55fe6f078f19f4528306",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-7fc3c1df1fb26d5e"
      ],
      "factSha256": "sha256:2038e11e1b4276cb9ef0f5945c2f13c4a44cb76d1758f2e6cb8d9907854adde1",
      "factType": "dependency-edge",
      "id": "FACT-11bc3d304e21ef69",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/kernel/evaluate.ts:115->src/app/kernel/evaluate.ts#EvalResult",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/components/validator/coverage-tab/coverage-tab.component.ts imports the in-scope module src/app/services/rule-engine.service.ts.",
      "claimSha256": "sha256:8bb7fb5489e0a6a35877d59d5b281fa427af448086c99c602615b7b54a5f420c",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-dbc2bc1b64954c2e"
      ],
      "factSha256": "sha256:92b8065938ca591a54e1b2bb740fc49781eaced2d077a2d91024c75bf88c40dc",
      "factType": "dependency-edge",
      "id": "FACT-13738ea3f66958a0",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/validator/coverage-tab/coverage-tab.component.ts->src/app/services/rule-engine.service.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/kernel/schema.ts line 47 contains a lexical reference candidate to same-file declaration NamespaceDef at line 19; semantic resolution is unavailable.",
      "claimSha256": "sha256:d6be7c8d9f2fd00940cc76d9f042d66303f0865223e87f1598d88cbe501c758b",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-2d8a93f6adffa199"
      ],
      "factSha256": "sha256:f1a2776443f655f9aad1f3f41cf24f7a1086d9cefac1ef195f849b64b7c3f2b0",
      "factType": "dependency-edge",
      "id": "FACT-1544a000a377fbff",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/kernel/schema.ts:47->src/app/kernel/schema.ts#NamespaceDef",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/services/persistence.ts line 81 contains a lexical reference candidate to same-file declaration STORE_KEYS at line 58; semantic resolution is unavailable.",
      "claimSha256": "sha256:99dbc9317e99a893fd6710effaef81e74fd83af0a99b877656249d17297ed287",
      "conflictsWith": [],
      "derivationId": "DRV-2d5405698f57988e",
      "evidenceIds": [
        "EV-72517728011e77ca"
      ],
      "factSha256": "sha256:d7336b2f5cba8f37db715e19b4aa13d86b73537a9f548ca42df848500f61e8de",
      "factType": "dependency-edge",
      "id": "FACT-16219d5c4fe78c94",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/services/persistence.ts:81->src/app/services/persistence.ts#STORE_KEYS",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/services/rule-store.service.ts imports the in-scope module src/app/validator-data/sample-rules.ts.",
      "claimSha256": "sha256:bdf3785b7fa0e89c9a61776f107a3ff880e97587edec69a28eb98c49b757eb2d",
      "conflictsWith": [],
      "derivationId": "DRV-a76797cf94cfd752",
      "evidenceIds": [
        "EV-a463571a3147afa7"
      ],
      "factSha256": "sha256:a363f228dd82379ec0ef00408d8e750f9f2faa0f483904cf2e0f545f7ac646bc",
      "factType": "dependency-edge",
      "id": "FACT-16cbf1b6f182137c",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/services/rule-store.service.ts->src/app/validator-data/sample-rules.ts",
        "kind": "dependency-edge"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-c85b36c7d8d7827a",
      "evidenceIds": [],
      "factSha256": "sha256:13d2142f88462e5c655bd113f95cf1e42a3c9520a9f96216c7eac2402178d930",
      "factType": "runtime-frequency",
      "id": "FACT-374ead2c5ee323d4",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_RUNTIME_EVIDENCE",
        "detail": "No registered deterministic producer supplied runtime-frequency for dev.impact@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "dev.impact@4:runtime-frequency",
        "kind": "analysis"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "src/app/components/sidebar/sidebar.component.spec.ts lines 1-54 differ from the exact first-parent baseline; no semantic symbol boundary is inferred.",
      "claimSha256": "sha256:a35992f1994b9c5949198f5caa6cf3713cce1d6aa1038633ddb86e2e2def73bb",
      "conflictsWith": [],
      "derivationId": "DRV-b4d1a3e6a1eff7ed",
      "evidenceIds": [
        "EV-b946816f59bc4c1c"
      ],
      "factSha256": "sha256:3e768b2a4006d7560473016a2705344edf0101de50b0ddd268dcc99f3e9e76ad",
      "factType": "changed-symbol",
      "id": "FACT-374f03431476d1a2",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/components/sidebar/sidebar.component.spec.ts#change:1-54",
        "kind": "symbol"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "src/app/services/rule-engine.service.spec.ts lines 1-130 differ from the exact first-parent baseline; no semantic symbol boundary is inferred.",
      "claimSha256": "sha256:0dbb99d02618aabdc697883c8c56e1a20d23f1bcdab5092a56e55ca0bcfa4065",
      "conflictsWith": [],
      "derivationId": "DRV-b4d1a3e6a1eff7ed",
      "evidenceIds": [
        "EV-003d7a0ef8df5c94"
      ],
      "factSha256": "sha256:ccfb754134391369357a434a68cf5e1966584fc991f48a697c17f69a433e19ba",
      "factType": "changed-symbol",
      "id": "FACT-4fad48b9450681c8",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/services/rule-engine.service.spec.ts#change:1-130",
        "kind": "symbol"
      }
    },
    {
      "assurance": "not-applicable",
      "claim": null,
      "claimSha256": "sha256:38e0b9de817f645c4bec37c0d4a3e58baecccb040f5718dc069a72c7385a0bed",
      "conflictsWith": [],
      "derivationId": "DRV-c85b36c7d8d7827a",
      "evidenceIds": [],
      "factSha256": "sha256:b9e289986e5653700b2ba47fc39d1c2263c3856616620dc6b4be4cb2db5dec79",
      "factType": "contract-change",
      "id": "FACT-7d3561e3d65d4556",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied contract-change for dev.impact@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "dev.impact@4:contract-change",
        "kind": "analysis"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "src/app/services/mock-db.service.spec.ts lines 1-101 differ from the exact first-parent baseline; no semantic symbol boundary is inferred.",
      "claimSha256": "sha256:0dd4ff8ff290006385f5c3eaf41443cb1b52f1450f72d260507342c7ce868488",
      "conflictsWith": [],
      "derivationId": "DRV-b4d1a3e6a1eff7ed",
      "evidenceIds": [
        "EV-af5b84d1b43686f2"
      ],
      "factSha256": "sha256:7d7a7d6e47b2e7e48b941c428a2dbcfe5c6d5880c457402ca40697692a32173a",
      "factType": "changed-symbol",
      "id": "FACT-9998337de7d06a65",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/services/mock-db.service.spec.ts#change:1-101",
        "kind": "symbol"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "src/app/services/persistence.spec.ts lines 1-77 differ from the exact first-parent baseline; no semantic symbol boundary is inferred.",
      "claimSha256": "sha256:9a0334020b4308c75f5ad87ddd9011aa452d1929b8364eb11d0c6ee44a46945d",
      "conflictsWith": [],
      "derivationId": "DRV-b4d1a3e6a1eff7ed",
      "evidenceIds": [
        "EV-5745f06a51e62d86"
      ],
      "factSha256": "sha256:fb631802d90f554716d4516156c53baa8b1faaf6ae81cac0550ee5de77468c85",
      "factType": "changed-symbol",
      "id": "FACT-b5fa9ca45a8da886",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/services/persistence.spec.ts#change:1-77",
        "kind": "symbol"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "src/app/kernel/diff.spec.ts lines 1-60 differ from the exact first-parent baseline; no semantic symbol boundary is inferred.",
      "claimSha256": "sha256:96039992a3b292c21e8001246fc9f973b6c42e775bfcf86f905b24e6b54012d8",
      "conflictsWith": [],
      "derivationId": "DRV-b4d1a3e6a1eff7ed",
      "evidenceIds": [
        "EV-d58ed299e7b89b06"
      ],
      "factSha256": "sha256:aa9902706a1594db346ffaeea97e96075531e8b38e63899975e2b4bc4ae9d2f7",
      "factType": "changed-symbol",
      "id": "FACT-b854cc875ce9b931",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/kernel/diff.spec.ts#change:1-60",
        "kind": "symbol"
      }
    },
    {
      "assurance": "source-exact",
      "claim": "src/app/services/rule-store.service.spec.ts lines 1-169 differ from the exact first-parent baseline; no semantic symbol boundary is inferred.",
      "claimSha256": "sha256:ec75a75d3e9742e68d4d1a277bdf8b65af884cf30bb9493c785cbddfe316ad02",
      "conflictsWith": [],
      "derivationId": "DRV-b4d1a3e6a1eff7ed",
      "evidenceIds": [
        "EV-ac4fd3d53f4a6328"
      ],
      "factSha256": "sha256:d959d09d4fbe599cf9d2fe374d59a3ee06607d60c38fce3cc44f826805526a70",
      "factType": "changed-symbol",
      "id": "FACT-d405bac277b2c89a",
      "scopeStatus": "inside",
      "status": "partial",
      "subject": {
        "id": "src/app/services/rule-store.service.spec.ts#change:1-169",
        "kind": "symbol"
      }
    }
  ],
  "schema_version": 1,
  "scope_sha256": "sha256:ef6e514a4d006db6aac321c12ca9cba1b61b065b81491ad2f9ffe7b91606e7f6",
  "view": "dev.impact",
  "view_spec_sha256": "sha256:533e81e352ca8e38a12024424901e82668735ea5a638f7d5c85e30723ca24c41",
  "view_version": 4
}
```
---
generated-at: 2026-09-21T03:33:54.186Z
source-commit: 5e4b873cc690d7639e281818c07801cdbae02840
view-sha256: sha256:82e6caec6b9a808e763dfc823179052f507747e89cc9d133890a80bef876a9d9
prompt-sha256: sha256:827cbf77b3525d5061293553cf9f1a07b3270661d891f04af0d5381b3f7c3d1c
execution-unit: deterministic-renderer@1
model: unavailable
assurance: validated-derived-view
---
