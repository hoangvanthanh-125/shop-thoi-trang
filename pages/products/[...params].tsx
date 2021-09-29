import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";
import { Product } from "../../types";
import { listProducts } from "../../fakeData";
import ProductDetails from "../../components/ProductDetails";
interface PropsType {
  product: Product;
}
function ProductType({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [, name] = router.query.params as string[];
  return (
    <div style={{ marginTop: 90 }}>
      <Head>
        <title>{name}</title>
      </Head>
      <ProductDetails product = {product} />
    </div>
  );
}
export const getServerSideProps:GetServerSideProps<PropsType> = async (context:GetServerSidePropsContext) => {

  const product : Product = listProducts[0];
  console.log(product);
  
  return {
    props:{
      product
    }
  }
}




export default ProductType;
