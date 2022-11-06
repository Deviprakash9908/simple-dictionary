import  Axios  from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [searchText, setSearchText] = useState("");
  const [definitionArr, setDefinitionArr] = useState([]);

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setSearchText(e.target.value)
  }

  const searchTextFunction = () => {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
    .then((res)=>setDefinitionArr(res.data[0].meanings[0].definitions))
  }

  return (
    <div className="App">
      <h1>Simple Dictionary</h1>
      <div>
        <input className='inputField' onChange={handleInputChange}/>
        <button className='searchBtn' onClick={searchTextFunction}>Search</button>
      </div>
      {definitionArr.map((defi) => {
        return <div className='definitionContainer'>{defi.definition}</div>
      })}
    </div>
  );
}

export default App;
