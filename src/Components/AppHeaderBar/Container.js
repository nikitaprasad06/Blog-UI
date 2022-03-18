import { connect } from "react-redux";
import { AppHeader } from "./index";

const mapStateToProps = (state) => ({
  pageTitle: state.pageTitle,
});

const mapDispatchToProps = (dispatch) => ({});

export const AppHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
