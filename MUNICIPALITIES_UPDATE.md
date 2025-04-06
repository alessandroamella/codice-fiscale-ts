# Municipalities Data Update Process

This document explains how the municipalities data is automatically updated in the `codice-fiscale-ts` package.

## Overview

Italian municipalities data is periodically fetched from an official source to ensure the package has the most up-to-date information. This process is automated through a GitHub Actions workflow that runs on a schedule.

## How It Works

1. A scheduled GitHub Actions workflow runs every Monday at 3 AM UTC
2. The workflow executes the `update-municipalities.ts` script which:
   - Fetches municipalities data from the ISTAT API (`https://situas-servizi.istat.it/publish/reportspooljson?pfun=61&pdata=01/01/1948`)
   - Compares it with the current data in `src/data/municipalities.ts`
   - Updates the file if changes are detected
3. If changes are found, a commit is created with a semantic-release compatible message (`feat: update municipalities data`)
4. The changes are pushed to the repository
5. A new release is automatically created and published according to semantic versioning

## Manual Trigger

You can manually trigger the update process by:

1. Going to the GitHub repository
2. Navigating to the "Actions" tab
3. Selecting the "Update Municipalities" workflow
4. Clicking "Run workflow"

## Local Usage

You can also run the update process locally:

```bash
# Using npm scripts
npm run update-municipalities # Only update the data file
npm run commit-municipalities-update # Only commit changes if they exist
npm run update-and-commit # Update data and commit in one step

# or with pnpm
pnpm update-municipalities
pnpm commit-municipalities-update
pnpm update-and-commit
```

## Data Source

The municipalities data is sourced from the ISTAT (Italian National Institute of Statistics) API. The data includes the official cadastral codes, municipality names, and province abbreviations needed for fiscal code calculations.

The script handles municipalities with special characters (including apostrophes) by using JSON format for the data storage, ensuring reliable parsing and comparison.

## Automatic Release

When municipalities data is updated through the GitHub workflow, the commit message follows semantic-release conventions (`feat: update municipalities data`). This triggers the semantic-release process to:

1. Create a new minor version (since it's a feature commit)
2. Generate release notes
3. Publish the new version to npm
4. Create a GitHub release

This ensures that consumers of the package always have access to the most up-to-date municipalities data without manual intervention.

## Troubleshooting

If you encounter issues with the update process:

1. Check the logs of the GitHub Actions workflow for error messages
2. Verify that the API URL is still accessible and returning the expected data format
3. Run the update script locally to debug specific issues
