import {useState } from 'react';

const RestroomDetailCard = ({ toggle, handleAddRestroomList, restrooms, restroomId }) => {
    // const [singleRestroom, setSingleRestroom] = useState([])

    const restroomList = restrooms?.map((soloRestroom, id) => (
            <div className="restroom-detail-card" key={id} style={{ display: (restroomId === id) ? "flex" : "none" }}>
                <div className="name-address">
                    <h2><span className="center-align">{(soloRestroom?.name) ? (soloRestroom?.name) : ''}</span></h2>
                    <p>{soloRestroom?.street ? soloRestroom?.street : ''}</p>
                    <p>{soloRestroom?.city ? soloRestroom?.city : ''}</p>
                    <p>{soloRestroom?.state ? soloRestroom?.state : ''}</p>
                </div>
                <div className="icon-container">
                    <img src="https://images2.imgbox.com/e1/4e/7wYwT6wm_o.png" alt="" className="card-icon" title="Accessible" style={{ display: (soloRestroom?.accessible === true) ? "block" : "none" }} />
                    <img src="https://images2.imgbox.com/5a/b6/Zy2vVTs1_o.png" alt="" className="card-icon" title="Unisex / Gender Neutral" style={{ display: (soloRestroom?.unisex === true) ? "block" : "none" }} />
                    <img src="https://images2.imgbox.com/92/b4/PLm0TKqy_o.png" alt="" className="card-icon" title="Changing Table" style={{ display: (soloRestroom?.changing_table === true) ? "block" : "none" }} />
                </div>
                <button className="detail-card-add-button" onClick={() => handleAddRestroomList(soloRestroom?.name)}>Add to List</button>
            </div>
        ))

    return (
        <div className="card-container">
            {restroomList}
        </div>
    )
}

export default RestroomDetailCard;