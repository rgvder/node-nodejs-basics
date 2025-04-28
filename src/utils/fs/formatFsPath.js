import { formatPath } from '../formatPath.js';

export const formatFsPath = (...pathStrings) => {
  return formatPath('fs', ...pathStrings);
}
