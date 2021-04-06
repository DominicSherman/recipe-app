import { convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

export const convertDraftStateTextToHtml = (draftStateText) =>
  draftStateText ? stateToHTML(convertFromRaw(JSON.parse(draftStateText))) : '';

export const convertDraftStateToString = (draftState) =>
  draftState
    ? JSON.stringify(convertToRaw(draftState.getCurrentContent()))
    : '';
