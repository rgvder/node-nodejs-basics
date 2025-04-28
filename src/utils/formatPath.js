import { join } from 'node:path';

export const formatPath = (...pathStrings) => {
  return join(import.meta.dirname, '..', '..', 'src', ...pathStrings);
}
