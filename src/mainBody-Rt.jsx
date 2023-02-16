import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Objects from "./pages/Objects";
import NoPage from "./pages/NoPage";
export default function MainBodyRT() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Sessions" element={<Blogs />} />
          <Route path="objects" element={<Objects />} />
            <Route path= "vals" element ={<Home /> } />
            
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
