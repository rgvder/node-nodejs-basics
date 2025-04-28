import { createReadStream } from 'node:fs';

import { formatPath } from '../utils/formatPath.js';

const filePath = formatPath('streams', 'files', 'fileToRead.txt');

const read = async () => {
  const rs = createReadStream(filePath);

  rs.pipe(process.stdout);
};

await read();
