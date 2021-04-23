import React from "react"
import ProductList from "../Main/Products/ProductList"

const Main = () => {
    return (
         <main className="page">
                <section className="hello">
                    <div className="hello-container container">
                        <div className="hello-content">
                            <h1 className="hello-title title">Hi, I am John, <br /> Creative Technologist</h1>
                            <div className="hello-text text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                   </div>
                            <a href="" className="hello-btn btn">Download Resume</a>
                        </div>
                        <div className="hello-avatar">
                            <img className="hello-avatar" src="img/John_face.png" alt="" />
                        </div>
                    </div>
                </section>
                <section className="recent-posts">
                    <div className="recent-posts-container container">
                        <div className="recent-posts-header">
                            <div className="recent-posts-title title-posts">Recent posts</div>
                            <a href="" className="recent-posts-viewall">View all</a>
                        </div>
                        <div className="recent-posts-items">
                            <div className="recent-posts-colomn">
                                <article className="recent-post recent-posts-item">
                                    <a className="recent-post-title">Making a design system from scratch</a>
                                    <div className="recent-post-info">12 Feb 2020 <span>|</span>  Design, Pattern</div>
                                    <div className="recent-post-text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </article>
                            </div>
                            <div className="recent-posts-colomn">
                                <article className="recent-post recent-posts-item">
                                    <a className="recent-post-title">Creating pixel perfect icons in Figma</a>
                                    <div className="recent-post-info">12 Feb 2020 <span>|</span>  Figma, Icon Design</div>
                                    <div className="recent-post-text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                <ProductList/>
            </main>
    )
}

export default Main