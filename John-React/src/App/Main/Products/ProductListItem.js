import React from "react"


const ProductListItem = ( { image, title, years, category, text } ) => {
   
    return (
        <div className="works">
            <article className="works-item">
                <a href="" className="works-image ibg">
                    <img src={image} alt="work #1" />
                </a>
                <div className="works-body">
                    <a href="" className="works-title">{title}</a>
                    <div className="works-info">
                        <div className="works-year">{years}</div>
                        <div className="works-category">{category}</div>
                    </div>
                    <div className="works-text text">{text}</div>
                </div>
            </article>
        </div>
    )
}

export default ProductListItem