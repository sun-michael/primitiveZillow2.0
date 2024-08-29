// import scss
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="container">
      <div className="categories-container row row-cols-1 row-cols-md-3 g-4">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
