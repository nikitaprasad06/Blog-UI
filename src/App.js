import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ErrorFallback } from "./Commons/ErrorFallback";
import configureStore from "./store/configureStore";
import { AppHeaderContainer } from "./Components/AppHeaderBar/Container";
import { ScrollButton } from "./Commons/ScrollButton";
import { Loader } from "./Commons/Loader";
import "./variables/colors.scss";

const BlogDetailsContainer = lazy(() =>
  import("./Components/BlogDetails/Container")
);

const HomeContainer = lazy(() =>
  import("./Components/Home/Container")
);

const store = configureStore();

export function App() {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Router>
          <Provider store={store}>
            <AppHeaderContainer />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route exact path="/" element={<HomeContainer />}></Route>
                  <Route
                    exact
                    path="/blogs"
                    element={<HomeContainer />}
                  ></Route>
                  <Route
                    path="/blogs/:id"
                    element={<BlogDetailsContainer />}
                  ></Route>
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Provider>
        </Router>
        <ScrollButton />
      </Grid>
    </Box>
  );
}
