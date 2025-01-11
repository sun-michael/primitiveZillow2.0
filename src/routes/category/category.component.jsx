import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  //this will re-render everytime the page loads so we want to avoid and instead below
  // const products = categoriesMap[category]
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <div className="category-container">
        <h2 className="title">{category.toUpperCase()}</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          products && //to insure the data is fetched from Firebase
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </div>
    </Fragment>
  );
};

export default Category;
