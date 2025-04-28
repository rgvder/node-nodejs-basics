import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

import { formatPath } from '../utils/formatPath.js';

const filePath = formatPath('hash', 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256')
  const rs = createReadStream(filePath);

  rs.pipe(hash);

  hash.on('finish', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
