import { NavBar } from 'components';
import {
  convertDraftStateTextToHtml,
  Editor,
  EditOrSaveButton,
  Title,
  useEditorContext,
  useEditorPersistence,
  useRecipe,
} from 'components/edit-recipe';
import { EditorProvider } from 'components/edit-recipe/editor-context';
import { useGlobalKeybindings } from 'components/edit-recipe/keybindings';

const ViewRecipePage = () => {
  const recipe = useRecipe();
  const htmlText = convertDraftStateTextToHtml(recipe.text);

  const { isEditing, focus } = useEditorContext();

  useEditorPersistence();
  useGlobalKeybindings();

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      <div className="w-full flex flex-col items-center">
        {recipe ? (
          <div className="relative pt-16 flex flex-col justify-center w-full max-w-2xl">
            <EditOrSaveButton />
            <Title />
            <div
              className={`w-full relative p-4 min-h-[500px] ${
                isEditing ? 'bg-white cursor-text rounded-md' : ''
              }`}
              onClick={focus}
            >
              {isEditing ? (
                <Editor />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: htmlText }} />
              )}
            </div>
          </div>
        ) : (
          <div className="relative pt-16 flex flex-col justify-center w-full max-w-2xl">
            <div className="w-56 rounded-md h-12 animate-pulse bg-gray-300 pb-2 mb-2" />
            <div className=" w-full h-[600px] rounded-md animate-pulse bg-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default function RecipeId() {
  return (
    <EditorProvider>
      <ViewRecipePage />
    </EditorProvider>
  );
}
