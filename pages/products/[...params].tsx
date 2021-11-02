import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { CommentItem, Product } from "../../types";
import { listProducts } from "../../fakeData";
import ProductDetails from "../../components/ProductDetails";
interface PropsType {
  product: Product;
  listComment: CommentItem[];
}
function ProductType({
  product,
  listComment,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [, name] = router.query.params as string[];
  return (
    <div style={{ marginTop: 90 }}>
      <Head>
        <title>{name}</title>
      </Head>
      <ProductDetails listComment={listComment} product={product} />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<PropsType> = async (
  context: GetServerSidePropsContext
) => {
  const product: Product = listProducts[0];
  //call ListComment cuar Product
  return {
    props: {
      product,
      listComment: [],
    },
  };
};

export default ProductType;
