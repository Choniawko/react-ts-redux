import { ActionType } from "typesafe-actions";
import actionsCreators from "./actionCreators";
import { Category } from "../Category/reducer";

export type Post = {
  id: number;
  title: string;
  category: Category;
  description: string;
  active: boolean;
};
export type State = {
  posts: ReadonlyArray<Post>;
  count: number;
  previos: number | null;
  next: number | null;
};
type Action = ActionType<typeof actionsCreators>;

export const INITIAL_STATE: State = {
  posts: [],
  count: 0,
  previos: null,
  next: null
};

export default (state: State = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case actionsCreators.updatePosts.type:
      return {
        ...state,
        posts: payload
      };
    default:
      return state;
  }
};
