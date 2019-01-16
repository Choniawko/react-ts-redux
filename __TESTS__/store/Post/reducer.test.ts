import reducer, { INITIAL_STATE } from "../../../src/store/Post/reducer";

describe("Post reducer", () => {
  it("default option", () => {
    expect(reducer(INITIAL_STATE, undefined)).toEqual(INITIAL_STATE);
  });
});
