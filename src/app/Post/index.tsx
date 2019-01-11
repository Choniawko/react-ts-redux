import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "../../store/Post/actionCreators";
import { Post } from "../../store/Post/reducer";

class PostContainer extends Component<StateProps & DispatchProps> {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    );
  }
}

interface StateProps {
  posts: ReadonlyArray<Post>;
}

interface DispatchProps {
  getPosts: any;
}

const mapStateToProps = (store: any) => ({
  posts: store.post.posts
});
const mapDispatchToProps = {
  getPosts: actionCreators.getPosts.create
};
export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
