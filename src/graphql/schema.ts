import path from 'path';

import { fieldAuthorizePlugin, makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

import prettierConfig from '../../.prettierrc.js';

import * as types from './modules';

const currentDirectory = process.cwd();

export const schema = makeSchema({
  types,
  plugins: [
    fieldAuthorizePlugin(),
    nexusPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: path.join(
          currentDirectory,
          'node_modules/@types/typegen-nexus-plugin-prisma/index.d.ts'
        ),
      },
    }),
  ],
  outputs: {
    schema: path.join(currentDirectory, 'src/schema.graphql'),
    typegen: path.join(
      currentDirectory,
      'node_modules/@types/nexus-typegen/index.d.ts'
    ),
  },
  contextType: {
    module: path.join(__dirname, './context.ts'),
    export: 'Context',
  },
  prettierConfig,
});
