import { combineEpics } from "redux-observable";

import { of, from } from "rxjs";
import { switchMap, map, flatMap, catchError } from "rxjs/operators";

import {
  FETCH_TEMPLATES,
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
  GENERATE_DOCUMENT,
  generateDocumentSuccess,
  generateDocumentFailure,
} from "../actions";

const fetchTemplatesUrl = "http://localhost:3000/api/v1/document/templates";

const fetchTemplatesEpic = (action$) => {
  return action$.ofType(FETCH_TEMPLATES).pipe(
    switchMap(() => {
      return from(fetch(fetchTemplatesUrl)).pipe(
        flatMap((response) => response.json())
      );
    }),
    map((templates) => fetchTemplatesSuccess(templates)),
    catchError((error) => of(fetchTemplatesFailure(error.message)))
  );
};

const generateDocumentUrl = "http://localhost:3000/api/v1/document/generate";

const generateDocumentEpic = (action$) => {
  return action$.ofType(GENERATE_DOCUMENT).pipe(
    switchMap(() => {
      return from(fetch(generateDocumentUrl)).pipe(
        flatMap((response) => response.json())
      );
    }),
    map((message) => generateDocumentSuccess(message)),
    catchError((error) => of(generateDocumentFailure(error.message)))
  );
};

// const downloadDocumentUrl = "http://localhost:3000/api/v1/document/download";

// const downloadDocumentEpic = (action$) => {
//   return action$.ofType(GENERATE_DOCUMENT).pipe(
//     switchMap(() => {
//       return ajax.getJSON(downloadDocumentUrl);
//     }),
//     map((templates) => generateDocumentSuccess(templates)),
//     catchError((error) => of(generateDocumentFailure(error.message)))
//   );
// };

export const rootEpic = combineEpics(
  fetchTemplatesEpic,
  generateDocumentEpic
  // downloadDocumentEpic
);
