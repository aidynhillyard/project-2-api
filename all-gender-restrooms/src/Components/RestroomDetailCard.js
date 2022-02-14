import {useState } from 'react';

const RestroomDetailCard = ({ toggle, handleAddRestroomList, restrooms, restroomId }) => {
    const [singleRestroom, setSingleRestroom] = useState([])

    const restroomList = restrooms?.map((soloRestroom, id) => (
            <div className="restroom-detail-card" key={id} style={{ display: (restroomId === id) ? "block" : "none" }}>
                <h2><span className="center-align">{(soloRestroom?.name) ? (soloRestroom?.name) : ''}</span></h2>
                <p>{soloRestroom?.street ? soloRestroom?.street : ''}</p>
                <p>{soloRestroom?.city ? soloRestroom?.city : ''}</p>
                <p>{soloRestroom?.state ? soloRestroom?.state : ''}</p>
                <p>Images for: Unisex, ADA, Changing Table</p>
                <button className="detail-card-add-button" onClick={() => handleAddRestroomList(soloRestroom?.name)}>Add to List</button>
            </div>
        ))

    return (
        <>
            {restroomList}
        </>
    )
}

export default RestroomDetailCard;