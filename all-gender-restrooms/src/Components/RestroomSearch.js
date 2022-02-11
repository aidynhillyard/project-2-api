import {useState, useEffect} from 'react';
import {Route, Link, Routes, Naviage} from 'react-router-dom'
import RestroomDetailCard from './Components/RestroomDetailCard'

const RestroomSearch = () => {

    return (
        <div className="RestroomSearch">
            <ul className="full-restroom-list">
            </ul>
            <RestroomDetailCard toggle={toggle} />
        </div>
    )
}

export default RestroomSearch;