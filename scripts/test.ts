import { spawn } from 'node:child_process';

async function runTests({
  nodeOptions = [],
  filesFilter = '',
  program = 'node',
  programOptions = [],
  env = {}
}: {
  nodeOptions?: string[];
  filesFilter?: string;
  program?: string;
  programOptions?: string[];
  env?: Record<string, string>;
}): Promise<void> {
  const time = Date.now();

  return new Promise((resolve, reject) => {
    const nodeProcess = spawn(
      program,
      [
        ...programOptions,
        '--disable-warning=ExperimentalWarning',
        '--experimental-strip-types',
        '--test',
        ...nodeOptions,
        filesFilter !== '' ? filesFilter : 'src/**/*.test.ts'
      ],
      { stdio: 'inherit', env: { ...process.env, ...env } }
    );

    // print logs
    nodeProcess.on('message', (message) => {
      console.log('MESSAGE:', message);
    });

    nodeProcess.on('close', (code) => {
      if (code === 0) {
        console.log(`🚀 ran tests in ${Date.now() - time}ms`);

        resolve();
        return;
      }

      reject(`🚨 tests failed with code ${code} in ${Date.now() - time}ms`);
    });
  });
}

if (import.meta.main) {
  const filesFilter = process.argv.slice(3).join(' ').trim();

  if (process.argv[2] === 'test') {
    await runTests({ filesFilter });
  }

  if (process.argv[2] === 'test:inspect') {
    await runTests({ nodeOptions: ['--inspect'], filesFilter });
  }

  if (process.argv[2] === 'test:watch') {
    await runTests({ nodeOptions: ['--watch'], filesFilter });
  }

  if (process.argv[2] === 'test:coverage') {
    await runTests({
      nodeOptions: ['--experimental-test-coverage'],
      program: 'c8',
      programOptions: ['-r', 'html', 'node'],
      env: {
        NODE_V8_COVERAGE: './coverage'
      }
    });
  }
}
