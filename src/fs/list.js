import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

import { formatFsPath } from '../utils/fs/formatFsPath.js';
import { FsError } from '../utils/fs/FsError.js';

const folderPath = formatFsPath('files');

const list = async () => {
  if (!existsSync(folderPath)) {
    throw new FsError();
  }

  const files = await readdir(folderPath);

  if (files) {
    console.log(files);
  }
};

await list();
