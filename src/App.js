import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import ProductList from './ProductList'
import Product from './Product'
import ProductForm from './ProductForm';
import About from './About'
import HomeProducts from './HomeProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeProducts />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/new" element={<ProductForm />} />
          <Route path="products/:productId/edit" element={<ProductForm />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="*" element={<h1>Product Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App