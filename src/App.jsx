import './App.css';
import Sidebar from './sidebar.js';
import Map from './map.jsx';
function App() {
  return (
    <div className="App" style={{width:'100%'}}>
      <div className="container-fluid" 
      // style={{padding:'0'}}
      >
        <div className="row">
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12 sidebarApp" style={{padding:'0'}}>
          <Sidebar/>

          </div>
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-8 col-sm-12 mapApp" style={{padding:'0'}}>
          <Map/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
