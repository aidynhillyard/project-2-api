import { useState, useEffect } from "react";
import RestroomDetailCard from "./RestroomDetailCard";
import Loading from "./Loading";

const RestroomSearch = ({ handleAddRestroomList }) => {
  // useStates
  const [keyword, setKeyword] = useState("");
  const [restrooms, setRestrooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [restroomId, setRestroomId] = useState("");
  const [error, setError] = useState(null);

  // useEffects
  useEffect(() => {
    const restroomData = localStorage.getItem("restroomData");
    if (restroomData) {
      setRestrooms(JSON.parse(restroomData));
    }
  }, [loading]);

  useEffect(() => {
    localStorage.setItem("restroomData", JSON.stringify(restrooms));
  });

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(!loading);

    const url = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=45&offset=0&query=${keyword}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRestrooms(data);
        setLoading(loading);
      })
      .catch(() => setError("API failed; try again later."));

    if (error) {
      return <h1>{error}</h1>;
    }
    return <button onClick={handleSubmit}>Click Me</button>;
  };

  // handleChange
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  // handleClearList
  const handleClearList = () => {
    setRestrooms([]);
    setKeyword("");
  };

  // mapping through the data array
  const restroomList = restrooms.map((restroom, id) => (
    <li className="restroom-list-item" key={id}>
      <a
        onClick={(event) => {
          setRestroomId(id);
        }}
        key={id}
      >
        {restroom.name}
      </a>
    </li>
  ));

  return (
    <div className="search-container">
      <h1 className="header-text-search">
        Restroom Resource: Find All-Gender Restrooms
      </h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <label>Keyword: </label>
        <input
          id="input"
          type="text"
          placeholder="Try a city or state"
          value={keyword}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Find Restroom Info"
          className="purple-button"
        />
      </form>
      <button
        id="clear-button"
        className="purple-button"
        onClick={handleClearList}
      >
        Clear Search Results
      </button>

      <div
        className="loading-container"
        style={{ display: loading ? "block" : "none" }}
      >
        <Loading />
      </div>
      <div className="restroom-search">
        <ul className="full-restroom-list">{restroomList}</ul>
        <RestroomDetailCard
          handleAddRestroomList={handleAddRestroomList}
          restrooms={restrooms}
          restroomId={restroomId}
        />
      </div>
    </div>
  );
};

export default RestroomSearch;
