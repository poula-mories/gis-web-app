import './App.css';
import Sidebar from './sidebar.js';
import Map from './map.jsx';
function App() {
  return (
    <div className="App" style={{width:'100%'}}>
      <div className="container" style={{padding:'0', margin:'0'}}>
        <div className="row">
          <div className="col-md-4 col-sm-4" style={{padding:'0', margin:'0'}}>
          <Sidebar/>

          </div>
          <div className="col-md-8 col-sm-8" style={{padding:'0', margin:'0'}}>
          <Map/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
