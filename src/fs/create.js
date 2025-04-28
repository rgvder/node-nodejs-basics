import { writeFile } from 'node:fs/promises';

import { formatFsPath } from '../utils/fs/formatFsPath.js';
import { FsError } from '../utils/fs/FsError.js';

const filePath = formatFsPath('files', 'fresh.txt');

const create = async () => {
    try {
      await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
      if (error.code === 'EEXIST') {
        throw new FsError();
      } else {
        throw error;
      }
    }
};

await create();
