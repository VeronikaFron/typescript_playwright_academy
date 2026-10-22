import { TestCase } from "./test_case.ts";

const testCase = new TestCase(
  "TC-1",
  "Login with valid creds",
  "Dashboard is visible",
);

testCase.addStep("Open login page");
testCase.addStep("Enter valid username and password");
testCase.addStep("Click Login button");

// Run #1 - očekáváme Fail
console.log("Run #1:");
console.log("Result:", testCase.run("Error page is visible"));
testCase.printSummary();

// Reset testu
testCase.reset();

// Run #2 - očekáváme Pass
console.log("Run #2:");
console.log("Result:", testCase.run("Dashboard is visible"));
testCase.printSummary();
