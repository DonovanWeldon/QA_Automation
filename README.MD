# Task Board UI Assessment (Playwright + Node.js)

## Overview

This project is an automated UI testing suite built with **Playwright (Node.js)** to validate core functionality of a backlog/task board application.  
It focuses on ensuring that critical user workflows and data integrity remain consistent across deployments.

The suite performs an initial assessment of:

- User authentication before each test
- Page navigation and routing behavior
- Task visibility within correct board columns
- Validation of task metadata (tags/labels)

---

## 🧪 Test Coverage

### 1. Authentication
Each test begins with an authenticated session to simulate a real user workflow.

- Logs in before execution of test cases
- Ensures session persistence across page navigation
- Validates access to protected routes

---

### 2. Page Navigation
Verifies that users can reliably navigate through the application.

- Confirms correct routing after login
- Ensures expected pages load without errors
- Validates key UI components render properly

---

### 3. Task Board Validation
Checks that backlog items are displayed in the correct state.

- Confirms tasks appear in the correct column (e.g., To Do, In Progress, Done)
- Validates task presence against expected dataset
- Ensures UI reflects backend state accurately

---

### 4. Tag / Label Integrity
Ensures metadata associated with tasks is correct.

- Verifies task tags match expected values
- Confirms no missing or duplicated labels
- Ensures consistency between UI and data source

---

## 🧩 Challenges & Workarounds

### 1. Unstable Page Navigation State Detection

One of the main challenges was reliably validating page navigation within the task board.

The application did not expose:
- Distinct URL routes for different board views (no meaningful URL extensions)
- Stable DOM state indicators for active navigation items
- Reliable attributes beyond Tailwind-based styling classes

This made it difficult to assert navigation correctness using traditional methods such as URL validation or active-state selectors.

#### 🔧 Workaround Implemented

To address this, navigation validation was based on **task presence within each board view** rather than UI state indicators.

- Each board column contains a unique subset of tasks
- Tasks are not duplicated across different views
- Assertions were built around the **visibility of tasks** rather than navigation button state

This approach provided a more reliable and deterministic validation method by tying test outcomes to application data instead of styling cues.

---

## 🛠 Tech Stack

- Node.js
- Playwright Test Runner
- JavaScript / TypeScript (if applicable)
- Browser automation (Chromium / Firefox / WebKit)

---

## 🚀 Setup & Installation

```bash
git clone git@github.com:username/repo-name.git
cd repo-name
npm install