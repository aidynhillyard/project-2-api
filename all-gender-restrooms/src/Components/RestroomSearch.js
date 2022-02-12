import {useState, useEffect} from 'react';
import {Route, Link, Routes, Naviage} from 'react-router-dom'
import RestroomDetailCard from './RestroomDetailCard';

const RestroomSearch = ({ handleAddRestroomList }) => {

    // This will set useStates
    const [restroomList, setRestroomList] = useState([])
    const [toggle, setToggle] = useState(true)

    // This will run getRestroomList on page load; it gets the list of All-Gender Restrooms.
    useEffect (() => {
        getRestroomList()
    }, [])

    const getRestroomList = () => {
        const url = "https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&offset=0&ada=true&query=burnsville"

        fetch(url)
            .then((response) => response.json())
            .then((data) => setRestroomList(data))
            .catch(() => console.log("There are no search results."))
        }

    const listOfRestrooms = restroomList.map((restroom, id) => (
        <li className="restroom-list" key={id}>
            {/* On-click toggle will toggle the RestroomDetailCard Component */}
            <Link onClick={() => setToggle(!toggle)} to={`/restroomsearch/${restroom.name}`} key={id}>{restroom.name}</Link>
        </li>
        )
    )

    console.log(restroomList)

    return (
        <div className="restroom-search">
            <ul className="full-restroom-list">{listOfRestrooms}</ul>
            <RestroomDetailCard toggle={toggle}
            handleAddRestroomList={handleAddRestroomList}/>
        </div>
    )
}

export default RestroomSearch;