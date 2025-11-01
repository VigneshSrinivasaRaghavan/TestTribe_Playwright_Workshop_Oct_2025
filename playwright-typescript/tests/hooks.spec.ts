import { test, expect } from '@playwright/test';

test.beforeAll(async ({ }) => {
  console.log('Before All Block'); 
});

test.beforeEach(async ({ }) => { 
  console.log('Login Block');
});

test('Test 1', async ({ }) => {
  console.log('Test 1');
});

test('Test 2', async ({ }) => {
  console.log('Test 2');
});

test.afterEach(async ({ }) => { 
  console.log('Logout Block');
});

test.afterAll(async ({ }) => { 
  console.log('After All Hook');
});