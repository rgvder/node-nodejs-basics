import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

import { formatFsPath } from '../utils/fs/formatFsPath.js';
import { FsError } from '../utils/fs/FsError.js';

const folderPath = formatFsPath('files');
const newFolderPath = formatFsPath('files_copy');

const copy = async () => {
  if (!existsSync(folderPath) || existsSync(newFolderPath)) {
    throw new FsError();
  }

  await mkdir(newFolderPath);

  const files = await readdir(folderPath);

  if (files && files.length) {
    const promises = files.map(file => {
      const oldFilePath = formatFsPath('files', file);
      const newFilePath = formatFsPath('files_copy', file);

      copyFile(oldFilePath, newFilePath);
    })

    await Promise.all(promises);
  }
};

await copy();
