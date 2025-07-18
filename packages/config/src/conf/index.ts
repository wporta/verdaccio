import { join } from 'node:path';

import { parseConfigFile } from '../parse';

export function getDefaultConfig(fileName: string = 'default.yaml') {
  const file = join(__dirname, `./${fileName}`);
  return parseConfigFile(file);
}
