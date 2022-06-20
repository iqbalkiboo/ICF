import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Headers from "./components/header/Index"
import Home from "./routes/homepages/Homepages";
import News from "./routes/news/News";
import Footers from "./components/footer/Footer"
// import Invoices from "./routes/invoices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Headers />
    <Routes>
      <Route exact path="/" element={<Home />}>
      <Route path="news" element={<News />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Route>
    </Routes>
    <Footers />
  </BrowserRouter>
);