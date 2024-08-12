import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [25.684787, -100.441104];

export const Mapa = () => {
  return (
    <MapContainer center={position} zoom={16} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        {/* <Popup>
          Calle Microempresarios del Pte., Santa Catarina, N.L., México
        </Popup> */}
      </Marker>
    </MapContainer>
  )
}
