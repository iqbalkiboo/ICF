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

function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/icf" element={<ICF />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/regulation" element={<Regulation />} />
        <Route path="/news" element={<News />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;
