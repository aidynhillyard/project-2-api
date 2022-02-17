import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./responsive.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RestroomSearch from "./Components/RestroomSearch";
import MyList from "./Components/MyList";
import About from "./Components/About";

function App() {
  // This sets the useState
  const [restroomList, setRestroomList] = useState([]);

  // This adds an All-Gender Restroom to the user's list (My List)
  const handleAddRestroomList = (
    name,
    street,
    city,
    state,
    directions,
    comment,
    accessible,
    unisex,
    changing_table
  ) => {
    const newArray = [...restroomList];
    newArray.push({
      name,
      street,
      city,
      state,
      directions,
      comment,
      accessible,
      unisex,
      changing_table,
    });
    setRestroomList(newArray);
  };

  // This removes an All-Gender Restroom from the user's list (My List)
  const handleRemoveRestroomList = (object) => {
    const newArray = [...restroomList];
    const filteredArray = newArray.filter((name) => name !== object);
    setRestroomList(filteredArray);
  };

  return (
    <div className="App">
      {/* Header Component has Nav and Header title */}
      <Header />
      <main>
        <Routes>
          <Route
            path="/restroomsearch"
            element={
              <RestroomSearch handleAddRestroomList={handleAddRestroomList} />
            }
          />
          <Route path="/about" element={<About />} />
          {/* The :name is a parameter we can now store */}
          <Route
            path="/restroomsearch/:name"
            element={
              <RestroomSearch handleAddRestroomList={handleAddRestroomList} />
            }
          />
          <Route
            path="/mylist"
            element={
              <MyList
                restroomList={restroomList}
                handleRemoveRestroomList={handleRemoveRestroomList}
              />
            }
          />
          <Route path="/" element={<Navigate to="/restroomresource" />} />
          <Route
            path="/restroom-search"
            element={<Navigate to="/restroomsearch" />}
          />
          <Route path="/search" element={<Navigate to="/restroomsearch" />} />
        </Routes>
      </main>
      {/* Footer has name and social media icons */}
      <Footer />
    </div>
  );
}

export default App;
