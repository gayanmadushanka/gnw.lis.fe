import { combineEpics } from "redux-observable";

import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import {
  FETCH_TEMPLATES,
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
} from "../actions";

const url = "http://localhost:3000/api/v1/document/templates";

function fetchTemplatesEpic(action$) {
  return action$.ofType(FETCH_TEMPLATES).pipe(
    switchMap(() => {
      return ajax.getJSON(url).pipe(
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

export const rootEpic = combineEpics(fetchTemplatesEpic);
