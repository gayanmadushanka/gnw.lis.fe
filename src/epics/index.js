import { combineEpics } from "redux-observable";

import { of, from } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import {
  FETCH_TEMPLATES,
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
  FETCH_TEMPLATE_METADATA,
  fetchTemplateMetadataSuccess,
  fetchTemplateMetadataFailure,
  GENERATE_DOCUMENT,
  generateDocumentSuccess,
  generateDocumentFailure,
} from "../actions";

const fetchTemplatesUrl = "http://localhost:3000/api/v1/templates";

const fetchTemplatesEpic = (action$) =>
  action$.ofType(FETCH_TEMPLATES).pipe(
    switchMap(() =>
      from(fetch(fetchTemplatesUrl).then((response) => response.json())).pipe(
        map((templates) => fetchTemplatesSuccess(templates)),
        catchError((error) => of(fetchTemplatesFailure(error.message)))
      )
    )
  );

const getFetchTemplateMetadataUrl = (section, templateId) =>
  `http://localhost:3000/api/v1/templates/${section}/${templateId}/metadata`;

const fetchTemplateMetadataEpic = (action$) =>
  action$.ofType(FETCH_TEMPLATE_METADATA).pipe(
    switchMap(({ payload }) =>
      from(
        fetch(
          getFetchTemplateMetadataUrl(payload.section, payload.templateId)
        ).then((response) => response.json())
      ).pipe(
        map((metadata) => fetchTemplateMetadataSuccess(metadata)),
        catchError((error) => of(fetchTemplateMetadataFailure(error.message)))
      )
    )
  );

const generateDocumentUrl = "http://localhost:3000/api/v1/documents/generate";

const generateDocumentEpic = (action$) =>
  action$.ofType(GENERATE_DOCUMENT).pipe(
    switchMap(({ payload }) =>
      from(
        fetch(generateDocumentUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).then((response) => {
          const fileName = response.headers
            .get("Content-Disposition")
            .replace(/"/g, "")
            .split("=")
            .pop();
          response.blob().then((blob) => {
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
          });
          // Todo: Save as
          // window.location.href = response.url;)
        })
      ).pipe(
        map(() => generateDocumentSuccess()),
        catchError((error) => of(generateDocumentFailure(error.message)))
      )
    )
  );

export const rootEpic = combineEpics(
  fetchTemplatesEpic,
  fetchTemplateMetadataEpic,
  generateDocumentEpic
);
