import { createBrowserHistory, BrowserHistoryBuildOptions } from "history";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { routerMiddleware } from "connected-react-router";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics();
const createRootReducer = (history: BrowserHistoryBuildOptions | any) =>
  combineReducers({
    router: connectRouter(history)
    // reducers
  });

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  )
);
epicMiddleware.run(rootEpic);
