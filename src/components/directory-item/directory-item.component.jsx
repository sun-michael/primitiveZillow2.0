import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imgUrl, title } = category;
  return (
    <div className="directory-container row">
      <div className="directory-body-container col-sm-4">
        <div className="card mb-3">
          <img src={imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryItem;
