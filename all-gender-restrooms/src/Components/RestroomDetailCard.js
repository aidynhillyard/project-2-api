import {useParams} from 'react-router';
import {useState, useEffect} from 'react';

const RestroomDetailCard = () => {
    
    return (
        <div className="restroom-detail-card">
            <h2><span className="center-align">Restroom Name</span></h2>
            <h3>Street</h3>
            <h3>City</h3>
            <h3>State</h3>
            <h3>Images for: Unisex, ADA, Changing Table</h3>
            <button>Add to List</button>
        </div>
    )
}

export default RestroomDetailCard;