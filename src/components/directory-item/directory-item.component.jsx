import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imgUrl, title } = category;
  return (
    <div className="directory-container">
      <div className="directory-body-container ">
        <div class="card mb-3">
          <img src={imgUrl} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">More description coming soon..</p>
            <p class="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryItem;
