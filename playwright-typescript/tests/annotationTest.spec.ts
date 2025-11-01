import {test,expect} from '@playwright/test'

/*
1. Skip - Unconditionally skip a test. Test is immediately aborted when you call [test.skip()](https://playwright.dev/docs/api/class-test#test-skip-2).
2. Skip with condition - Conditionally skip a test with an optional description.
3. Fail - Unconditionally marks a test as "should fail". Playwright Test runs this test and ensures that it is actually failing. This is useful for documentation purposes to acknowledge that some functionality is broken until it is fixed.
4. Fail with Condition - Conditionally mark a test as "should fail" with an optional description.
5. Fix me - Declares a test to be fixed, similarly to [test()](https://playwright.dev/docs/api/class-test#test-call). This test will not be run.
6. Slow - Unconditionally marks a test as "slow". Slow test will be given triple the default timeout.
7. Slow with Condition - Conditionally mark a test as "slow" with an optional description. Slow test will be given triple the default timeout.
8. Only - Declares a focused test. If there are some focused tests or suites, all of them will be run but nothing else.
*/

test.skip('Skipped test', async () => {
 console.log('This test is skipped');
});

test('skip in WebKit', async ({ page, browserName }) => {
  // Skips the test in WebKit with a message
  test.skip(browserName === 'webkit', 'This feature is not implemented for Mac');
  console.log('This test is skipped in WebKit');
});

test.fail('Not yet ready', async () => {
  console.log('Failed sample test');
});

test('fail in WebKit', async ({ page, browserName }) => {
  test.fail(browserName === 'webkit', 'This feature is not implemented for Mac yet');
  console.log('This test is expected to fail in WebKit');
});

test.fixme('Yet to fix the test', async () => {
  console.log('This test is marked as fixme');
});

// Marks this test as slow, increasing the timeout (typically 3x default timeout).
test('slow test', async ({ page }) => {
  test.slow(); // Useful if this test is known to take longer.
  // Add slow-running test code here.
});

test('slow in WebKit', async ({ page, browserName }) => {
  test.slow(browserName === 'webkit', 'This feature is slow on Mac');
  // Add test code here
});

// test.only('Executes Only this test', async ({ page }) => {
//   console.log("Only Test got executed");
//   // Add code here - only this will run in the suite due to test.only()
// });