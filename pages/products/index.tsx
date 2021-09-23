import { Card, Grid } from "@material-ui/core";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import Products from "../../components/products";
import ProductsFilter from "../../components/ProductsFilter";
import ProductListCategory from "../../components/ProductsListCategory";
import ProductSort from "../../components/ProductSort";
import { listDanhmuc, listProducts } from "../../fakeData";
import { Product } from "../../types";
import style from "./../../styles/layout/Products.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import FilterBody from "../../components/ProductsFilter/FilterBody";
import { set } from "react-hook-form";
import textStyle from "./../../styles/layout/TextEffect.module.scss";
function ProductsPage({
  listProduct,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [openFilter, setOpenFilter] = useState(false);
  const { query } = useRouter();
  const { type } = query;
  let currentListTypeProduct;
  if (!type) {
    currentListTypeProduct = listDanhmuc.filter((item) => item.path === "all");
  } else {
    currentListTypeProduct = listDanhmuc.filter((item) => item.path === type);
  }
  return (
    <div className={style.wrap}>
      <Head>
        <title>{currentListTypeProduct[0]?.name}</title>
      </Head>
      <Grid spacing={0} container className={style.container}>
        <Grid className={style.wraplistCategory} item sm={3} md={3}>
          <div className={style.category}>
            <ProductListCategory />
          </div>
        </Grid>
        <Grid
          className={style.productContainer}
          item
          container
          spacing={0}
          sm={9}
          md={9}
          xs={12}
        >
          <Grid item sm={12} md={12} xs={12}>
            <div className={style.intro}>
              <h5 className={textStyle.h1} data-text= {currentListTypeProduct[0]?.name}>
                <span className={textStyle.span}>
                  {currentListTypeProduct[0]?.name}
                </span>
              </h5>
            </div>
          </Grid>
          <Grid container className={style.containerProduct}>
            <Grid item sm={12} xs={12} md={12}>
              <div className={style.control}>
                <div className={style.control__filter}>
                  <ProductsFilter
                    handleSetOpenFilter={() => setOpenFilter(!openFilter)}
                  />
                </div>

                <div className={style.control__sort}>
                  <ProductSort />
                </div>
              </div>
              <div className={style.filterBody} style={{ padding: 10 }}>
                <FilterBody openFilter={openFilter} />
              </div>
            </Grid>
            <Grid className={style.wrapListProduct} item container>
              <Products listProduct={listProduct} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (contex) => {
  //call APi
  const listProduct: Product[] = listProducts;
  return {
    props: {
      listProduct,
    },
  };
};

export default ProductsPage;
