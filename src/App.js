import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./Books";
import Book from "./Book";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/books" element={<Books />} />

          <Route path="/book/:id" element={<Book />} />
          <Route
            path="/"
            element={
              <div>
                <Link to="/books">Books</Link>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
