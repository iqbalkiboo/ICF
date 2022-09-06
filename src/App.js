import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Headers from './components/header/Index'
import Footers from './components/footer/Footer'
import Home from './routes/homepages/Homepages'
import ICF from './routes/race/RacePage'
import News from './routes/news/News'
import NewsDetail from './routes/news/pages/NewsDetail'
import About from './routes/about/AboutPages'
import Regulation from './routes/regulation/RegulationPages'
import Live from './routes/live/LivePages'
import Contact from './routes/contact/ContactPage';
import Gallery from './routes/gallery/GalleryPage';
import SearchPage from './routes/search/SearchPage';
import DetailRace from './routes/race/components/detail/Detail';

function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calendar" element={<ICF />} />
        <Route path="/calendar/:id" element={<DetailRace />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/regulation" element={<Regulation />} />
        <Route path="/news" element={<News />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;
