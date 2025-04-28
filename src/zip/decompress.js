import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { formatPath } from '../utils/formatPath.js';

const sourcePath = formatPath('zip', 'files', 'archive.gz');
const destinationPath = formatPath('zip', 'files', 'fileToCompress.txt');

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  await pipeline(source, gunzip, destination);
};

await decompress();
