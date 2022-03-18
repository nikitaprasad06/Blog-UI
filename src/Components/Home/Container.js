import { connect } from "react-redux";
import { Home } from "./index";
import { getAllBlogsDetails, setPageTitle } from "./Actions";

const mapStateToProps = (state) => ({
  pageTitle: state.pageTitle,
});

const mapDispatchToProps = (dispatch) => ({
    getAllBlogsDetails: (data) => dispatch(getAllBlogsDetails(data)),
    setPageTitle: (data) => dispatch(setPageTitle(data)),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer
