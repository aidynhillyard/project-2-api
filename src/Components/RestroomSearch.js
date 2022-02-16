import {useState, useEffect} from 'react';
import RestroomDetailCard from './RestroomDetailCard';
import Loading from './Loading';

const RestroomSearch = ({ handleAddRestroomList }) => {

    // useStates
    const [toggle, setToggle] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [restrooms, setRestrooms] = useState([])    
    const [restroomId, setRestroomId] = useState('')

    // useEffects
    useEffect(()=>{
        const restroomData = localStorage.getItem('restroomData')
          if(restroomData){
            setRestrooms(JSON.parse(restroomData))
          }
        },[])
        
    useEffect(()=>{
        localStorage.setItem('restroomData',JSON.stringify(restrooms))
        })

    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const url = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=30&offset=0&query=${keyword}`;
    
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRestrooms(data))
            .catch(() => console.log("There are no search results."))
        
        handleLoading();
    }

    // handleChange
    const handleChange = (event) => {
        setKeyword(event.target.value);
      };

    // handleClearList
    const handleClearList = () => {
        setRestrooms([])
        setKeyword('');
    }
    
    // handleLoading
    const handleLoading = () => {
        if (restrooms === []) {
          setToggle(!toggle)
        } else {
          setToggle(toggle)
        }
    }

    const restroomList = restrooms.map((restroom, id) => (
        <li className="restroom-list-item" key={id} >
            {/* On-click toggle will toggle the RestroomDetailCard Component */}
            <a onClick={(event) => {
                setRestroomId(id);
            }}
            key={id}>{restroom.name}</a>
        </li>
    ))
    console.log(toggle)
      return (
        
        <div className="search-container">
          <h1 className="header-text-search">Restroom Resource: Find All-Gender Restrooms</h1>
          <form className="search-form" onSubmit={handleSubmit}>
            <label>Keyword: </label>
            <input id="input" type="text" placeholder="Enter a city or state" value={keyword} onChange={handleChange} />
            <input type="submit" value="Find Restroom Info" className="purple-button"/>
          </form>
          <button id="clear-button" className="purple-button" onClick={handleClearList}>Clear Search Results</button>
          <div className="loading-container" style={{ display: toggle ? "block" : "none"}}>
            <Loading />
          </div>
          <div className="restroom-search">
            <ul className="full-restroom-list">{restroomList}</ul>
            <RestroomDetailCard handleAddRestroomList={handleAddRestroomList} restrooms={restrooms} restroomId={restroomId} />
          </div>
        </div>
      );
}

export default RestroomSearch;

// Failed ternary
// {restrooms.name ? restroomList : "Loading..."}