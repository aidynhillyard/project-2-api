import {useParams} from 'react-router';
import {useState, useEffect} from 'react';

const RestroomDetailCard = ({ toggle, handleAddRestroomList, keyword }) => {
    const [singleRestroom, setSingleRestroom] = useState([])

    let params = useParams()

    useEffect (() => {
        getSingleRestroom()
    }, [toggle])

    const getSingleRestroom = () => {
        const url = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&offset=0&query=${keyword}` 
            // (!params.name ? singleRestroom[0]?.name : params.name)

        fetch(url)
            .then((response) => response.json())
            .then((data) => setSingleRestroom(data))
            .catch(() => console.log("There are no results."))
    }

    const restroomList = singleRestroom.map((soloRestroom, id) => (
        <div className="restroom-detail-card">
            <h2><span className="center-align">{(soloRestroom?.name) ? (soloRestroom?.name) : ''}</span></h2>
            <p>{soloRestroom?.street ? soloRestroom?.street : ''}</p>
            <p>{soloRestroom?.city ? soloRestroom?.city : ''}</p>
            <p>{soloRestroom?.state ? soloRestroom?.state : ''}</p>
            <p>Images for: Unisex, ADA, Changing Table</p>
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