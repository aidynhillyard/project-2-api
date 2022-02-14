import {useParams} from 'react-router';
import {useState, useEffect} from 'react';

const RestroomDetailCard = ({ toggle, handleAddRestroomList }) => {
    const [singleRestroom, setSingleRestroom] = useState([])

    let params = useParams()

    useEffect (() => {
        getSingleRestroom()
    }, [toggle])

    const getSingleRestroom = () => {
        const url = "https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&offset=0&query=burnsville" 
            // (!params.name ? singleRestroom[0]?.name : params.name)

        fetch(url)
            .then((response) => response.json())
            .then((data) => setSingleRestroom(data))
            .catch(() => console.log("There are no results."))
    }

    const restroomList = singleRestroom.map((soloRestroom, id) => (
        <div className="restroom-detail-card">
            <h2><span className="center-align">{(soloRestroom?.name) ? (soloRestroom?.name) : ''}</span></h2>
            <h3>{soloRestroom?.street ? soloRestroom?.street : ''}</h3>
            <h3>{soloRestroom?.city ? soloRestroom?.city : ''}</h3>
            <h3>{soloRestroom?.state ? soloRestroom?.state : ''}</h3>
            <h3>Images for: Unisex, ADA, Changing Table</h3>
            <button onClick={() => handleAddRestroomList(soloRestroom?.name)}>Add to List</button>
        </div>
    ))

    console.log(restroomList)

    return (
        <>
            {restroomList}
        </>
    )
}

export default RestroomDetailCard;