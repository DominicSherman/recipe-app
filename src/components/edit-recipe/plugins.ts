import createMarkdownPlugin from 'draft-js-markdown-shortcuts-plugin';
import createToolbarPlugin, {
  Separator,
} from '@draft-js-plugins/static-toolbar';

const toolbarPlugin = createToolbarPlugin();

export const plugins = [createMarkdownPlugin(), toolbarPlugin];

export const Toolbar = toolbarPlugin.Toolbar;
export { Separator };
