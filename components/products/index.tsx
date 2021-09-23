import React from "react";
import PropTypes from "prop-types";
import { Product } from "../../types";
import ProductItem from "../ProductsItem";
import { Grid } from "@material-ui/core";
type PropsType = {
  listProduct: Product[];
};

function Products({ listProduct }: PropsType) {
  return (
    <>
      {listProduct.map((item) => (
        <Grid key={item.id} item sm={4} xs={6} md={3}>
          <ProductItem product={item} />
        </Grid>
      ))}
    </>
  );
}

export default Products;
