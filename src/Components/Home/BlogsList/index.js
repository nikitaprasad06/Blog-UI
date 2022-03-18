import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";

import { formatDate } from '../../../Commons/Formatters';
import style from "./style.module.scss";

const SkeletonLoader = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" direction="row" className={style.blogContainer}>
      <Grid item xs={12} md={4} lg={3} sm={6} className={style.blogCardContainerLoader}>
        <Card className={style.blogCard} sx={{ maxWidth: '35ch' }}>
          <Skeleton sx={{ height: 350 }} animation="wave" variant="rectangular" />
        </Card>    
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6} className={style.blogCardContainerLoader}>
        <Card className={style.blogCard} sx={{ maxWidth: '35ch' }}>
          <Skeleton sx={{ height: 350 }} animation="wave" variant="rectangular" />
        </Card>    
      </Grid>
      <Grid item xs={12} md={4} lg={3} sm={6} className={style.blogCardContainerLoader}>
        <Card className={style.blogCard} sx={{ maxWidth: '35ch' }}>
          <Skeleton sx={{ height: 350 }} animation="wave" variant="rectangular" />
        </Card>    
      </Grid>
    </Grid>
    
  )
}

const BlogCard = ({ blog = {}, getSelectedBlogId }) => {
  return (
    <Grid item xs={12} md={4} lg={3} sm={6} className={style.blogCardContainer}>
      <Card className={style.blogCard} sx={{ maxWidth: '35ch' }} aria-label={`${blog.title} - Blog Card`} onClick={() => getSelectedBlogId(blog.id)} >
        <CardActionArea tabIndex={-1}>
          <Link
            to={`/blogs/${blog.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <CardMedia
              component="img"
              height="350"
              width="100%"
              image={`${process.env.PUBLIC_URL}${blog.imgUrl} `}
              alt={`${blog.title}`}
              className={style.cardImage}
            />
            <CardContent className={style.cardContent}>
              <Typography gutterBottom variant="subtitle2" component="div" className={`${style.cardTimestamp}`}>
                {formatDate(blog.timestamp)}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" className={`${style.cardHeader} ${style.bold}`}>
                {blog.title}
              </Typography>
              <Typography variant="body2" gutterBottom className={style.cardDescription}>
                {blog.subheader.slice(0, 180) + "..."}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export const BlogList = ({ blogPosts = [], getSelectedBlogId }) => {
  const sortedBlogList = blogPosts?.sort((a,b) => a.timestamp > b.timestamp ? -1 : 1)
  return (
    blogPosts?.length ? 
    <Grid
      container
      justifyContent="center"
      direction="row"
      alignItems="center"
      className={style.blogContainer}
      data-testid={'blogListContainer'}
    >
      {sortedBlogList?.map((blog, index) => (
        <BlogCard blog={blog} key={index} getSelectedBlogId={getSelectedBlogId} />
      ))}
    </Grid> : <SkeletonLoader />
  );
};
