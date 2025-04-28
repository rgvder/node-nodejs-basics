import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { formatPath } from '../utils/formatPath.js';

const sourcePath = formatPath('zip', 'files', 'fileToCompress.txt');
const destinationPath = formatPath('zip', 'files', 'archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  await pipeline(source, gzip, destination);
};

await compress();
