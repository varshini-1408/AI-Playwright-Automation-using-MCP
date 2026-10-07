# AI Playwright Automation Workflow

## Purpose

Define the standard workflow for converting application requirements into
validated Playwright JavaScript automation using Planner, Generator,
Validator, Healer, and Playwright MCP.

## Source of Truth

The following files are authoritative:

- `docs/application-context.md`
- `docs/framework-context.md`
- `docs/requirements.md`
- `test-cases/*.md`
- `pages/*.js`
- `test-data/*.js`
- `tests/*.js`

Do not invent application functionality.

---

# Workflow

## Phase 1 - Requirement Analysis

Input:

`docs/requirements.md`

Action:

Planner Agent reads the requirements and application context.

Output:

`test-cases/*.md`

Planner must:

1. Identify the requirement.
2. Verify functionality exists in application-context.md.
3. Create positive scenarios.
4. Create negative scenarios where applicable.
5. Create boundary scenarios where applicable.
6. Assign unique test case IDs.
7. Avoid duplicate test cases.
8. Never generate Playwright code.

---

## Phase 2 - Test Generation

Input:

`test-cases/*.md`

Action:

Generator Agent creates Playwright JavaScript tests.

Generator must:

1. Read the selected test case.
2. Read application-context.md.
3. Read framework-context.md.
4. Inspect existing Page Objects.
5. Inspect existing tests.
6. Reuse existing components.
7. Use test data from test-data/.
8. Use Playwright MCP when live locator verification is required.
9. Generate maintainable JavaScript.
10. Avoid duplicate locators.
11. Avoid hardcoded credentials.

Output:

`generated-tests/*.spec.js`

---

## Phase 3 - Validation

Input:

`generated-tests/*.spec.js`

Action:

Validator Agent validates the generated test.

Validation must include:

1. JavaScript syntax validation.
2. Playwright test discovery.
3. Locator validation.
4. Test execution.
5. Assertion validation.

Result:

PASS or FAIL

Output:

`validation/*.md`

---

## Phase 4 - Healing

Trigger:

Validator reports FAIL.

Action:

Healer Agent investigates the failure.

Healer must:

1. Read the failed test.
2. Read the validation report.
3. Inspect the application using Playwright MCP.
4. Determine the actual failure reason.
5. Verify the corrected locator or interaction.
6. Modify only the required automation code.
7. Never change the business requirement.
8. Never weaken assertions just to obtain PASS.
9. Re-run the test.

Output:

`healing/*.md`

---

## Phase 5 - Revalidation

After healing:

Validator Agent runs again.

If PASS:

Move the test to the completed automation set.

If FAIL:

Return the failure to Healer.

Maximum healing attempts:

3

If the test still fails after 3 attempts:

Mark the test as BLOCKED and require human investigation.

---

# Agent Responsibilities

## Planner

Requirement → Test Case

## Generator

Test Case → Playwright Test

## Validator

Playwright Test → PASS / FAIL

## Healer

FAIL → Investigate → Fix → Revalidate

## Playwright MCP

Live application inspection and browser interaction.

---

# Important Rules

1. Do not invent application functionality.
2. Do not modify application source code.
3. Do not change requirements to make tests pass.
4. Do not remove assertions to make tests pass.
5. Do not duplicate Page Objects.
6. Do not duplicate test data.
7. Prefer existing framework components.
8. Prefer accessible Playwright locators.
9. Use Playwright web-first assertions.
10. Use MCP for live application verification.
11. Keep business assertions in tests.
12. Keep interaction logic in Page Objects.
13. Keep test data separate from tests.
14. Keep generated automation separate from manually maintained automation.
15. Every generated test must be validated before being considered complete.

# Execution Flow

The complete automation lifecycle is:

Requirements
    ↓
Planner
    ↓
Test Cases
    ↓
Generator
    ↓
Generated Tests
    ↓
Validator
    ↓
Executor
    ↓
PASS
    ↓
Final Result

If Executor fails:

Executor
    ↓
FAIL
    ↓
Healer
    ↓
Playwright MCP
    ↓
Fix
    ↓
Validator
    ↓
Executor
    ↓
PASS

# Agent Handoff Rules

## Planner → Generator

Planner provides approved Markdown test cases.

Generator must not create functionality that is not present in the application context.

## Generator → Validator

Generator provides executable Playwright JavaScript tests.

Validator verifies syntax, locators, assertions, and execution.

## Validator → Executor

Only validated tests should be executed as part of the normal workflow.

## Executor → Healer

When execution fails, Executor provides:

- Test Case ID
- Test file
- Error message
- Failure location
- Execution result

## Healer → Validator

Healer provides the repaired automation.

Validator must validate the repaired automation before it is considered successful.

## Validator → Final Result

The final result must be one of:

- PASS
- FAIL
- BLOCKED

A test must never be marked PASS without successful Playwright execution.