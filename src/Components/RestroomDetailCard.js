const RestroomDetailCard = ({ handleAddRestroomList, restrooms, restroomId }) => {

    const restroomList = restrooms?.map((soloRestroom, id) => (
            <div className="restroom-detail-card" key={id} style={{ display: (restroomId === id) ? "flex" : "none" }}>
                <div className="name-address">
                    <h2><span className="center-align">{(soloRestroom?.name) ? (soloRestroom?.name) : ''}</span></h2>
                    <p>{soloRestroom?.street ? soloRestroom?.street : ''}</p>
                    <p>{soloRestroom?.city ? soloRestroom?.city : ''}</p>
                    <p>{soloRestroom?.state ? soloRestroom?.state : ''}</p>
                </div>
                <div className="icon-container">
                    <img src="https://images2.imgbox.com/25/4a/BBeL0yxC_o.png" alt="" className="card-icon" title="Accessible" style={{ display: (soloRestroom?.accessible === true) ? "block" : "none" }} />
                    <img src="https://images2.imgbox.com/62/b6/zyZaFkGl_o.png" alt="" className="card-icon" title="Unisex / Gender Neutral" style={{ display: (soloRestroom?.unisex === true) ? "block" : "none" }} />
                    <img src="https://images2.imgbox.com/53/77/qnUB46Pf_o.png" alt="" className="card-icon" title="Changing Table" style={{ display: (soloRestroom?.changing_table === true) ? "block" : "none" }} />
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