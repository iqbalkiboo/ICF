import React from 'react'
import IndexHeader from '../components/header/Index'
import Homepages from './pages/homepages/Homepages'
import Footer from '../components/footer/Footer'

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import NewsPages from './pages/news/News';
import AboutPages from './pages/about/AboutPages';
import LivePages from './pages/live/LivePages'
import NewsDetail from './pages/news/pages/NewsDetail'

const LayoutIndex = () => {
    return (
        <div>
            <IndexHeader />
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Homepages}/>
                        <Route path="/news" component={NewsPages}/>
                        <Route path="/news-:id" component={NewsDetail}/>
                        <Route path="/about" component={AboutPages}/>
                        <Route path="/live" component={LivePages}/>
                        <Route path="*" exact component={Homepages}/>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}


export default LayoutIndex
