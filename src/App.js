import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filter from './components/Filter/Filter.jsx';
import Cards from './components/Cards/Cards.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import Search from './components/Search/Search.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [data, setData] = useState({})
  const [search, setSearch] = useState("")
  // console.log(search)

  const { info, results } = data;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`



  useEffect(() => {
    axios.get(api)
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [api])

  return (
    <div className="App">
      {/* <h1 className='text-center py-3'>Rick & Morty <span className='text-primary'>Wiki</span></h1> */}

      <Search setSearch={setSearch}/>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <Cards results={results} />
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
