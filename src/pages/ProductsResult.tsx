import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import vanIcon from '../assets/van-icon.png';

import { ItemsResponse } from "../definitions/products.types";
import { Item } from "../definitions/product.types";

import { getItems } from "../services/product.service";

import Breadcrumb from "../components/breadcrumb";
import Search from "./Search/Search";
import Loading from "../components/loading";

const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") as string;

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    getItems(query).then((response: ItemsResponse) => {
      setItems((response.items || []).slice(0, 4));
      setCategories(response.categories || []);
      setLoading(false);
    });
  }, [query])

  return (
    <>
      {loading
        ? <Loading />
        :(
          <>
            <Breadcrumb categoryTree={categories} />
            <div className="w-11/12 max-w-screen-2xl mx-auto bg-white p-4 rounded">
              { items.length === 0 ? (
                <div className="text-4xl text-center">No results, try other search.</div>
              ) : (
                items.map((item, i, arr) => (
                  <Link key={item.id} to={`/items/${item.id}`} className={`hover:bg-gray-e flex justify-center flex-wrap sm:flex-nowrap p-4 transition-colors ease-in-out ${i !== arr.length - 1 ? 'border-b border-solid border-gray-e' : ''}`}>
                    <img src={item.picture} alt={item.title} className="w-[180px] h-[180px] mr-4" />
                    <div className="grow">
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                        <span className="text-2xl text-gray-3 flex items-center">$ {item.price.amount}
                          {item.free_shipping && <img src={vanIcon} alt="van icon" className="h-6 w-6 sm:h-auto sm:w-auto ml-2" />}
                        </span>
                        <span className="text-xs text-gray-9">{item.address}</span>
                      </div>
                      <h1 className="text-lg text-gray-3">{item.title}</h1>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </>
        )
      }
    </>
  )
}

export default ProductsList;;