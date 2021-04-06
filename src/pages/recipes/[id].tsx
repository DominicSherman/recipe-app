import { gql } from '@apollo/client';
import { NavBar } from 'components';
import { useRouter } from 'next/router';
import { stateToHTML } from 'draft-js-export-html';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { createEditorStateWithText } from '@draft-js-plugins/editor';
import { useEffect, useRef, useState } from 'react';

import { useGetRecipeQuery, useUpdateRecipeMutation } from 'graphql-codegen';
import { useUserId } from 'utils';
import Editor from 'components/editor';

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
  const [editingTitle, setEditingTitle] = useState('');

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

  useEffect(() => {
    if (recipeTitle && recipeTitle !== editingTitle) {
      setEditingTitle(recipeTitle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeTitle, setEditingTitle]);

  const editorRef = useRef<any | null>();

  const focus = () => editorRef.current?.focus();

  return (
    <div className="w-screen h-screen flex flex-col bg-primary">
      <NavBar />
      <div className="w-full flex flex-col items-center">
        <div className="relative pt-16 flex flex-col justify-center w-full max-w-2xl">
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
              onClick={() => {
                const titleProp = editingTitle
                  ? { title: { set: editingTitle } }
                  : {};

                updateRecipe({
                  variables: {
                    data: {
                      ...titleProp,
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
                });
              }}
            >
              Save
            </button>
          ) : null}
          {recipeTitle ? (
            isEditing ? (
              <input
                className="text-5xl text-primary font-extrabold mb-2 font rounded-md appearance-none flex justify-center p-2 w-full"
                onChange={(e) => setEditingTitle(e.target.value)}
                value={editingTitle}
              />
            ) : (
              <h1 className="text-5xl text-primary pb-2">{recipeTitle}</h1>
            )
          ) : (
            <div className="w-56 rounded-md h-8 animate-pulse bg-blue-300 pb-2" />
          )}
          <div
            className={`w-full relative p-4 min-h-[600px] ${
              isEditing ? 'bg-white cursor-text rounded-md shadow-md' : ''
            }`}
            onClick={focus}
          >
            {isEditing ? (
              <Editor
                editorState={editorState}
                onChange={onChange}
                ref={editorRef}
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
