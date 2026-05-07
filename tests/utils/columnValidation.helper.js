// Validates task is placed inside of correct column

import { expect } from '@playwright/test';

export const columnValidator = async (page, columnName, taskName) => {

    // Sets a constant variable to look for the column name then grab the parent container
    const column = page
        .getByRole('heading', { name: columnName})
        .locator('..');

    // Ensures that the expected task is contained within the column
    await expect(column.getByText(taskName)).toBeVisible();

};