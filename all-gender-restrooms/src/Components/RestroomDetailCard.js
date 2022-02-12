import {useParams} from 'react-router';
import {useState, useEffect} from 'react';

const RestroomDetailCard = ({ toggle, handleAddRestroomList }) => {
    const [singleRestroom, setSingleRestroom] = useState({})

    let params = useParams()

    useEffect (() => {
        getSingleRestroom()
    }, [toggle])

    const getSingleRestroom = () => {
        const url = "https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&offset=0&ada=true&query=burnsville"

        fetch(url)
            .then((response) => response.json())
            .then((data) => setSingleRestroom(data))
            .catch(() => console.log("There are no results."))
    }
    // console.log(singleRestroom[0].name)
    return (
        <div className="restroom-detail-card">
            {/* <h2><span className="center-align">{singleRestroom[0].name}</span></h2>
            <h3>{singleRestroom[0].street}</h3>
            <h3>{singleRestroom[0].city}</h3>
            <h3>{singleRestroom[0].state}</h3> */}
            <h3>Images for: Unisex, ADA, Changing Table</h3>
            <button onClick={() => handleAddRestroomList(singleRestroom[0].name)}>Add to List</button>
        </div>
    )
}

export default RestroomDetailCard;