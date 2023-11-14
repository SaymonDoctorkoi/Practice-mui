import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Product = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  console.log("post", post);
  const retrievePosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return setPost(response.data);
  };
  useEffect(() => {
    retrievePosts();
  }, [10]);
  // const {
  //   data: post,
  //   error,
  //   isLoading,
  // } = useQuery(["postsData"], retrievePosts);
  // console.log(post, error, isLoading);
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
        <Box sx={{ minWidth: 275 }}>
          <Grid container spacing={3}>
            {post.map((item: IPost) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                <Card variant="outlined">
                  <React.Fragment>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                      </Typography>
                      <Typography variant="body2">
                        {item.body}
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() =>
                          navigate(`/products/${item.id}`, {
                            state: item,
                          })
                        }
                        size="small"
                      >
                        View More
                      </Button>
                    </CardActions>
                  </React.Fragment>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
