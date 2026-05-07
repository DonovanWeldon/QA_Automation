// Reusuable login testing feature to be given a username and corresponding password
// Also verify whether homepage was successfully navigated to or not
import { expect } from '@playwright/test';

export const login = async (page) => {
    
    // Base_URL, Username, and password set in console for reusability
    await page.goto(process.env.BASE_URL);
    await page.fill('#username', process.env.USERNAME);
    await page.fill('#password', process.env.PASSWORD);

    // Click the submit button to login
    await page.click('button[type="submit"]');

    // expect page navigation to homepage
    await expect(page.getByRole('heading', { name: 'Projects'})).toBeVisible();
};

