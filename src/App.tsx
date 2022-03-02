 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./pages/search";
import ProductDetail from "./pages/product-detail";
import ProductsList from "./pages/products-result";

const baseName = process.env.PROD ? 'meli-challenge/' : '';

function App() {
  return (
    <div className="bg-gray-e min-h-screen pb-4">
      <BrowserRouter basename={baseName}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="items/" element={<ProductsList />} />
          <Route path="items/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
