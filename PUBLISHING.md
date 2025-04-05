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

To enable automated publishing, you need to set up the following GitHub repository secrets:

1. **NPM_TOKEN**: An npm access token with publish permissions
   - Log in to your npm account at https://www.npmjs.com/
   - Go to your profile settings
   - Select "Access Tokens"
   - Create a new token with "Automation" type
   - Set the appropriate permissions (make sure "publish" is enabled)
   - Copy the token and add it as a secret in your GitHub repository

To add the secret to your GitHub repository:

1. Go to your GitHub repository
2. Click on "Settings"
3. Go to "Secrets and variables" > "Actions"
4. Click "New repository secret"
5. Name it `NPM_TOKEN` and paste your npm token as the value
6. Click "Add secret"

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

If you need to trigger a manual release:

1. Clone the repository
2. Set up the required environment variables:
   ```bash
   export NPM_TOKEN=your_npm_token
   export GITHUB_TOKEN=your_github_token
   ```
3. Run the release process:
   ```bash
   npm run semantic-release
   ```

## Troubleshooting

If the automated release fails:

1. Check the GitHub Actions logs for errors
2. Verify that your NPM_TOKEN is valid and has publish permissions
3. Ensure your commit messages follow the Conventional Commits format
4. If necessary, you can manually trigger a new workflow run by pushing a new commit
