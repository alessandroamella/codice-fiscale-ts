import { exec, spawn } from 'node:child_process';
import { promisify } from 'node:util';

const execPromise = promisify(exec);

/**
 * Execute a command and return its output
 */
async function runCommand(
  command: string,
  args: string[]
): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    const child = spawn(command, args, { stdio: ['inherit', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      resolve({ code: code || 0, stdout, stderr });
    });
  });
}

/**
 * Check if there are changes in the municipalities file
 */
async function hasChanges(): Promise<boolean> {
  const { stdout } = await execPromise(
    'git status --porcelain src/data/municipalities.ts'
  );
  return stdout.trim().length > 0;
}

/**
 * Create a commit with the changed municipalities file
 */
async function commitChanges(): Promise<void> {
  console.log('Committing changes to municipalities data...');

  // Stage the municipalities file
  const stageResult = await runCommand('git', [
    'add',
    'src/data/municipalities.ts'
  ]);
  if (stageResult.code !== 0) {
    console.error('Failed to stage changes:', stageResult.stderr);
    process.exit(1);
  }

  // Create the commit with a semantic-release compatible message
  const commitResult = await runCommand('git', [
    'commit',
    '-m',
    'feat: update municipalities data',
    '-m',
    'This commit updates the municipalities data from the official source.'
  ]);

  if (commitResult.code !== 0) {
    console.error('Failed to create commit:', commitResult.stderr);
    process.exit(1);
  }

  console.log('Successfully committed municipalities data changes');
}

async function main() {
  try {
    // Check if there are changes
    const changes = await hasChanges();

    if (changes) {
      // Commit the changes
      await commitChanges();
      console.log('Municipalities data updated and committed successfully');
    } else {
      console.log('No changes to municipalities data detected');
    }
  } catch (error) {
    console.error('Error committing municipalities update:', error);
    process.exit(1);
  }
}

// Run the script
main();
