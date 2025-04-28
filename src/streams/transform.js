import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

import { formatChunkToReversedStr } from '../utils/streams/formatChunkToReversedStr.js';

const transform = async () => {
  const ts = new Transform({
    transform(chunk, _, callback) {
        callback(null, formatChunkToReversedStr(chunk) + '\n');
    }
  })

  await pipeline(process.stdin, ts, process.stdout);
};

await transform();
