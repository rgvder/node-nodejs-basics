import { readFile } from 'node:fs/promises';

import { formatFsPath } from '../utils/fs/formatFsPath.js';
import { FsError } from '../utils/fs/FsError.js';

const filePath = formatFsPath('files', 'fileToRead.txt');

const read = async () => {

  try {
    const content = await readFile(filePath, 'utf8');

    if (content) {
      console.log(content);
    }
  } catch {
    throw new FsError();
  }
};

await read();
