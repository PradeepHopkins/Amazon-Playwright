# Amazon Playwright Test Suite

A comprehensive automation test suite for Amazon website using Playwright with TypeScript, featuring page object models, allure reporting, and CI/CD integration.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [CI/CD Pipeline](#cicd-pipeline)
- [Configuration](#configuration)

## 🎯 Overview

This project automates testing of key Amazon website functionalities including:
- Home page navigation
- Product search and filtering
- Product details viewing
- Shopping cart operations

### Technology Stack

- **Framework**: Playwright
- **Language**: TypeScript
- **Test Runner**: Playwright Test
- **Reporting**: Allure Reports + JUnit XML + HTML
- **CI/CD**: GitHub Actions
- **Node.js**: v18.x

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v18.x or higher ([Download](https://nodejs.org/))
- **npm** v8.x or higher (comes with Node.js)
- **Git** (for version control)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Amazon-Playwright
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install --with-deps chromium
   ```

## 📁 Project Structure

```
Amazon-Playwright/
├── tests/
│   └── amazon.spec.ts              # Main test suite
├── pages/
│   ├── home.page.ts                # Home page object model
│   ├── search-results.page.ts       # Search results page object model
│   ├── product.page.ts             # Product details page object model
│   └── cart.page.ts                # Shopping cart page object model
├── utils/
│   ├── page-helper.ts              # Helper functions for page interactions
│   └── test-data.ts                # Test data and constants
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Dependencies and project metadata
├── .github/workflows/
│   └── playwright.yml              # GitHub Actions CI/CD workflow
├── playwright-report/              # HTML test report (generated)
├── allure-results/                 # Allure report data (generated)
├── results/                        # Test results outputs (generated)
└── README.md                       # This file
```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run a specific test file
```bash
npx playwright test tests/amazon.spec.ts
```

### Run tests matching a pattern
```bash
npx playwright test --grep "search"
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests on specific browsers
```bash
npx playwright test --project=chromium
```

## 📊 Test Reports

### HTML Report
After test execution, open the HTML report:
```bash
npx playwright show-report
```
Report location: `playwright-report/index.html`

### Allure Report
Generate and open Allure report:
```bash
npx allure generate allure-results --output allure-report --clean
npx allure open allure-report
```

### JUnit Report
XML results are generated at: `results/junit.xml`

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project uses GitHub Actions for continuous integration. The workflow:

- **Trigger**: Runs on pull requests to `main` and `develop` branches
- **Node Version**: v18.x
- **Parallel Execution**: Optimized for CI environment
- **Retries**: Automatic retry (1 retry) for network failures on:
  - Dependency installation
  - Playwright browser installation
  - Test execution
- **Artifacts**: Automatically uploads test reports

#### Workflow Features
- ✅ Parallel test execution with fail-fast disabled
- ✅ Automatic network error retry logic
- ✅ HTML report upload
- ✅ JUnit XML report upload
- ✅ Allure results upload
- ✅ Test results published as PR comments

**Workflow File**: `.github/workflows/playwright.yml`

## ⚙️ Configuration

### Playwright Config (`playwright.config.ts`)

Key configurations:
- **Test Directory**: `./tests`
- **Parallel Execution**: Fully parallel (local), sequential (CI)
- **Retries**: 0 (local), 1 (CI)
- **Timeouts**: Default is 30 seconds per test
- **Reporters**: List, HTML, JUnit, Allure
- **Trace**: Retained on failure for debugging
- **Screenshots**: Captured on failure only

## 📝 Test Best Practices

1. **Page Object Model**: All page interactions use page objects for maintainability
2. **Wait Strategies**: Playwright's auto-wait is configured for stability
3. **Reporting**: Tests are integrated with Allure for detailed reporting
4. **Data Management**: Use `test-data.ts` for test data and constants
5. **Helpers**: Common functions are in `page-helper.ts`

## 🐛 Debugging

### Debug a specific test
```bash
npx playwright test tests/amazon.spec.ts --debug
```

### View test traces
Traces are captured on failure: `test-results/`

### Run with logging
```bash
DEBUG=pw:api npx playwright test
```

## 📚 Useful Commands

| Command | Description |
|---------|-------------|
| `npm ci` | Clean install dependencies |
| `npx playwright install` | Install Playwright browsers |
| `npx playwright test` | Run all tests |
| `npx playwright test --headed` | Run with visible browser |
| `npx playwright test --debug` | Debug mode |
| `npx playwright test --ui` | Interactive UI mode |
| `npx playwright show-report` | View HTML report |

## 📖 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Allure Reports](https://docs.qameta.io/allure/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Last Updated**: March 2026
