# Framework Context

## Technology
- Playwright
- JavaScript
- Playwright Test
- Playwright MCP
- VS Code

## Automation Architecture
- Use Page Object Model for reusable page interactions.
- Keep test cases separate from page interaction logic.
- Keep test data separate from page objects.
- Keep reusable utilities separate from tests.
- Tests should be independent wherever possible.

## Locator Strategy
Use locators in this preferred order:
1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText() when appropriate
5. locator() with stable CSS attributes when necessary

Avoid XPath unless there is no reliable alternative.

Do not use fragile dynamically generated CSS classes when a stable locator is available.

## Assertions
- Use Playwright web-first assertions.
- Prefer expect(locator).toBeVisible()
- Prefer expect(locator).toHaveText()
- Prefer expect(locator).toHaveURL()
- Prefer expect(locator).toHaveValue()
- Prefer expect(locator).toBeChecked()

Do not extract text first and then use an assertion when a Playwright web-first assertion can be used directly.

## Waiting
- Do not use unnecessary fixed waits such as waitForTimeout().
- Prefer Playwright's automatic waiting and web-first assertions.
- Wait for the actual UI condition instead of waiting for page load when the action is AJAX-based.

## Test Data
- Do not hardcode sensitive credentials in test scripts.
- Keep test data separate from page objects.
- Use environment variables for sensitive values when required.

## Coding Rules
- Use clear and descriptive names.
- Keep tests readable.
- Avoid duplicated automation logic.
- Reuse existing page methods whenever possible.
- Do not create duplicate methods if an existing reusable method can perform the action.

## MCP Rules
- Use Playwright MCP for application exploration, locator discovery, validation, and browser interaction when required.
- Do not invent UI elements that have not been observed.
- Before generating automation for an unknown functionality, explore the application first.
- Prefer existing application-context information over assumptions.

## AI Rules
- Do not invent application functionality.
- Do not generate test cases for functionality that does not exist.
- Follow the application-context.md file.
- Follow this framework-context.md file.
- Reuse existing framework components.
- Ask for clarification when a requirement conflicts with the application or framework context.
