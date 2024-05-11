import { NavBar } from "../components/NavBar.jsx";
import { FloatingLabel, Button } from "flowbite-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHover, setIsLoggedIn, setActive } from "../features/appSlice.js";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => {
    if (location.pathname !== "/app") {
      setActive("app");
      navigate("/app");
    }
  }
  return (
    <div className="h-screen flex flex-col bg-worldwise-bg">
      <NavBar />
      <div className="flex justify-center flex flex-grow flex-col justify-center items-center">
        <form className="flex flex-col justify-center items-center w-content bg-[#42484d] p-10 rounded-md gap-3">
          {/* <FloatingLabel variant="outlined" label="Email" className="w-96"/> */}
          {/* <FloatingLabel variant="outlined" label="Email" className="" />
          <FloatingLabel variant="outlined" label="Password" className="w-96" /> */}
          <input type="text" id="email" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-96 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="jack@example.com" />
          <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"></label>
          <input type="password"  id="small_filled" placeholder="password" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-96 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
          <label htmlFor="small_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"></label>
          <Button color="success" className="place-self-center w-48" onClick={()=>handleLogin()}>Submit</Button>  
        </form>
      </div>
    </div>
  );
}
