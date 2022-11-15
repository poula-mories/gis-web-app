import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import '../node_modules/leaflet/dist/leaflet.css';

function Map() {
    const position = [51.505, -0.09]

  return (
    <>
  
    <div className="map" style={{width:'100%', height:'90vh'}}>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height:'96vh'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
    {/* <div className="poula" style={{width:'100%', height:'90vh'}}>
      <h1>hello pop</h1>
    </div> */}
    </>
    );
  }
  
  export default Map;
  