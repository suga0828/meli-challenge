 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./components/search";
import ProductDetail from "./pages/product-detail";
import ProductsList from "./pages/products-result";

const baseName = true ? '' : 'meli-challenge';

function App() {
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/items?search=:query" element={<ProductsList />} />
        <Route path="/items/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
