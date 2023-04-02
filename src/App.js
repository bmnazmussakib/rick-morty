import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filter from './components/Filter/Filter.jsx';
import Cards from './components/Cards/Cards.jsx';

function App() {
  return (
    <div className="App">
      <h1 className='text-center py-3'>Rick & Morty <span className='text-primary'>Wiki</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter/>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4"><Cards /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
