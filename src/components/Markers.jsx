import { Button } from "@material-tailwind/react";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { setCity, setWhen, setNotes, submitForm } from "../features/mapSlice.js";
import {DatePicker} from '@mui/x-date-pickers/DatePicker/DatePicker.js';
import dayjs, { Dayjs } from 'dayjs';
function MarkerForm(){
    let dispatch=useDispatch()
    let state = useSelector((state)=>state.map)
    function handleFormSubmit () {
      dispatch(submitForm())
    }
  
  
    return (
      <form className="flex flex-col justify-center items-center w-full flex flex-col gap-4 py-2 w-[90%] m-auto bg-[#42484d] rounded mt-4 ">
        <TextField id="city-name" type="string" label={state.markers.find(marker=>{return marker.id===state.form.id}).address.city} className='w-96' onChange={(e)=>dispatch(setCity(e.target.value))}/>
        <DatePicker
            label="Controlled picker"
            value={dayjs(JSON.parse(state.form.when))}
            onChange={(newValue) => dispatch(setWhen(JSON.stringify(newValue.toDate())))}
          />
        
        <TextField id="city-name" type="string" label="Trip Notes" className='w-96' onChange={(e)=>dispatch(setNotes(e.target.value))}/>
        <Button color="blue-gray" className="place-self-center w-52" onClick={()=>handleFormSubmit()}>Submit</Button>  
      </form>
    )
  
  }
  
  
  function SideMarker ({marker}) {
      let state = useSelector((state) => state.map);
      if (state.active == "cities") {
      
        return (
          <div className='bg-[#42484d] h-[6%] flex justify-start align-center w-[90%] mx-auto border-t-[1px] border-[#00c46a] border-solid border-b-[1px] border-r-[1px] border-l-[4px] rounded-tl-md rounded-bl-md p-1'>
            <h3 className='uppercase text-left h-fit self-center text-xl'>{marker.address.country_code}</h3>
            <h3 className='uppercase text-left h-fit self-center text-l'>{marker.city?marker.city:marker.address.city}</h3>
          </div>
        )
      } else {
        return (
          // change this later to show countries
          <div className='bg-[#42484d] h-[6%] flex justify-start align-center w-[90%] mx-auto border-t-[1px] border-[#00c46a] border-solid border-b-[1px] border-r-[1px] border-l-[4px] rounded-tl-md rounded-bl-md p-1'>
            <h3 className='uppercase text-left h-fit self-center text-xl'>{marker.address.country_code}</h3>
            <h3 className='uppercase text-left h-fit self-center text-l'>{marker.city?marker.city:marker.address.city}</h3>
          </div>
        )
      }
  }


  export {MarkerForm, SideMarker}