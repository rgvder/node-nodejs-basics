import { createWriteStream } from 'node:fs';

import { formatPath } from '../utils/formatPath.js';

const filePath = formatPath('streams', 'files', 'fileToWrite.txt');

const write = async () => {
  const ws = createWriteStream(filePath);

  process.stdin.pipe(ws);
};

await write();
