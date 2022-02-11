import {Route, Link, Routes, Navigate} from "react-router-dom";
import {useState, useEffect} from "react";
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      {/* Header Component has Nav and header title */}
      <Header />
      <main>
      <Routes>
          <Route path="/restroomsearch" element={<RestroomSearch />} />
          {/* The :name is a parameter we can now store */}
          <Route path="/restroomsearch/:name" element={<RestroomSearch />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/" element = {<Navigate to="/restroomsearch" />} />
          <Route path="/restroom-search" element = {<Navigate to="/restroom-search" />} />
          <Route path="/search" element = {<Navigate to="/restroom-search" />} />
        </Routes>
      </main>
      {/* Footer has name and social media icons */}
      <Footer />
    </div>
  );
}

export default App;
