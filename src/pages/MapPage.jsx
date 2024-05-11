import L from 'leaflet'; // Import Leaflet
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setStatus, setWhen } from '../features/mapSlice.js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MapEventsHandler from '../components/MapEventsHandler.jsx';
import SideBar from '../components/MapSideBar.jsx';


export default function MapPage() {
  const state = useSelector((state) => state.map);
  const { markers, status } = useSelector((state) => state.map);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(setStatus(true))
  }, []);
  
  useEffect(()=>{

    dispatch(setWhen(JSON.stringify(new Date())))
  }, [state.form.id])



  useEffect(() => {
    console.log(state.status); // This will log the updated status after the state has been updated
  }, [state.status]);

  const customIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41], 
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    shadowAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="flex">
      <SideBar/>
      {state.status && (
        <div className='w-[70%] overflow-hidden flex-grow'>
          <MapContainer
            style={{
              height: "100vh",
              width: "100%",
              position: "relative",
              top: "0px",
              left: "0px",
              cursor: "crosshair"
            }}
            center={[29.9792, 31.1342]}
            zoom={13}
            scrollWheelZoom={false}
            whenReady={() => dispatch({type:'setStatus', payload:true})}
            
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            
            state.markers.map ((marker) => (<div> <Marker position={[marker.position[0], marker.position[1]]} icon={customIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker></div>))
            
            }
            {state.status && <MapEventsHandler/>}
          </MapContainer>
        </div>
      )}
    </div>
    </LocalizationProvider>
  );
}
