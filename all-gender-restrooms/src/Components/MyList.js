const MyList = ({ restroomList, handleRemoveRestroomList }) => {

    // useState from App.js to add and remove

    const populateList = restroomList.map((restroom, id) => {
        return (
            <div className="list-card" key={id}>
                <p>{restroom.name}</p>
                <button onClick={() => handleRemoveRestroomList(restroom)}>Remove from list</button>
            </div>
        )
    })

    return (
        <div className="my-list">
            {populateList}
        </div>
    )
}

export default MyList;