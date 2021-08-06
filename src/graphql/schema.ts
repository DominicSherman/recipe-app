import path from 'path';

import { fieldAuthorizePlugin, makeSchema } from 'nexus';

import prettierConfig from '../../.prettierrc.js';

import * as types from './modules';

const currentDirectory = process.cwd();

export const schema = makeSchema({
  types,
  plugins: [fieldAuthorizePlugin()],
  outputs: {
    schema: path.join(currentDirectory, 'src/schema.graphql'),
    typegen: path.join(
      currentDirectory,
      'node_modules/@types/nexus-typegen/index.d.ts'
    ),
  },
  contextType: {
    module: path.join(currentDirectory, 'src/graphql/context.ts'),
    export: 'Context',
  },
  prettierConfig,
});
