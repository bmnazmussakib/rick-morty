import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filter from './components/Filter/Filter.jsx';
import Cards from './components/Cards/Cards.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import Search from './components/Search/Search.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Episodes from './Pages/Episodes.jsx';
import Location from './Pages/Location.jsx';
import NoPage from './Pages/NoPage.jsx';
import CardDetails from './components/Cards/CardDetails.jsx';

function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [data, setData] = useState({})
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")

  const { info, results } = data;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`



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

      <Routes>
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>


      {/* <h1 className='text-center py-3'>Rick & Morty <span className='text-primary'>Wiki</span></h1> */}

      <Search setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filter setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <div className="col-8">
            <Cards page='/' results={results} />
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
