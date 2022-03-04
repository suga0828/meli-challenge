 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./pages/Search/Search";
import ProductDetail from "./pages/ProductDetail";
import ProductsList from "./pages/ProductsResult";

function App() {
  return (
    <div className="bg-gray-e min-h-screen pb-4">
      <BrowserRouter>
        <Search />
        <Routes>
          <Route path="/" element={null} />
          <Route path="items/" element={<ProductsList />} />
          <Route path="items/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
