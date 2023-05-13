import axios from "axios";
import Link from "next/link";

interface ProductsProps {
        userId: number,
        id: number,
        title: string,
        body: string
}

const Products = async() => {
  const { data }  = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return <div>{data.map((product: ProductsProps) => {
    return(
        <div className="bg-slate-500 rounded-md px-6 py-4 mt-7 cursor-pointer" key={product.id}>
           <Link href={`/product/${product.id}`}>{product.title}</Link>
        </div>
    )
  })}</div>;
};

export default Products;
