import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ArrowBack } from "@mui/icons-material";

import style from "./style.module.scss";

export function AppHeader({ pageTitle = "home" }) {
  const navigate = useNavigate();
  const isHomePage = pageTitle === 'home'

  const handleBackNavigation = () => {
    navigate("/blogs");
  };

  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      alignItems="center"
      className={style.headerContainer}
      data-testid={'appHeaderContainer'}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
        <Typography variant="h5" component="div" className={style.header} onClick={handleBackNavigation} aria-label={`FAB Corp Blog`}>
          FAB CORP BLOG
        </Typography>
      </Grid>
      { !isHomePage ? <Grid item xs={12} sm={12} md={12} lg={12} className={style.backNavigationContainer}>
        <ArrowBack className={style.backIcon} onClick={handleBackNavigation} data-testid={'backNavigationIcon'} aria-label={`Back Navigation Icon`} />
      </Grid> : null }
      
    </Grid>
  );
}
