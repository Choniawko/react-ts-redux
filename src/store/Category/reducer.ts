import { ActionType, getType } from "typesafe-actions";
import actionsCreators from "./actionCreators";

export type Category = { id: number; name: string };
export type State = {
  categories: ReadonlyArray<Category>;
  count: number;
  previos: number | null;
  next: number | null;
};
export type Action = ActionType<typeof actionsCreators>;

export const INITIAL_STATE: State = {
  categories: [],
  count: 0,
  previos: null,
  next: null
};

export default (state: State = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case actionsCreators.updateCategories.type:
      return {
        ...state,
        categories: payload
      };
    default:
      return state;
  }
};
