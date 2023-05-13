import { FC } from "react";
import axios from "axios";

interface ParamsProps {
  params: {
    id: string;
  };
}
interface ProductProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function generateStaticParams() {
  const { data }: { data: ProductProps[] } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data.map((product: ProductProps) => {
    return {
      id: product.toString(),
    };
  });
}

const Products = async ({ params }: ParamsProps) => {
  const { data: product }: {data: ProductProps} = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return <div>dsad{product.body}</div>;
};

export default Products;
