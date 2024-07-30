// Copyright (C) 2024 Intel Corporation
// SPDX-License-Identifier: Apache-2.0

import { test, expect, type Page } from "@playwright/test";
import { fileURLToPath } from "url";
import path from "path";

// Get the path of the current file
const __filename = fileURLToPath(import.meta.url);
// Get the directory path of the current file
const __dirname = path.dirname(__filename);

// Define the file path
const FILE_PATH = path.resolve(__dirname, "test_audio.wav");

// Initialization before each test
test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

// Constants definition


// Helper function: Enter message to chat
async function enterMessageToChat(page: Page) {
	await page.getByTestId("audio-input").click();
	// play audio
	await page.evaluate((filePath) => {
        const audio = new Audio(filePath);
        audio.play();
    }, FILE_PATH);

	await page.waitForTimeout(10000);
	await page.getByTestId("audio-input").click();
	await page.waitForTimeout(10000);
	await expect(page.getByTestId("display-answer")).toBeVisible();
}



// Test description: New Chat
test.describe("New Chat", () => {
	// Test: Enter message to chat
	test("should enter message to chat", async ({ page }) => {
		await enterMessageToChat(page);
	});
});

