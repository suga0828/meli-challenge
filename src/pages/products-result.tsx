import { useSearchParams } from "react-router-dom";

import Breadcrumb from "../components/breadcrumb";
import Search from "./search";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  return (
    <>
      <Search />
      <Breadcrumb categoryTree={['2', '3']} />
      <p>results</p>
    </>
  )
}

export default ProductsList;;