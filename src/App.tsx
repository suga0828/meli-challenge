 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./pages/Search/Search";
import ProductDetail from "./pages/ProductDetail";
import ProductsList from "./pages/ProductsResult";

const baseName = process.env.PROD ? 'meli-challenge/' : '';

function App() {
  return (
    <div className="bg-gray-e min-h-screen pb-4">
      <BrowserRouter basename={baseName}>
        <Search />
        <Routes>
          <Route path="items/" element={<ProductsList />} />
          <Route path="items/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
