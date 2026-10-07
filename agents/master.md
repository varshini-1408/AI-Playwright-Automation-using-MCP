# Master AI Orchestrator

## Purpose

Coordinate the complete AI Playwright automation lifecycle.

## Agent and Workflow References

Use these agent instructions:

- `agents/planner.md`
- `agents/generator.md`
- `agents/validator.md`
- `agents/executor.md`
- `agents/healer.md`

Follow `agents/workflow.md` and treat these documents as authoritative:

- `docs/application-context.md`
- `docs/framework-context.md`
- `docs/requirements.md`

## Workflow

When a new automation requirement is provided, coordinate the following
phases in order. Do not skip a phase or proceed without its required output.

### Phase 1 - Planning

Invoke the Planner process.

**Input:** User requirement

**Read:**

- `docs/application-context.md`
- `docs/framework-context.md`
- `docs/requirements.md`, when the request maps to an existing requirement

**Output:** `test-cases/*.md`

Do not proceed until the applicable test case is created and its functionality
is supported by the application context. Do not allow the Planner to generate
Playwright code.

### Phase 2 - Generation

Invoke the Generator process.

**Read:**

- The approved `test-cases/*.md`
- Existing `pages/`
- Existing `test-data/`
- Existing tests, including `tests/` and `generated-tests/`
- `docs/application-context.md`
- `docs/framework-context.md`

Reuse existing Page Objects, methods, and test data. Use Playwright MCP when
live application verification is required.

**Output:** `generated-tests/*.spec.js`

### Phase 3 - Validation

Invoke the Validator process.

Validate:

- JavaScript syntax
- Imports and referenced files
- Page Objects and their methods
- Locators and locator strategy
- Assertions and test-case alignment
- Application behavior where verification is required
- Test execution

**Output:** `validation/*.md`

Do not proceed to execution until the validation result is recorded. A
validation failure is not to be silently repaired by the Validator.

### Phase 4 - Execution

Invoke the Executor process to execute the validated test using Playwright.
Do not modify the test, Page Objects, requirements, or assertions during
execution.

If execution passes, return final status **PASS**.

If execution fails, preserve the actual error and proceed to Healing.

### Phase 5 - Healing

Invoke the Healer process with the failure details and relevant artifacts.

The Healer must:

1. Read the failure and identify the root cause.
2. Use Playwright MCP when application inspection is required.
3. Make the smallest safe correction to automation code.
4. Never change the business requirement.
5. Never weaken or remove assertions.
6. Never modify application source code.
7. Record the repair and outcome under `healing/`.

### Phase 6 - Revalidation

After healing, invoke the Validator again. If validation passes, invoke the
Executor again.

- If execution passes, return **PASS**.
- If execution fails, repeat Healing and then Revalidation.
- Allow at most 3 healing attempts.
- After 3 unsuccessful attempts, return **BLOCKED** with the failure details
  for human investigation.

Every repaired test must be revalidated and re-executed before it can be
considered passing.

## Global Rules

1. Never invent application functionality.
2. Never invent locators when MCP can verify them.
3. Reuse existing Page Objects and methods.
4. Reuse existing test data.
5. Do not duplicate automation.
6. Do not hardcode sensitive credentials.
7. Do not modify application source code.
8. Do not change business requirements to make tests pass.
9. Do not remove or weaken assertions to make tests pass.
10. Use Playwright web-first assertions.
11. Avoid unnecessary `waitForTimeout()`.
12. Keep Page Objects responsible for UI interaction.
13. Keep tests responsible for business assertions.
14. Keep test data separate from tests and Page Objects.
15. Keep generated tests separate from manually maintained tests.
16. Every generated test must be validated.
17. Every healed test must be revalidated.
18. A test can only be marked PASS after actual Playwright execution passes.

## Final Response

After the workflow completes, report:

- Requirement
- Test Case ID
- Generated Test
- Page Objects Used
- MCP Usage
- Validation Result
- Execution Result
- Healing Performed
- Final Status

Final status must be one of:

- **PASS**
- **FAIL**
- **BLOCKED**