import { Item, ItemResponse } from "../definitions/product.types";
import { ItemsResponse } from "../definitions/products.types";
import { getAuthor } from "../utils/author.util";

const BASE_PATH = 'https://suga0828-meli-challenge-api.herokuapp.com/';

const ENDPOINT = 'api/items'

export const getItem = async (id: string): Promise<ItemResponse> => {
  const author = getAuthor();

  try {
    const response = await fetch(`${BASE_PATH + ENDPOINT}/${id}`, { headers: { ...author } });

    return  await response.json();
  } catch {
    return { author , item: null as unknown as Item };
  }
}

export const getItems = async (query: string): Promise<ItemsResponse> => {
  const author = getAuthor();
  const params = new URLSearchParams({ q: query });
  
  try {
    const response = await fetch(`${BASE_PATH + ENDPOINT}?${params.toString()}`, { headers: {...author} });
    
    return  await response.json();
  } catch {
    return { author , categories: [], items: [] };
  }
}