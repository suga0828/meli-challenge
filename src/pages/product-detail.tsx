import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../components/breadcrumb";
import Loading from "../components/loading";
import { Item, ItemResponse } from "../definitions/product.types";
import { getItem } from "../services/product.service";
import Search from "./search";

const ProductDetail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<Item>({} as unknown as Item);

  useEffect(() => {
    setLoading(true);
    getItem(id as string).then((response: ItemResponse) => {
      setItem(response.item);
      setLoading(false);
    });
  }, [id])
  
  return (
    <>
      <Search />
      {loading
        ? <Loading />
        : (
          <>
            <Breadcrumb categoryTree={[]} />
            <article className="w-11/12 max-w-screen-2xl mx-auto bg-white p-4 rounded">
              <div className="flex">
                <div className="flex flex-col w-8/12">
                  <div className="mb-16">
                    <img src={item.picture} alt={`${item.title}`} className="aspect-square mx-auto w-4/5 h-auto" />
                  </div>
                  <div className="pl-8">
                    <h2 className="text-gray-6 mb-8 text-3xl">Descripción del producto</h2>
                    <p className="text-gray-9 mb-8 text-base whitespace-pre-wrap max-h-80 shadow-inner overflow-auto">{item.description}</p>
                  </div>
                </div>
                <div className="w-4/12">
                  <span className="text-sm text-gray-6 mt-8 block">
                    {item.condition}
                    { item.sold_quantity > 0
                      ? ` - ${item.sold_quantity} vendidos`
                      : ''
                    }
                  </span>
                  <h1 className="text-gray-3 font-bold mt-4 text-2xl">{item.title}</h1>
                  <span className="text-gray-3 font-bold mt-8 block text-5xl">$ {item.price?.amount}</span>
                  <button className="mt-8 bg-secondary w-64 p-2 rounded text-white">Comprar</button>
                </div>
              </div>
            </article>
          </>
        )
      }
    </>
  )
}

export default ProductDetail;