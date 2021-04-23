import React from "react"
import ProductListItem from "./ProductListItem"
import products from "./products"


const ProductList = () => {
    return(
        <> 
            <section className="feature-works">
                    <div className="feature-works-container container">
                        <div className="feature-works-title title-posts">Featured works
                        
                        {
                            products.map(({
                                id,
                                image,
                                title,
                                years,
                                category,
                                text
                            }) => (
                                <ProductListItem
                                id={id}
                                image={image}
                                title={title}
                                years={years}
                                category={category}
                                text={text}
                                />
                            ))
                        }
                        </div>
                     </div>
            </section>

        </>
    )
}

export default ProductList