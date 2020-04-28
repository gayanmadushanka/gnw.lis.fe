import { combineEpics } from "redux-observable";

import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import {
  FETCH_TEMPLATES,
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
  GENERATE_DOCUMENT,
  generateDocumentSuccess,
  generateDocumentFailure,
} from "../actions";

const fetchTemplatesUrl = "http://localhost:3000/api/v1/document/templates";

function fetchTemplatesEpic(action$) {
  return action$.ofType(FETCH_TEMPLATES).pipe(
    switchMap(() => {
      return ajax.getJSON(fetchTemplatesUrl).pipe(
        map((templates) =>
          templates.map((template) => ({
            id: template,
            name: template,
          }))
        )
      );
    }),
    map((templates) => fetchTemplatesSuccess(templates)),
    catchError((error) => of(fetchTemplatesFailure(error.message)))
  );
}

const generateDocumentUrl = "http://localhost:3000/api/v1/document/generate";

function generateDocumentEpic(action$) {
  return action$.ofType(GENERATE_DOCUMENT).pipe(
    switchMap(() => {
      return ajax.getJSON(generateDocumentUrl);
    }),
    map((templates) => generateDocumentSuccess(templates)),
    catchError((error) => of(generateDocumentFailure(error.message)))
  );
}
export const rootEpic = combineEpics(fetchTemplatesEpic, generateDocumentEpic);
