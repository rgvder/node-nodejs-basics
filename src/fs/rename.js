import { rename as nodeRename } from 'node:fs/promises';
import { existsSync } from 'node:fs';

import { formatFsPath } from '../utils/fs/formatFsPath.js';
import { FsError } from '../utils/fs/FsError.js';

const oldFilePath = formatFsPath('files', 'wrongFilename.txt');
const newFilePath = formatFsPath('files', 'properFilename.md');

const rename = async () => {
  if (!existsSync(oldFilePath) || existsSync(newFilePath)) {
    throw new FsError();
  }

  await nodeRename(oldFilePath, newFilePath);
};

await rename();
