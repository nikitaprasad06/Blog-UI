import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import equals from "ramda/src/equals";

import { BlogListContainer } from "./BlogsList/Container";

export const Home = ({
  getAllBlogsDetails,
  pageTitle,
  setPageTitle,
}) => {

  useEffect(() => {
    getAllBlogsDetails();
    !equals(pageTitle, 'home') && setPageTitle('home')
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      data-testid={'homeContainer'}
    >
      <BlogListContainer />
    </Grid>
  );
};
