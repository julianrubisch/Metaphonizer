import { connect } from "react-redux";
import Button from "../components/button";
import { increaseCounter } from "../actions";

const mapStateToProps = state => ({
  title: state.count.toString()
});

const mapDispatchToProps = dispatch => ({
  clickAction: () => dispatch(increaseCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
