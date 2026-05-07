// Validates navigation to correct page using specific item shown on page

import { expect } from '@playwright/test';

export const pageValidator = async (page, pageName, taskName) => {

    // constant variable to hold current task being searched for
    const taskVisible = await page
        .getByText(taskName)
        .isVisible();
    
    // boolean check if user is already on the correct page
    if (taskVisible) {
        return;
    }
    
    // Routing user to correct page and checking if current task being searched for is visible on page
    await page.locator(`nav >> text=${ pageName }`).click();

    await expect(page.getByText( taskName )).toBeVisible();

};