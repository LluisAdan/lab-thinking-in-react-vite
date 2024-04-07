import './ProductsPage.css';
import { useState } from 'react';
import jsonData from '../../../data/data.json';
import ProductTable from '../ProductTable/ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div className="d-flex justify-content-center my-5">
      <ProductTable />
    </div>
  );
}

export default ProductsPage;