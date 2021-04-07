import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

export const convertDraftStateTextToHtml = (draftStateText) =>
  draftStateText ? stateToHTML(convertFromRaw(JSON.parse(draftStateText))) : '';

export const convertDraftStateToString = (draftState) =>
  draftState
    ? JSON.stringify(convertToRaw(draftState.getCurrentContent()))
    : '';

export const convertStringToDraftState = (draftStateText) =>
  EditorState.createWithContent(convertFromRaw(JSON.parse(draftStateText)));
