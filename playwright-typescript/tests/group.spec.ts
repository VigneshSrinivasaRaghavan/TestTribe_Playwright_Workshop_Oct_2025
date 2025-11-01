import { test, expect } from '@playwright/test';

test.describe("Suite 1",()=>{
test.beforeAll(async () => {
  console.log("Database Connection setup")
});

test.beforeEach(async () => {
  console.log("Clearing Cookies")
});

test.afterEach(async () => {
  console.log("Cache Removal")
});

test.afterAll(async () => {
  console.log("Database Connection disconnect")
});

test('Test 1', async () => {
  console.log("Test 1 Block")
});

test('Test 2', async () => {
  console.log("Test 2 Block")
});
})

test.describe("Suite 2",()=>{

test.beforeEach(async () => {
  console.log("Clearing 2")
});

test.afterEach(async () => {
  console.log("Cache 2l")
});

test('Test 3', async () => {
  console.log("Test 3 Block")
});

test('Test 4', async () => {
  console.log("Test 4 Block")
});
})
