import {useState, useEffect} from 'react';
import {Route, Link, Routes, Navigate} from 'react-router-dom'
import RestroomDetailCard from './RestroomDetailCard';

const RestroomSearch = ({ handleAddRestroomList }) => {

    // This will set useStates
    const [toggle, setToggle] = useState(true)
    const [keyword, setKeyword] = useState('')
    const [restrooms, setRestrooms] = useState([])
    const [restroomId, setRestroomId] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const url = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&offset=0&query=${keyword}`;
    
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRestrooms(data))
            .catch(() => console.log("There are no search results."))
    }

    const handleChange = (event) => {
        setKeyword(event.target.value);
      };

    const restroomList = restrooms.map((restroom, id) => (
        <li className="restroom-list-item" key={id}>
            {/* On-click toggle will toggle the RestroomDetailCard Component */}
            <a onClick={(event) => {
                setRestroomId(id)
                setToggle(!toggle)
            }}
            key={id}>{restroom.name}</a>
        </li>
    ))

      console.log(restroomList)

      return (
        <div className="search-container">
          <form className="search-form" onSubmit={handleSubmit}>
            <label>Keyword: </label>
            <input type="text" placeholder="Enter a city or state" value={keyword} onChange={handleChange} />
            <input type="submit" value="Find Restroom Info" />
          </form>
          <div className="restroom-search">
            <ul className="full-restroom-list">{restroomList}</ul>
            <RestroomDetailCard toggle={toggle} handleAddRestroomList={handleAddRestroomList} restrooms={restrooms} restroomId={restroomId} />
          </div>
        </div>
      );
}

export default RestroomSearch;