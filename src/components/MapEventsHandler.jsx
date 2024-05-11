import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrLocation, addMarker, setFormId, viewForm } from '../features/mapSlice.js';

export default function MapEventsHandler() {
    const map = useMap();
    let dispatch = useDispatch()
    useEffect(() => {
      map.locate();
      map.on('locationfound', (e) => {
    
        dispatch(setCurrLocation([e.latitude, e.longitude]))
        map.flyTo(e.latlng, map.getZoom());
      });
  
      map.on('click', async function (e) {
          console.log(e)
          const latlng = e.latlng; // Retrieve latitude and longitude from click event
          const newMarker = {id: `${latlng.lat}${latlng.lng}`, position: [latlng.lat, latlng.lng] }; // Create a new marker object
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${newMarker.position[0]}&lon=${newMarker.position[1]}`);
          let data = await response.json();
          console.log("marker data: ", data)
          newMarker.address=data.address
          dispatch(addMarker(newMarker))
          dispatch(setFormId(newMarker.id))
          dispatch(viewForm(true))
      });
  
      return () => {
        map.off('locationfound'); // Cleanup event listener
      };
    }, [map]);
  
    useEffect(()=>{
      
    },[])
  
    return null;
  }