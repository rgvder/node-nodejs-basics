import { fork } from 'node:child_process';
import { pipeline } from 'node:stream/promises';

import { formatPath } from '../utils/formatPath.js';

const filePath = formatPath('cp', 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const cd = fork(filePath, args, { silent: true });

  await Promise.all([
    pipeline(process.stdin, cd.stdin),
    pipeline(cd.stdout, process.stdout),
  ]);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
