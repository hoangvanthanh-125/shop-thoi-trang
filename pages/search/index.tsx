import React from "react";
import style from "./../../styles/layout/searchPage.module.scss";
import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Product } from "../../types";
import Products from "../../components/products";
import { listProducts } from "../../fakeData";
import { Grid } from "@material-ui/core";

interface Props{
  listSearch:Product[]
}

function SearchPage({
  listSearch,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  console.log(listSearch);

  const { q } = router.query;
  return (
    <div className={style.wrapSearch}>
      {listSearch.length > 0 ?<h2 className={style.noti}>
        Kết quả tìm kiếm của <span className={style.textSearch}>{q}</span>
      </h2>:<h2 className={style.noti}>
        Không tìm thấy kết quả cho <span className={style.textSearch}>{q}</span>
      </h2>}
      <Grid container>
        <Products listProduct={listSearch} />
      </Grid>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context:GetServerSidePropsContext) => {
  const q = context.query;
  //call api lây list
  return {
    props: {
      listSearch: listProducts,
    },
  };
};

export default SearchPage;
