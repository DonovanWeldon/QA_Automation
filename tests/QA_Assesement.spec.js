// @ts-check
import { test } from '@playwright/test';
import { login, columnValidator, pageValidator, tagsValidator } from './utils';
import { testCases } from './data/epxectations';


// Main testing setup

test.describe('Task Validation testing', () => {

  //Login before each test
  test.beforeEach(async ({ page }) => {

    await login(page)

  });

  //looping to run tests on all data sets
  for (const tc of testCases) {

    test(`Validate ${tc.expectedTask}`, async ({ page }) => {

      await pageValidator(page, tc.expectedPage, tc.expectedTask);
      await columnValidator(page, tc.expectedColumn, tc.expectedTask);
      await tagsValidator(page, tc.expectedTask, tc.expectedTags);

    });
  };


});


