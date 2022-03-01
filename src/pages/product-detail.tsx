import { useParams } from "react-router-dom";

import Breadcrumb from "../components/breadcrumb";
import Search from "./search";

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
    <>
      <Search />
      <Breadcrumb categoryTree={['1', '2']} />
      <p>detail</p>
    </>
  )
}

export default ProductDetail;