// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
