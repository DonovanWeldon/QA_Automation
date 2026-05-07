// Validates correct tag is associated with correct task

import { expect } from '@playwright/test';

export const tagsValidator = async (page, taskName, tagsName) => {

    // Sets a constant variable to look for the task name then grab the parent container
    const taskCard = page.getByRole('heading', { name: taskName }).locator('..');
    
    // Creates a constant text varible to contain all text on task card
    const text = await taskCard.innerText();

    //Compares all text to find actual tags expected
    for (const tag of tagsName) {
        expect(text).toContain(tag);
    }

};