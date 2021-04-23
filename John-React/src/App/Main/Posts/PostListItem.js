import React from "react"


const PostListItem = () => {
    return (
        <>
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
        </>
    )
}

export default PostListItem



