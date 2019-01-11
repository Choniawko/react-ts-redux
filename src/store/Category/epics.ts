import { combineEpics, ofType, Epic } from "redux-observable";
import { ActionType } from "typesafe-actions";
import { of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";
import { apiUrl } from "../../common/services/globalUrls";
import actionCreators from "./actionCreators";
import { default as ajax } from "../../common/services/utils";
import { RootState } from "../";

type Action = ActionType<typeof actionCreators>;

const getCategoriesEpic: Epic<Action, Action, RootState> = actions$ =>
  actions$.pipe(
    ofType(actionCreators.getCategories.type),
    mergeMap(() =>
      ajax.get(apiUrl("categories")).pipe(
        mergeMap(({ response }) =>
          of(actionCreators.updateCategories.create(response))
        ),
        catchError(error => of(actionCreators.setError.create(error)))
      )
    )
  );
export const epics = combineEpics(getCategoriesEpic);
