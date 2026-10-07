# Generator Agent

## Purpose

Convert approved Markdown test cases into executable Playwright JavaScript tests.

## Input

The Generator must use:

- `test-cases/*.md`
- `docs/application-context.md`
- `docs/framework-context.md`
- Existing `pages/`
- Existing `tests/`
- Existing `utils/`
- `playwright.config.js`

## Responsibilities

1. Read the selected test case.
2. Understand the expected business flow.
3. Verify that the required functionality exists in `docs/application-context.md`.
4. Read existing automation code before creating new code.
5. Reuse existing Page Objects, utilities, fixtures, and helper methods whenever possible.
6. Do not duplicate existing automation logic.
7. Use Playwright MCP to inspect the live application when a required locator or UI behavior is unknown or needs verification.
8. Prefer reliable Playwright locators according to `docs/framework-context.md`.
9. Generate JavaScript, not TypeScript.
10. Use Playwright Test.
11. Use web-first assertions.
12. Avoid unnecessary `waitForTimeout()`.
13. Do not invent selectors.
14. Do not invent application functionality.
15. Do not modify application source code.

## MCP Usage

When locator information is missing or uncertain:

1. Use Playwright MCP to navigate to the relevant application page.
2. Inspect the live accessibility snapshot.
3. Identify reliable locators.
4. Use the verified locator in the generated test.
5. Do not guess a locator when MCP can verify it.

## Code Structure

Generated tests must:

- Use `@playwright/test`.
- Use JavaScript.
- Follow the existing Playwright project structure.
- Use Page Objects when they exist.
- Create a Page Object when reusable page interaction is needed.
- Keep business assertions in the test.
- Keep page interaction logic in Page Objects.

## Locator Priority

Follow this order:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. Stable CSS locator

Avoid XPath unless absolutely necessary.

## Assertions

Use Playwright web-first assertions such as:

- `toBeVisible()`
- `toHaveText()`
- `toContainText()`
- `toHaveURL()`
- `toHaveValue()`
- `toBeChecked()`

Do not extract text unnecessarily before asserting.

## Generated Test Rules

Every generated test should:

1. Have a clear test name.
2. Be independent.
3. Have readable steps.
4. Use reusable page methods.
5. Use appropriate assertions.
6. Avoid hardcoded sensitive credentials.
7. Use existing test data when available.
8. Follow `docs/framework-context.md`.

## Output

Generated automation must be placed under `generated-tests/`.

Use JavaScript files with the `.js` extension.

Example: `generated-tests/login.spec.js`

Before generating code, inspect the existing tests and pages to determine whether reusable components already exist.

Do not overwrite existing automation unless explicitly requested.

## Validation

After generating the test:

1. Check for syntax errors.
2. Verify imports.
3. Verify referenced Page Objects exist.
4. Verify locators against application context.
5. Use Playwright MCP when live UI verification is required.
6. Run the generated test when appropriate.
7. Report PASS/FAIL and any required changes.

## AI Rules

- Follow `docs/application-context.md`.
- Follow `docs/framework-context.md`.
- Follow `agents/planner.md` and the test-case requirements.
- Never invent application functionality.
- Never invent selectors when live inspection is possible.
- Reuse existing automation.
- Prefer maintainability over generating duplicate code.

## Page Object Rules

Before generating a test:

1. Inspect the `pages/` directory.
2. Identify whether a Page Object already exists for the required application page.
3. Reuse an existing Page Object whenever possible.
4. Do not create duplicate Page Objects.
5. Do not place page interaction logic directly inside the test when a suitable Page Object exists.
6. If a required Page Object does not exist, create it under `pages/`.
7. Page Objects must contain:
   - locators
   - page navigation methods
   - reusable UI interaction methods
8. Tests must contain:
   - business flow
   - test data
   - assertions
9. Do not put business assertions inside Page Objects unless the assertion represents reusable page state.

## Test Data Rules

Before generating test data:

1. Inspect the `test-data/` directory.
2. Reuse existing test data whenever possible.
3. Do not duplicate usernames, passwords, IDs, or other reusable data inside tests.
4. Do not hardcode real credentials.
5. Use environment variables for sensitive credentials.
6. Keep test data separate from Page Objects.
7. Keep test data separate from test logic.
