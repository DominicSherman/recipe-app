import { createEditorStateWithText } from '@draft-js-plugins/editor';
import React, { useContext, useState } from 'react';
import { useRef } from 'react';

const EditorContext = React.createContext<{
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
  editingTitle: string;
  setEditingTitle: (v: string) => void;
  editorState: any;
  setEditorState: (v: any) => void;
  editorRef: any | null;
  onChange: (v: any) => void;
  focus: () => void;
}>({
  isEditing: false,
  setIsEditing: () => ({}),
  editingTitle: '',
  setEditingTitle: () => ({}),
  editorState: createEditorStateWithText(''),
  setEditorState: () => ({}),
  editorRef: null,
  onChange: () => ({}),
  focus: () => ({}),
});

export const EditorProvider = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState('');
  const [editorState, setEditorState] = useState(createEditorStateWithText(''));
  const editorRef = useRef<any | null>();

  const onChange = (value) => setEditorState(value);
  const focus = () => editorRef.current?.focus();

  const value = {
    isEditing,
    setIsEditing,
    editingTitle,
    setEditingTitle,
    editorState,
    setEditorState,
    editorRef,
    onChange,
    focus,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
