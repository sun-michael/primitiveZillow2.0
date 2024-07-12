import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3">
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
