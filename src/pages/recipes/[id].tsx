import {
  Page,
  convertDraftStateTextToHtml,
  Editor,
  EditOrSaveButton,
  Title,
  useEditorContext,
  useEditorPersistence,
  useRecipe,
  EditorProvider,
} from 'components';
import { useGlobalKeybindings } from 'components/edit-recipe/keybindings';

const ViewRecipePage = () => {
  const recipe = useRecipe();
  const htmlText = convertDraftStateTextToHtml(recipe.text);

  const { isEditing, focus } = useEditorContext();

  useEditorPersistence();
  useGlobalKeybindings();

  return (
    <Page>
      <div className="w-full flex flex-col items-center p-4">
        {recipe ? (
          <div className="relative pt-16 flex flex-col justify-center w-full max-w-3xl">
            <EditOrSaveButton />
            <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
              <img
                alt="recipe"
                className="w-full h-full object-cover"
                src="/header-image.jpg"
              />
            </div>
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
    </Page>
  );
};

export default function RecipeId() {
  return (
    <EditorProvider>
      <ViewRecipePage />
    </EditorProvider>
  );
}
