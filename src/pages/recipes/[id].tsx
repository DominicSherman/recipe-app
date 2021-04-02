import { gql } from '@apollo/client';
import { NavBar } from 'components';
import { useRouter } from 'next/router';
import { stateToHTML } from 'draft-js-export-html';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import DraftEditor, {
  createEditorStateWithText,
} from '@draft-js-plugins/editor';
import { RichUtils } from 'draft-js';
import createMarkdownPlugin from 'draft-js-markdown-shortcuts-plugin';
import { useEffect, useRef, useState } from 'react';

import { useGetRecipeQuery, useUpdateRecipeMutation } from 'graphql-codegen';
import { useUserId } from 'utils';

const plugins = [createMarkdownPlugin()];

export const GET_RECIPE_QUERY = gql`
  query getRecipe($where: RecipeWhereUniqueInput!) {
    recipe(where: $where) {
      id
      userId
      title
      text
    }
  }

  mutation updateRecipe(
    $data: RecipeUpdateInput!
    $where: RecipeWhereUniqueInput!
  ) {
    updateOneRecipe(data: $data, where: $where) {
      id
      userId
      title
      text
    }
  }
`;

const getIdFromQuery = (id?: string | string[]): string => {
  if (!id || Array.isArray(id)) {
    return '';
  }

  return id;
};

export default function RecipeId() {
  const router = useRouter();
  const id = getIdFromQuery(router.query.id);
  const idIsInvalid = !id.length || Array.isArray(id);

  const response = useGetRecipeQuery({
    skip: idIsInvalid,
    variables: {
      where: {
        id,
      },
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const [updateRecipe] = useUpdateRecipeMutation({
    onError: (error) => {
      console.log('error', error);
    },
    onCompleted: () => {
      setIsEditing(false);
    },
  });

  const userId = useUserId();
  const recipeTitle = response.data?.recipe?.title;
  const recipeText = response.data?.recipe?.text;
  const userOwnsRecipe = Number(userId) === response.data?.recipe?.userId;

  const htmlText = recipeText
    ? stateToHTML(convertFromRaw(JSON.parse(recipeText)))
    : '';

  const [editorState, setEditorState] = useState(createEditorStateWithText(''));

  const onChange = (state) => {
    setEditorState(state);
  };

  useEffect(() => {
    const storeRaw = window.localStorage.getItem('rawContent');

    const content = storeRaw
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(storeRaw)))
      : createEditorStateWithText('');

    setEditorState(content);
  }, []);

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    window.localStorage.setItem('rawContent', JSON.stringify(rawContent));
  }, [editorState]);

  const editorRef = useRef<DraftEditor | null>();

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);

      return 'handled';
    }

    return 'not-handled';
  };

  const focus = () => editorRef.current?.focus();

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      <div className="w-full flex flex-col items-center">
        <div className="relative pt-16 flex flex-col justify-center items-center w-full max-w-2xl">
          {userOwnsRecipe && !isEditing ? (
            <button
              className="absolute top-4 right-4 btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          ) : null}
          {userOwnsRecipe && isEditing ? (
            <button
              className="btn absolute top-4 right-4 z-10"
              onClick={() =>
                updateRecipe({
                  variables: {
                    data: {
                      text: {
                        set: JSON.stringify(
                          convertToRaw(editorState.getCurrentContent())
                        ),
                      },
                    },
                    where: {
                      id,
                    },
                  },
                })
              }
            >
              Save
            </button>
          ) : null}
          {recipeTitle ? (
            <h1 className="text-primary">{recipeTitle}</h1>
          ) : (
            <div className="w-56 rounded-md h-8 animate-pulse bg-blue-300" />
          )}
          <div
            className={`mt-8 w-full relative p-6 min-h-[600px] ${
              isEditing ? 'bg-white cursor-text rounded-md shadow-md' : ''
            }`}
            onClick={focus}
          >
            {isEditing ? (
              <DraftEditor
                editorKey="SimpleInlineToolbarEditor"
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                onChange={onChange}
                plugins={plugins}
                ref={(element) => {
                  editorRef.current = element;
                }}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: htmlText }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
