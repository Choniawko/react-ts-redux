import { createBrowserHistory, BrowserHistoryBuildOptions } from "history";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { routerMiddleware } from "connected-react-router";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";

import { epics as CategoryEpics } from "./Category/epics";
import { epics as PostEpics } from "./Post/epics";

import categoryReducer, { State as categoryState } from "./Category/reducer";
import postReducer, { State as postState } from "./Post/reducer";

const epicMiddleware = createEpicMiddleware();
export type RootState = {
  category: categoryState;
  post: postState;
};
const rootEpic: any = combineEpics(CategoryEpics, PostEpics);
const createRootReducer = (history: BrowserHistoryBuildOptions | any) =>
  combineReducers({
    router: connectRouter(history),
    category: categoryReducer,
    post: postReducer
  });

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  )
);
epicMiddleware.run(rootEpic);
