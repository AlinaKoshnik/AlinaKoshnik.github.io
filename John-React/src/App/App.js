import React from "react"
import "../common/reset.css"
import "../common/style.css"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import BlogPage from "./Pages/BlogPage/BlogPage"
import WorksPage from "./Pages/WorksPage/WorksPage"
import {Route} from "react-router-dom"


const App = () => {
    return (
        <>
            <Header/>
            <Route exact path="/" component={Main}/>
            <Route path="/blog" component={BlogPage}/>
            <Route path="/works" component={WorksPage}/>
            <Footer/>
        </>
    )
}

export default App