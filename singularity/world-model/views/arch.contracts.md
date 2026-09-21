<!--
SFlow World-Model View
source: repository-root@5e4b873cc690d7639e281818c07801cdbae02840
source-manifest-sha256: sha256:ec19afc6139a343ed8b04354a421fd764940d2332b9d45acf06d9b3e8602894b
scope-sha256: sha256:ef6e514a4d006db6aac321c12ca9cba1b61b065b81491ad2f9ffe7b91606e7f6
view: arch.contracts@4
view-spec-sha256: sha256:13ff5bb50461e3b7a40d8e34e1785fd29ebd36b5134a59c7630fa5304d2997b0
fact-ledger-sha256: sha256:f73b505816a517f572be24008c3c8a7e558b47f23251ca4df7602e5fe3c71413
composer-core-sha256: sha256:fdaa70bade7e5a477faa69be261ff677b6e3ba50f1211c5e6b3398c83ecfe0bf
composition-candidate-sha256: sha256:3bf9582f07fb0636c044ad84374799400bfb4a1042ff0be03790462c820cc6d7
validator-sha256: sha256:c1c91733965f33d55a4f4ef8b5b862f421d8fc66351a41b1ce1aaa939bcdc2a5
-->

# Architecture contracts {#arch.contracts}

**TL;DR** EvaluationNode is explicitly declared as an interface contract in src/app/models/types.ts at line 203. No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope. No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. [F:FACT-000421a536ab9c76,FACT-36fc31480546b14a,FACT-f8df5ea05118e316]

## Public contracts {#arch.contracts.public-contracts}

- EvaluationNode is explicitly declared as an interface contract in src/app/models/types.ts at line 203. [F:FACT-000421a536ab9c76]
- src/app/kernel/compare.ts declares export function compareTyped( at line 71. [F:FACT-01b48222193348a9]
- RuleCondition declares protocol field value: string in src/app/types.ts at line 27. [F:FACT-0255629028d3141c]
- CanvasNode declares protocol field selectionLogic?: string in src/app/types.ts at line 51. [F:FACT-06a3248e3dd42b6b]
- RuleGrammar declares protocol field name: string in src/app/components/rule-sets/rule-sets.component.ts at line 32. [F:FACT-07f05219834015ee]
- ExecutionTraceLog is explicitly declared as an interface contract in src/app/types.ts at line 67. [F:FACT-14519fa8f26ae467]
- MemoryPort explicitly implements PersistencePort in src/app/services/persistence.ts at line 44. [F:FACT-22b06d26e6b6b981]
- LocalStoragePort explicitly implements PersistencePort in src/app/services/persistence.ts at line 16. [F:FACT-53fd72e49466dd8b]
- RuleSetsComponent is an explicit consumer of interface OnInit in src/app/components/rule-sets/rule-sets.component.ts. [F:FACT-99f0e6f1ddc10630]

## Implementations {#arch.contracts.implementations}

- src/app/app.component.ts declares export class AppComponent at line 46. [F:FACT-0117e44adc5a18af]
- Rule declares protocol field name: string in src/app/kernel/ast.ts at line 46. [F:FACT-0222cdf43605c00c]
- src/app/components/validator/validate-tab/validate-tab.component.ts declares export class ValidateTabComponent at line 27. [F:FACT-0362dc8c12101e25]
- ComparisonTerm declares protocol field value: any in src/app/kernel/ast.ts at line 28. [F:FACT-06f772cd86e54885]
- ConditionCoverage is explicitly declared as an interface contract in src/app/kernel/coverage.ts at line 12. [F:FACT-1369885527a34377]
- ComparisonTerm is explicitly declared as an interface contract in src/app/kernel/ast.ts at line 24. [F:FACT-19c599cb4357f25e]
- RuleSetsComponent explicitly implements OnInit in src/app/components/rule-sets/rule-sets.component.ts at line 513. [F:FACT-2dbc745c7be2f938]
- LocalStoragePort is an explicit consumer of interface PersistencePort in src/app/services/persistence.ts. [F:FACT-5e3d49bb981297a9]
- MemoryPort is an explicit consumer of interface PersistencePort in src/app/services/persistence.ts. [F:FACT-cd0f427376dce326]

## Consumers {#arch.contracts.consumers}

- src/app/models/types.ts declares export interface NamespaceConfig at line 42. [F:FACT-01455fdd08935afd]
- src/app/data.ts declares export const INITIAL_CANVAS_NODES: CanvasNode[] at line 52. [F:FACT-0228434bb0d15f17]
- src/app/models/types.ts declares export interface PendingCase at line 181. [F:FACT-04e4597c45dce641]
- PendingCase declares protocol field description: string in src/app/models/types.ts at line 184. [F:FACT-077b44782f1de59d]
- RuleFindings is explicitly declared as an interface contract in src/app/components/validator/validate-tab/validate-tab.component.ts at line 8. [F:FACT-144a2b2073fd8644]
- GridRow is explicitly declared as an interface contract in src/app/components/validator/test-data-tab/test-data-tab.component.ts at line 10. [F:FACT-1c3cc3977b3d1cfb]
- RuleCanvasComponent is an explicit consumer of interface OnInit in src/app/components/rule-canvas/rule-canvas.component.ts. [F:FACT-3ae30bd5e80b7849]
- RuleCanvasComponent explicitly implements OnInit in src/app/components/rule-canvas/rule-canvas.component.ts at line 669. [F:FACT-5e4f4f2be444e8bb]

## Contract contradictions {#arch.contracts.contract-contradictions}

- No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope. [F:FACT-36fc31480546b14a]

## Unavailable runtime guarantees {#arch.contracts.unavailable-runtime-guarantees}

- No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope. [F:FACT-36fc31480546b14a]
- No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope. [F:FACT-f8df5ea05118e316]

## Facts {#arch.contracts.facts}

```json
{
  "fact_ledger_sha256": "sha256:f73b505816a517f572be24008c3c8a7e558b47f23251ca4df7602e5fe3c71413",
  "facts": [
    {
      "assurance": "structurally-derived",
      "claim": "EvaluationNode is explicitly declared as an interface contract in src/app/models/types.ts at line 203.",
      "claimSha256": "sha256:37a33dc8273a06cc93bc3feb9d51435dbb6a3f79574e0e1fd197d94ffd945f28",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-fceed2b93fb7fc93"
      ],
      "factSha256": "sha256:3cbcb0a3c5743eb769f701575304299825c4cdd74e8c9cc07147da6537971d20",
      "factType": "interface",
      "id": "FACT-000421a536ab9c76",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/models/types.ts#EvaluationNode",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/app.component.ts declares export class AppComponent at line 46.",
      "claimSha256": "sha256:316fce76d46c31fd31cb49c6e15cfe269f42c427a1fba74b3970c6dd8ab98eed",
      "conflictsWith": [],
      "derivationId": "DRV-d2335093c7c3eb9e",
      "evidenceIds": [
        "EV-4bfaaaab57dbfff9"
      ],
      "factSha256": "sha256:c3e351a878d6e4abbf57b583ed2c83429f2bee8b3b856072ff56c73f952ecb97",
      "factType": "signature",
      "id": "FACT-0117e44adc5a18af",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/app.component.ts#AppComponent",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/models/types.ts declares export interface NamespaceConfig at line 42.",
      "claimSha256": "sha256:688e585902882a77e46199b520e2a28b4a45443cf7339a07d65fd8578d2bf410",
      "conflictsWith": [],
      "derivationId": "DRV-d2335093c7c3eb9e",
      "evidenceIds": [
        "EV-62c229970b480a4f"
      ],
      "factSha256": "sha256:fdc1a5996ba6cc5f5745ad5d11312c6ec69fcab894ead12d5b0a6daa2d87f7e4",
      "factType": "signature",
      "id": "FACT-01455fdd08935afd",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/models/types.ts#NamespaceConfig",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/kernel/compare.ts declares export function compareTyped( at line 71.",
      "claimSha256": "sha256:f83149f30bc69c18222fc89716d6b1224c696235a72ba61b4fa5173510da40d8",
      "conflictsWith": [],
      "derivationId": "DRV-d2335093c7c3eb9e",
      "evidenceIds": [
        "EV-459767937abae327"
      ],
      "factSha256": "sha256:656095290673e30280fa065da3aab398aa66b70856d4363395d4bd09faaacaa3",
      "factType": "signature",
      "id": "FACT-01b48222193348a9",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/kernel/compare.ts#compareTyped",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "Rule declares protocol field name: string in src/app/kernel/ast.ts at line 46.",
      "claimSha256": "sha256:70282ef9a282618e68e4d35aa5b30a4b8da967b4668e9b14b1f9afd23c6677c7",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-368f4850fc55d44b"
      ],
      "factSha256": "sha256:05821f26a7b754aa8d3da2488e511f660d48ff7f645c034da5434ce605ccdd40",
      "factType": "protocol-field",
      "id": "FACT-0222cdf43605c00c",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/kernel/ast.ts#Rule.name",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/data.ts declares export const INITIAL_CANVAS_NODES: CanvasNode[] at line 52.",
      "claimSha256": "sha256:5710a5bbb23335ca30fd2e1ed3211abe69a987c838ddad991775e14c50544c25",
      "conflictsWith": [],
      "derivationId": "DRV-d2335093c7c3eb9e",
      "evidenceIds": [
        "EV-6645801d8112676e"
      ],
      "factSha256": "sha256:d1fa4e2f3e101debb4e02f5b441a23bfe5a5ae2d12d7d415a4932b7ba239f141",
      "factType": "signature",
      "id": "FACT-0228434bb0d15f17",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/data.ts#INITIAL_CANVAS_NODES",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "RuleCondition declares protocol field value: string in src/app/types.ts at line 27.",
      "claimSha256": "sha256:a7815011281a614ee424cffdb673a07eeb074bbe2861aaf3cb08283008f6b66b",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-4a9faff714cdd688"
      ],
      "factSha256": "sha256:a90c20b9c097bd50c27d5f52f03fb05eecf5f7e68679a6ef6caa79202e6f5515",
      "factType": "protocol-field",
      "id": "FACT-0255629028d3141c",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/types.ts#RuleCondition.value",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/components/validator/validate-tab/validate-tab.component.ts declares export class ValidateTabComponent at line 27.",
      "claimSha256": "sha256:0af18f4f1111279344c2079d719d8eec25da72ed871ed9884f399f0132201210",
      "conflictsWith": [],
      "derivationId": "DRV-d2335093c7c3eb9e",
      "evidenceIds": [
        "EV-90dcaea7ef8ca37b"
      ],
      "factSha256": "sha256:0d5784b025df72f018e1ec300b988183b4d164c86090be9eb755d8c86fd4c7e6",
      "factType": "signature",
      "id": "FACT-0362dc8c12101e25",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/validator/validate-tab/validate-tab.component.ts#ValidateTabComponent",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "src/app/models/types.ts declares export interface PendingCase at line 181.",
      "claimSha256": "sha256:83868e065185bdb9d0c234327df9b182d6d0c11b3429f1cf6bbd5cd19169ef01",
      "conflictsWith": [],
      "derivationId": "DRV-d2335093c7c3eb9e",
      "evidenceIds": [
        "EV-a710c9c9df2a8633"
      ],
      "factSha256": "sha256:f4a89a317661cd37b93f9f8bc91cb810e3ffa19daba062f1762b5ab0b9a6adc3",
      "factType": "signature",
      "id": "FACT-04e4597c45dce641",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/models/types.ts#PendingCase",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "CanvasNode declares protocol field selectionLogic?: string in src/app/types.ts at line 51.",
      "claimSha256": "sha256:df3aa3e1dd9f274dfa5de2431ed9848a755e0f60d1d6dd21a1a9acecf2b176f4",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-9557719eb3f4feaf"
      ],
      "factSha256": "sha256:fe57e0307b93d4b9d4f30ffac8c8e216ab8473a2cb26a805b85da6560520b5fc",
      "factType": "protocol-field",
      "id": "FACT-06a3248e3dd42b6b",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/types.ts#CanvasNode.selectionLogic",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "ComparisonTerm declares protocol field value: any in src/app/kernel/ast.ts at line 28.",
      "claimSha256": "sha256:9e5ae1246d4ad5f0fb82fbfa0c2a733361fe777b00f4dc443270ea44094befdd",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-3e4b93a215bd47ea"
      ],
      "factSha256": "sha256:dfdd47eedd8ddfc50f19c44d40758aedc3e68412978af1fc6f1ec2bd7082e76d",
      "factType": "protocol-field",
      "id": "FACT-06f772cd86e54885",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/kernel/ast.ts#ComparisonTerm.value",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "PendingCase declares protocol field description: string in src/app/models/types.ts at line 184.",
      "claimSha256": "sha256:5a97ac0a5c03f18a7825eb749df2d2295ed8d68a518cd7b70db1d55097e41316",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-557173803b268c2d"
      ],
      "factSha256": "sha256:9ca2edc6445f9c207606787cace6d0b3ad1d54bb175f1a09392e936528beb04b",
      "factType": "protocol-field",
      "id": "FACT-077b44782f1de59d",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/models/types.ts#PendingCase.description",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "RuleGrammar declares protocol field name: string in src/app/components/rule-sets/rule-sets.component.ts at line 32.",
      "claimSha256": "sha256:8fccede9e92c4aca3706b12891bcc54618753528b698fa642c1907a0363ca237",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-a24eeda828c486e4"
      ],
      "factSha256": "sha256:8e2feea87f526b44ecdd88a161e21b7a1365e70f53746c9cf29088ec3893f791",
      "factType": "protocol-field",
      "id": "FACT-07f05219834015ee",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/rule-sets/rule-sets.component.ts#RuleGrammar.name",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "ConditionCoverage is explicitly declared as an interface contract in src/app/kernel/coverage.ts at line 12.",
      "claimSha256": "sha256:9ffb3c511194d7df863f1c60489f38d40a0f6148072762587d3ae864251c4d4f",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-11bad38f703058b1"
      ],
      "factSha256": "sha256:f764b66a197d47a1edab20c52e2ffa88c16f3967a18f42a0a4b2a4371ed89bc1",
      "factType": "interface",
      "id": "FACT-1369885527a34377",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/kernel/coverage.ts#ConditionCoverage",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "RuleFindings is explicitly declared as an interface contract in src/app/components/validator/validate-tab/validate-tab.component.ts at line 8.",
      "claimSha256": "sha256:76b9429ed9f13684c5c0b9f5efc3906da73bf907a317d943036e9df68687fd77",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-a1b55a3743be377f"
      ],
      "factSha256": "sha256:939cf632df16c88c9a44c5da5a25990033d2811fcdb61c2e23053927b0b8ef85",
      "factType": "interface",
      "id": "FACT-144a2b2073fd8644",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/validator/validate-tab/validate-tab.component.ts#RuleFindings",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "ExecutionTraceLog is explicitly declared as an interface contract in src/app/types.ts at line 67.",
      "claimSha256": "sha256:ee395872383b656b040a0648433a8eb8d736033969e5f533e2f949850eeb3d9c",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-5a7b20918050bc27"
      ],
      "factSha256": "sha256:a9595ba28508be60746c9c6a584ef2a627fc3918abe8a53d0bf33cabeafd35ad",
      "factType": "interface",
      "id": "FACT-14519fa8f26ae467",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/types.ts#ExecutionTraceLog",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "ComparisonTerm is explicitly declared as an interface contract in src/app/kernel/ast.ts at line 24.",
      "claimSha256": "sha256:150e893cf4fd4a711ac29debd09424088eb1d649eb06517d5e3438ca7ada8ad1",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-5d77f3c33ef7a725"
      ],
      "factSha256": "sha256:62d8dc2e4a4cd380ada2976ce2706de73705bc26dcb00c9dac716f9a2902cfb7",
      "factType": "interface",
      "id": "FACT-19c599cb4357f25e",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/kernel/ast.ts#ComparisonTerm",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "GridRow is explicitly declared as an interface contract in src/app/components/validator/test-data-tab/test-data-tab.component.ts at line 10.",
      "claimSha256": "sha256:6f7a45e420020457227b6f7d01d4573f6877873a02bdab9f0f1354b346acf9e4",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-980f4e28cf412969"
      ],
      "factSha256": "sha256:4d0ac7fd7c5b904196187a65916c73965ef3f6aff43ce63493df9938fea76a8d",
      "factType": "interface",
      "id": "FACT-1c3cc3977b3d1cfb",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/validator/test-data-tab/test-data-tab.component.ts#GridRow",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "MemoryPort explicitly implements PersistencePort in src/app/services/persistence.ts at line 44.",
      "claimSha256": "sha256:557ddbdf9caa14157b257d48a1aaacc6c86728a3e8b72d4c104c2c582e529c1a",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-7937030d5bd296c0"
      ],
      "factSha256": "sha256:e8771ff1d83e9d6527b06d39138d7a6fcfabef03fc387bb6cb93356fa2bcc9e4",
      "factType": "implementation",
      "id": "FACT-22b06d26e6b6b981",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/services/persistence.ts#MemoryPort->PersistencePort",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "RuleSetsComponent explicitly implements OnInit in src/app/components/rule-sets/rule-sets.component.ts at line 513.",
      "claimSha256": "sha256:bf73e533a347e99818561448a11eb0950e742bf0ec08e4b701de62413868c0d8",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-e044c06f6c3c2367"
      ],
      "factSha256": "sha256:d778b275280a6b818e5bb58309b7573d9b389b2404b45a6f386f74de60cdad80",
      "factType": "implementation",
      "id": "FACT-2dbc745c7be2f938",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/rule-sets/rule-sets.component.ts#RuleSetsComponent->OnInit",
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
      "factSha256": "sha256:989d751bfe963640b74fdef0cef01126c6f5865ef668bd60a685356c67f67e92",
      "factType": "schema-contract",
      "id": "FACT-36fc31480546b14a",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_REGISTERED_PRODUCER",
        "detail": "No registered deterministic producer supplied schema-contract for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:schema-contract",
        "kind": "analysis"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "RuleCanvasComponent is an explicit consumer of interface OnInit in src/app/components/rule-canvas/rule-canvas.component.ts.",
      "claimSha256": "sha256:af02a0da062b35ab0bccf41aa46ed53bc80e22a7589e6cf10ab89ac2a7b6e1a6",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-25898a69735cfd1a"
      ],
      "factSha256": "sha256:a42609ce5206c7f2ba7ce60e179a10f5b59ae33eb042118bb3ff851b0df67566",
      "factType": "consumer-dependency",
      "id": "FACT-3ae30bd5e80b7849",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/rule-canvas/rule-canvas.component.ts#RuleCanvasComponent->OnInit",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "LocalStoragePort explicitly implements PersistencePort in src/app/services/persistence.ts at line 16.",
      "claimSha256": "sha256:1d5ffd8ec9b77c09902b74101538e8122d9e25ea8bd9628d3d4c1e76577351cc",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-def2915209b5d672"
      ],
      "factSha256": "sha256:444e1dedc839dc6fed395907aa7a2be53df99ddea6e59f9712cee646fb11fa5b",
      "factType": "implementation",
      "id": "FACT-53fd72e49466dd8b",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/services/persistence.ts#LocalStoragePort->PersistencePort",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "LocalStoragePort is an explicit consumer of interface PersistencePort in src/app/services/persistence.ts.",
      "claimSha256": "sha256:c8d319eb0738f89d2af4400878e5b235e4b86f41c6763767506c19a784a947a8",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-def2915209b5d672"
      ],
      "factSha256": "sha256:f29327d833fbed6b596cd647dee62eeb51b34060aa019b8cbf4d3f20437e61c0",
      "factType": "consumer-dependency",
      "id": "FACT-5e3d49bb981297a9",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/services/persistence.ts#LocalStoragePort->PersistencePort",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "RuleCanvasComponent explicitly implements OnInit in src/app/components/rule-canvas/rule-canvas.component.ts at line 669.",
      "claimSha256": "sha256:19d3f140c49d913a357b379cdb06c379688ac414f29d386e1a204a45977410dd",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-25898a69735cfd1a"
      ],
      "factSha256": "sha256:e8ebe348147d660f5c32f5801f6fac57e84d22c5192f31d92472a1e705d5a510",
      "factType": "implementation",
      "id": "FACT-5e4f4f2be444e8bb",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/rule-canvas/rule-canvas.component.ts#RuleCanvasComponent->OnInit",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "RuleSetsComponent is an explicit consumer of interface OnInit in src/app/components/rule-sets/rule-sets.component.ts.",
      "claimSha256": "sha256:35fc973d6fc469e750dfe89b2d6568b4b6b87b05ad29763f2b38fa9d093c91d9",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-e044c06f6c3c2367"
      ],
      "factSha256": "sha256:cbeb983881d1d3f72f6af81628c5a470654b390eb5ede535d6fb6a42ba7cc4a0",
      "factType": "consumer-dependency",
      "id": "FACT-99f0e6f1ddc10630",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/components/rule-sets/rule-sets.component.ts#RuleSetsComponent->OnInit",
        "kind": "symbol"
      }
    },
    {
      "assurance": "structurally-derived",
      "claim": "MemoryPort is an explicit consumer of interface PersistencePort in src/app/services/persistence.ts.",
      "claimSha256": "sha256:d3fa32532f2bc4fbc125c4336583d94c67f8723744d5f55c865f9eca828b42ff",
      "conflictsWith": [],
      "derivationId": "DRV-5dba42dcd4c7accd",
      "evidenceIds": [
        "EV-7937030d5bd296c0"
      ],
      "factSha256": "sha256:c6e04b366ae3437b241e4bc2dd975dfb8810a3f2fadae9f387edc960f56c8e70",
      "factType": "consumer-dependency",
      "id": "FACT-cd0f427376dce326",
      "scopeStatus": "inside",
      "status": "available",
      "subject": {
        "id": "src/app/services/persistence.ts#MemoryPort->PersistencePort",
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
      "factSha256": "sha256:a4f8e74ac0943741665211d33c99e659878b69c408b1841277c1adf542b57747",
      "factType": "runtime-guarantee",
      "id": "FACT-f8df5ea05118e316",
      "reason": {
        "attemptedProducer": "required-fact-coverage",
        "code": "NO_RUNTIME_EVIDENCE",
        "detail": "No registered deterministic producer supplied runtime-guarantee for arch.contracts@4 within the pinned scope."
      },
      "scopeStatus": "inside",
      "status": "unavailable",
      "subject": {
        "id": "arch.contracts@4:runtime-guarantee",
        "kind": "analysis"
      }
    }
  ],
  "schema_version": 1,
  "scope_sha256": "sha256:ef6e514a4d006db6aac321c12ca9cba1b61b065b81491ad2f9ffe7b91606e7f6",
  "view": "arch.contracts",
  "view_spec_sha256": "sha256:13ff5bb50461e3b7a40d8e34e1785fd29ebd36b5134a59c7630fa5304d2997b0",
  "view_version": 4
}
```
---
generated-at: 2026-09-21T03:33:54.186Z
source-commit: 5e4b873cc690d7639e281818c07801cdbae02840
view-sha256: sha256:69aa1c360203ab4cc4d113f82e3c8b1b27fbb411f3e50fc03e25f5e856f96d6f
prompt-sha256: sha256:af037af368310430b3497455ee5dd0f3c8afad14930dfaf65d90a0c9fc2b6001
execution-unit: deterministic-renderer@1
model: unavailable
assurance: validated-derived-view
---
