import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createPageUrl } from "./utils.js";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={createPageUrl("/")} element={<Home />} />
          <Route path={createPageUrl("home")} element={<Home />} />
          <Route path={createPageUrl("blog")} element={<Blog />} />
          <Route path={createPageUrl("projects")} element={<Projects />} />
          <Route path={createPageUrl("contact")} element={<Contact />} />
          <Route path={createPageUrl("about")} element={<About />} />
          <Route path="*" element={<div>Something went wrong!</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
