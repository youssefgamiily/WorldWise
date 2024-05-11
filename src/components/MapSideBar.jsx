import { Button, ButtonGroup } from '@material-tailwind/react';
import {MarkerForm, SideMarker} from "./Markers.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setActiveButton } from "../features/mapSlice.js";
export default function SideBar () {

    const state = useSelector((state) => state.map);
    const dispatch = useDispatch();

    return (<div className="w-[30%] bg-worldwise-bg">
            <div className="logo-div h-[8%]">
            <img className="w-[50%] m-auto mt-2 py-2 mb-3"
                onClick={() => {
                navigate("/");
                }}
                src="src/assets/logo.png"
            />
            </div>
            <ButtonGroup className='filter flex self m-auto h-[7%] w-fit bg-[#42484d] rounded py-0.5 text-transform: capitalize; '>
                <Button className= {`px-3 rounded ${state.active=='cities'? "bg-[#242a2e] active": "bg-[#42484d] not-Active"}`} key={Math.random()} onClick={()=>dispatch(setActiveButton('cities'))}>cities</Button>
                <Button className={`px-3 rounded ${state.active=='countries'? "bg-[#242a2e] active": "bg-[#42484d] not-Active"}`} key={Math.random()} onClick={()=>dispatch(setActiveButton('countries'))}>countries</Button>
            </ButtonGroup>
            <div className="flex flex-column gap-3 h-[85%]">
                {state.viewForm && <MarkerForm />}
                {!state.viewForm && <div className='markers-view flex flex-col gap-3 h-full w-full align-center mt-3'>
                {state.markers.map(marker=> (<SideMarker marker={marker} key={marker.id}/>) ) } 
                </div> }
            </div>
    </div>) 
}
