import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import { formatDate } from "../../Commons/Formatters";
import style from "./style.module.scss";

const SkeletonLoader = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Typography variant="h5" align="center" width="50ch" component="div">
        {<Skeleton />}
      </Typography>
      <Typography variant="subtitle2" width="50ch">
        {<Skeleton />}
      </Typography>
      <Grid
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Grid
          item
          xs={10}
          sm={10}
          md={6}
          lg={6}
          className={style.imageContainer}
        >
          <Skeleton variant="rectangular" width="50ch" height="350px" />
        </Grid>
      </Grid>
      <Typography width="100%" variant="body1">
        {<Skeleton />}
      </Typography>
      <Typography gutterBottom width="100%" variant="body1">
        {<Skeleton variant="rectangular" height={118} />}
      </Typography>
      <Typography width="100%" variant="body1">
        {<Skeleton />}
      </Typography>
      <Typography gutterBottom width="100%" variant="body1">
        {<Skeleton variant="rectangular" height={118} />}
      </Typography>
      <Typography width="100%" variant="body1">
        {<Skeleton />}
      </Typography>
    </Grid>
  );
};

export const BlogDetails = ({
  setPageTitle,
  blogDetails = {},
  blogPosts = [],
}) => {
  const { id } = useParams();
  const blogPostDetails = blogDetails.length
    ? blogDetails
    : blogPosts.filter((row) => row.id === Number(id));

  useEffect(() => {
    setPageTitle("blogDetails");
  }, []);

  return (
    <Grid container justifyContent="center" direction="row" alignItems="center">
      <Grid
        item
        xs={10}
        md={8}
        sm={8}
        lg={8}
        className={style.blogDetailsContainer}
        data-testid={"blogDetailsContainer"}
      >
        {blogPostDetails.length ? (
          <>
            <Typography
              variant="h4"
              component="div"
              align="center"
              className={style.bold}
              aria-label={`${blogPostDetails[0].title} - Blog Heading`}
            >
              {blogPostDetails[0].title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              align="center"
              aria-label="Blog Creation Time"
            >
              {formatDate(blogPostDetails[0].timestamp)}
            </Typography>
            <Grid
              container
              justifyContent="center"
              direction="column"
              alignItems="center"
            >
              <Grid
                item
                xs={10}
                md={6}
                sm={10}
                lg={6}
                className={style.imageContainer}
              >
                <Card className={style.blogCard} sx={{ maxWidth: "50ch" }}>
                  <CardMedia
                    component="img"
                    height="auto"
                    width="100%"
                    image={blogPostDetails[0].imgUrl}
                    alt={`${blogPostDetails[0].title}`}
                  />
                </Card>
              </Grid>
            </Grid>
            {blogPostDetails[0]?.details.map((element, index) => {
              return (
                <Typography paragraph gutterBottom key={index} component="div">
                  <Typography
                    variant="h6"
                    sx={{ paddingBottom: "0.5em" }}
                    aria-label={`${blogPostDetails[0].title} - ${element.label}`}
                  >
                    {element.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                  >
                    {element.data}
                  </Typography>
                </Typography>
              );
            })}
          </>
        ) : (
          <SkeletonLoader />
        )}
      </Grid>
    </Grid>
  );
};
