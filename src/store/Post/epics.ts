import { combineEpics, ofType, Epic } from "redux-observable";
import { of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";
import { ActionType } from "typesafe-actions";
import { apiUrl } from "../../common/services/globalUrls";
import actionCreators from "./actionCreators";
import { default as ajax } from "../../common/services/utils";
import { RootState } from "../";

type Action = ActionType<typeof actionCreators>;

const getPostsEpic: Epic<Action, Action, RootState> = actions$ =>
  actions$.pipe(
    ofType(actionCreators.getPosts.type),
    mergeMap(() =>
      ajax.get(apiUrl("posts")).pipe(
        mergeMap(({ response }) =>
          of(actionCreators.updatePosts.create(response))
        ),
        catchError(error => of(actionCreators.setError.create(error)))
      )
    )
  );

export const epics = combineEpics(getPostsEpic);
