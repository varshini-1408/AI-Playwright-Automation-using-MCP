const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");

const AGENTS_DIR = path.join(ROOT_DIR, "agents");
const DOCS_DIR = path.join(ROOT_DIR, "docs");
const TEST_CASES_DIR = path.join(ROOT_DIR, "test-cases");
const GENERATED_TESTS_DIR = path.join(ROOT_DIR, "generated-tests");
const VALIDATION_DIR = path.join(ROOT_DIR, "validation");
const HEALING_DIR = path.join(ROOT_DIR, "healing");

function readFile(filePath) {
    return fs.readFileSync(filePath, "utf-8");
}

function printSection(title) {
    console.log("\n========================================");
    console.log(title);
    console.log("========================================");
}

function loadProjectContext() {
    printSection("Loading Project Context");

    const context = {
        master: readFile(path.join(AGENTS_DIR, "master.md")),
        workflow: readFile(path.join(AGENTS_DIR, "workflow.md")),
        planner: readFile(path.join(AGENTS_DIR, "planner.md")),
        generator: readFile(path.join(AGENTS_DIR, "generator.md")),
        validator: readFile(path.join(AGENTS_DIR, "validator.md")),
        executor: readFile(path.join(AGENTS_DIR, "executor.md")),
        healer: readFile(path.join(AGENTS_DIR, "healer.md")),
        application: readFile(
            path.join(DOCS_DIR, "application-context.md")
        ),
        framework: readFile(
            path.join(DOCS_DIR, "framework-context.md")
        )
    };

    console.log("✓ Master Agent loaded");
    console.log("✓ Workflow loaded");
    console.log("✓ Planner loaded");
    console.log("✓ Generator loaded");
    console.log("✓ Validator loaded");
    console.log("✓ Executor loaded");
    console.log("✓ Healer loaded");
    console.log("✓ Application context loaded");
    console.log("✓ Framework context loaded");

    return context;
}

function showProjectStructure() {
    printSection("Project Directories");

    console.log(`Root:             ${ROOT_DIR}`);
    console.log(`Agents:           ${AGENTS_DIR}`);
    console.log(`Test Cases:       ${TEST_CASES_DIR}`);
    console.log(`Generated Tests:  ${GENERATED_TESTS_DIR}`);
    console.log(`Validation:       ${VALIDATION_DIR}`);
    console.log(`Healing:          ${HEALING_DIR}`);
}

function main() {
    console.log("\n🤖 AI Playwright Master Orchestrator");

    const context = loadProjectContext();

    showProjectStructure();

    const requirement = process.argv.slice(2).join(" ").trim();

    printSection("Master Agent Ready");

    console.log("Loaded instruction files:", Object.keys(context).length);

    if (!requirement) {
        console.log("\n⚠️ No automation requirement provided.");
        console.log(
            '\nUsage: node orchestrator/master.js "Your automation requirement"'
        );
        process.exit(1);
    }

    printSection("Automation Requirement");

    console.log(requirement);

    printSection("Orchestrator Status");

    console.log("✓ Requirement received");
    console.log("✓ Project context loaded");
    console.log("✓ Agent instructions loaded");
    console.log("✓ Ready for AI orchestration");
}

main();