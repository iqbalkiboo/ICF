import './App.css';
// import LayoutIndex from './layouts/index';
import IndexHeader from './components/header/Index'
import Homepages from './layouts/pages/homepages/Homepages'
import Footer from './components/footer/Footer'

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import NewsPages from './layouts/pages/news/News';
import AboutPages from './layouts/pages/about/AboutPages';
import LivePages from './layouts/pages/live/LivePages'
import NewsDetail from './layouts/pages/news/pages/NewsDetail'
import RegulationPages from './layouts/pages/regulation/RegulationPages';
import GalleryPage from './layouts/pages/gallery/GalleryPage';
import RacePage from './layouts/pages/race/RacePage';

function App() {
  return (
    <div className="App">
      <IndexHeader />
          <Router>
              <Switch>
                  <Route exact path="/" component={Homepages}/>
                  <Route path="/news" component={NewsPages}/>
                  <Route path="/news-:id" component={NewsDetail}/>
                  <Route path="/about" component={AboutPages}/>
                  <Route path="/regulation" component={RegulationPages}/>
                  <Route path="/gallery" component={GalleryPage}/>
                  <Route path="/race" component={RacePage}/>
                  <Route path="/live" component={LivePages}/>
                  <Route exact path="*" component={Homepages}/>
              </Switch>
          </Router>
      <Footer />
    </div>
  );
}

export default App;
