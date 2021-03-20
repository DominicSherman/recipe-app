import path from 'path';

import { fieldAuthorizePlugin, makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

import prettierConfig from '../../.prettierrc.js';

import * as types from './modules';

export const schema = makeSchema({
  types,
  plugins: [
    fieldAuthorizePlugin(),
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: path.join(__dirname, '..', 'schema.graphql'),
    typegen: path.join(__dirname, '..', 'nexus-typegen.ts'),
  },
  prettierConfig,
});
