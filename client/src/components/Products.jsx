// AllProducts.jsx
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productAction";

const AllProducts = () => {
  const getProducts = useSelector((state) => state.getProducts);
  const { products, error } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


 return (
    <Box p={3}style={{backgroundColor: 'white', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
      <Typography variant="h5" mb={3} fontWeight={600}>
        All Products
      </Typography>

      <Grid container spacing={3} style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  height: 370,
                  width: 300,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.url}
                  alt={product.title.shortTitle}
                  sx={{
                    height: 200,
                    objectFit: "contain",
                    p: 2,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    noWrap
                    mb={1}
                  >
                    {product.title.shortTitle}
                  </Typography>

                  <Typography variant="body2" color="green" mb={0.5}>
                    {product.discount}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.6 }}
                    mb={1}
                    noWrap
                  >
                    {product.tagline}
                  </Typography>

                  <Typography>
                    <span style={{ fontSize: 18, fontWeight: 600 }}>
                      ₹{product.price.cost}
                    </span>
                    &nbsp;&nbsp;
                    <span style={{ color: "#878787" }}>
                      <strike>₹{product.price.mrp}</strike>
                    </span>
                    &nbsp;&nbsp;
                    <span style={{ color: "#388E3C" }}>
                      {product.price.discount} off
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllProducts;
