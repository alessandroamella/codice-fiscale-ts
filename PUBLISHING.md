# Publishing Guide for codice-fiscale-ts

This package uses [semantic-release](https://github.com/semantic-release/semantic-release) to automate the versioning and publishing process. The entire process is automated through GitHub Actions.

## How It Works

1. Every time changes are pushed to the `main` branch (or other configured branches like `next`, `beta`, or `alpha`), the GitHub Actions workflow will run.
2. The workflow will:
   - Install dependencies
   - Run linting
   - Type check the code
   - Run tests
   - Build the package
   - Analyze the commit messages to determine the new version (using semantic-release)
   - Publish the package to npm
   - Create a release on GitHub with release notes

## Required Setup

Publishing uses [npm trusted publishing](https://docs.npmjs.com/trusted-publishers) (OIDC): no npm token is stored in the repository, and every release gets a provenance attestation.

To configure it (one time only):

1. Log in to https://www.npmjs.com/ and open the `codice-fiscale-ts` package settings
2. Under "Trusted Publisher", choose **GitHub Actions** and fill in:
   - Organization or user: `alessandroamella`
   - Repository: `codice-fiscale-ts`
   - Workflow filename: `codice-fiscale-ts.yml`
3. Optionally, under "Publishing access", require 2FA and disallow tokens

The weekly municipalities update doesn't publish by itself: after pushing new data it dispatches `codice-fiscale-ts.yml`, so that workflow is the only one that needs to be trusted. The workflows already request the `id-token: write` permission needed for OIDC. `GITHUB_TOKEN` is provided automatically by GitHub Actions.

## Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification to determine the next version number. Your commit messages should follow this format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types that will trigger a new release:

- `fix:` - patches a bug (PATCH version)
- `feat:` - adds a new feature (MINOR version)
- `BREAKING CHANGE:` - introduces a breaking API change (MAJOR version)

Examples:

- `fix: correct parsing of birth date` (will release a PATCH version)
- `feat: add support for foreign municipalities` (will release a MINOR version)
- `feat!: change API to use class-based approach` (will release a MAJOR version)

## Manual Publishing (if needed)

Releases are meant to go through GitHub Actions (trusted publishing and provenance only work there). To re-run a release, re-run the failed workflow from the Actions tab, or push a new commit.

## Troubleshooting

If the automated release fails:

1. Check the GitHub Actions logs for errors
2. Verify that the trusted publisher on npmjs.com matches the repository and workflow filename
3. Ensure your commit messages follow the Conventional Commits format
4. If necessary, you can manually trigger a new workflow run by pushing a new commit
