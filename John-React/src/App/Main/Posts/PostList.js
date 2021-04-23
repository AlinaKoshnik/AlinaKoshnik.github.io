import React from "react"

const PostList = () =>{
    return(
        <div className="recent-posts-container container">
                        <div className="recent-posts-header">
                            <div className="recent-posts-title title-posts">Recent posts</div>
                            <a href="" className="recent-posts-viewall">View all</a>
                        </div>
                        <div className="recent-posts-items">
                           <PostListItem/>
                        </div>
                    </div>
    )
}

export default PostList


