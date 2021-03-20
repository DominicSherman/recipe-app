import path from 'path';

import { fieldAuthorizePlugin, makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

import prettierConfig from '../../.prettierrc.js';

import * as types from './modules';

const nexusTypegenDirectory = path.join(
  process.cwd(),
  '..',
  '..',
  'node_modules/@types/nexus-typegen/index.d.ts'
);

export const schema = makeSchema({
  types,
  plugins: [
    fieldAuthorizePlugin(),
    nexusPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: nexusTypegenDirectory,
      },
    }),
  ],
  outputs: {
    schema: path.join(__dirname, 'schema.graphql'),
    typegen: nexusTypegenDirectory,
  },
  prettierConfig,
});
