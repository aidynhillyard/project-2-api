import {Route, Link, Routes, Navigate} from "react-router-dom";
import {useState, useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RestroomSearch from "./Components/RestroomSearch";
import MyList from "./Components/MyList";

function App() {

  // This sets the useState
  const [restroomList, setRestroomList] = useState([])

  // This adds an All-Gender Restroom to the user's list (My List)
  const handleAddRestroomList = (name) => {
    const newArray = [...restroomList];
    newArray.push({ name });
    setRestroomList(newArray);
  }

  // This removes an All-Gender Restroom from the user's list (My List)
  const handleRemoveRestroomList = () => {
    const newArray = [...restroomList];
    const filteredArray = newArray.filter((name) => name !== name);
    setRestroomList(filteredArray);
  }

  // console.log(restroomList)

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
