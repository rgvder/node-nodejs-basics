import { unlink } from 'node:fs/promises';

import { formatFsPath } from '../utils/fs/formatFsPath.js';
import { FsError } from '../utils/fs/FsError.js';

const filePath = formatFsPath('files', 'fileToRemove.txt');

const remove = async () => {
  try {
   await unlink(filePath);
  } catch {
    throw new FsError();
  }
};

await remove();
