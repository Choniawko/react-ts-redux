import reducer, { INITIAL_STATE } from "../../../store/Post/reducer";
import actionCreators from "../../../store/Post/actionCreators";

const testPost = {
  id: 1,
  title: "Post #1",
  category: "Category #1",
  description: "Description #1",
  active: true
};

describe("Post reducer", () => {
  it("updatePosts action", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: actionCreators.updatePosts.type,
        payload: [testPost]
      })
    ).toMatchSnapshot();
  });
});
