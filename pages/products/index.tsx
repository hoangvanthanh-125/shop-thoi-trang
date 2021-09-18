import { Card, Grid } from "@material-ui/core";
import React from "react";
import ProductsFilter from "../../components/ProductsFilter";
import ProductListCategory from "../../components/ProductsListCategory";
import Cart from "../cart";
import style from "./../../styles/layout/Products.module.scss";

function Products(props) {
  return (
    <div className={style.wrap}>
      <Grid spacing={3} container className={style.container}>
        <Grid item sm={3} md={3}>
          <div className={style.category}>
            <ProductListCategory />
          </div>
        </Grid>
        <Grid
          className={style.productContainer}
          item
          container
          spacing={1}
          sm={9}
          md={9}
          xs={12}
        >
          <Grid item sm={12} xs={12} md={12}>
            <ProductsFilter />
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
          <Grid item sm={4} xs={6} md={3}>
            <Card>Product</Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
