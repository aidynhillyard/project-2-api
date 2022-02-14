import {useState, useEffect} from 'react';
import {Route, Link, Routes, Naviage} from 'react-router-dom'
import RestroomDetailCard from './RestroomDetailCard';

const RestroomSearch = ({ handleAddRestroomList }) => {

    // This will set useStates
    // const [restroomList, setRestroomList] = useState([])
    const [toggle, setToggle] = useState(true)
    const [keyword, setKeyword] = useState('')
    const [restrooms, setRestrooms] = useState([])

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
        <li className="restroom-list" key={id}>
            {/* On-click toggle will toggle the RestroomDetailCard Component */}
            <Link onClick={() => setToggle(!toggle)} to={`/restroomsearch/${restroom.name}`} key={id}>{restroom.name}</Link>
        </li>
    ))

    //   console.log(restrooms.name)
    //   console.log(restroomList)

      return (
        <div className="search-container">
          <form className="search-form" onSubmit={handleSubmit}>
            <label>Keyword: </label>
            <input type="text" value={keyword} onChange={handleChange} />
            <input type="submit" value="Find Restroom Info" />
          </form>
          <div className="restroom-search">
            {restroomList}
            <h2>Restroom Name: {restrooms[0]?.name}</h2>
            <h3>Restroom City: {restrooms[0]?.city}</h3>
            <RestroomDetailCard toggle={toggle} handleAddRestroomList={handleAddRestroomList}/>
          </div>
        </div>
      );

    // // This will run getRestroomList on page load; it gets the list of All-Gender Restrooms.
    // useEffect (() => {
    //     getRestroomList()
    // }, [])

    // const getRestroomList = () => {
    //     const url = "https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&offset=0&ada=true&query=burnsville"

    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => setRestroomList(data))
    //         .catch(() => console.log("There are no search results."))
    //     }

    // const listOfRestrooms = restroomList.map((restroom, id) => (
    //     <li className="restroom-list" key={id}>
    //         {/* On-click toggle will toggle the RestroomDetailCard Component */}
    //         <Link onClick={() => setToggle(!toggle)} to={`/restroomsearch/${restroom.name}`} key={id}>{restroom.name}</Link>
    //     </li>
    //     )
    // )

    // console.log(restroomList)

    // return (
    //     <div className="restroom-search">
    //         <ul className="full-restroom-list">{listOfRestrooms}</ul>
    //         <RestroomDetailCard toggle={toggle}
    //         handleAddRestroomList={handleAddRestroomList}/>
    //     </div>
    // )
}

export default RestroomSearch;