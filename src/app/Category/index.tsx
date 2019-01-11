import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "../../store/Category/actionCreators";
import { Category } from "../../store/Category/reducer";

class CategoryContainer extends Component<StateProps & DispatchProps> {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
    );
  }
}

interface StateProps {
  categories: ReadonlyArray<Category>;
}

interface DispatchProps {
  getCategories: any;
}

const mapStateToProps = (store: any) => ({
  categories: store.category.categories
});
const mapDispatchToProps = {
  getCategories: actionCreators.getCategories.create
};
export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);
