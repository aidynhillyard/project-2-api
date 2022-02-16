const MyList = ({ restroomList, soloRestroom, handleRemoveRestroomList }) => {

    // useState from App.js to add and remove

    const populateList = restroomList.map((restroom, id) => {
        console.log(restroom.directions)
        return (
            <div className="list-card" key={id}>
                <li className="li-my-list, bold">{restroom.name}</li>
                <li className="li-my-list">{restroom.street}</li>
                <li className="li-my-list">{restroom.city}</li>
                <li className="li-my-list">{restroom.state}</li>
                <li className="li-my-list">{restroom.directions ? "Directions: " + restroom.directions : ''}</li>
                <li className="li-my-list">{restroom.comment ? "Comment: " + restroom.comment : ''}</li>
                <div className="icon-container">
                    <img src="https://images2.imgbox.com/25/4a/BBeL0yxC_o.png" alt="" className="card-icon" title="Accessible" style={{ display: (restroom.accessible === true) ? "block" : "none" }} />
                    <img src="https://images2.imgbox.com/62/b6/zyZaFkGl_o.png" alt="" className="card-icon" title="Unisex / Gender Neutral" style={{ display: (restroom.unisex === true) ? "block" : "none" }} />
                    <img src="https://images2.imgbox.com/53/77/qnUB46Pf_o.png" alt="" className="card-icon" title="Changing Table" style={{ display: (restroom.changing_table === true) ? "block" : "none" }} />
                </div>
                <button className="purple-button" onClick={() => handleRemoveRestroomList(restroom)}>Remove from list</button>
            </div>
        )
    })

    return (
        <div className="my-list">
            <h1 className="header-text">Restroom Resource: My List of Restrooms</h1>
            <div className="list-card-container">
                {populateList}
            </div>
        </div>
    )
}

export default MyList;