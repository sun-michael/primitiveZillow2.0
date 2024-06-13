import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {imgUrl, title} = category;
    return (
        <div className="category-container row">
        <div className="category-body-container col-sm-4">
            <div class="card mb-3">
            <img src={imgUrl} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </p>
                <p class="card-text">
                <small class="text-body-secondary">
                    Last updated 3 mins ago
                </small>
                </p>
            </div>
            </div>
        </div>
        </div>

    )
}

export default CategoryItem
