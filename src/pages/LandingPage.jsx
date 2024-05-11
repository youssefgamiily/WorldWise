import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
// import { Button } from "flowbite-react";
import { Button } from "@material-tailwind/react";

export default function LandingPage({ active, setActive }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLoginClick() {
    if (location.pathname !== "/login") {
      navigate("/login");
    }
  }

  return (
    <div className="w-12/12">
      <div className="absolute inset-0 bg-[url('src/assets/bg.jpg')] bg-center bg-cover h-screen w-screen mx-auto z-0 grayscale"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-900 opacity-40 h-screen w-screen mx-auto z-0 grayscale"></div>
    <div className="h-screen  z-30">
      {" "}
      {/* Note: 'flowbite-react/Container' is the older way to import */}
      <NavBar setActive={setActive} active={active} />
      <div className="bg-transparent h-screen flex flex-col justify-between items-center grayscale-0">
        <div className="h-3/6 flex flex-col justify-between items-center m-auto">
        <div>
          <h1 className="text-5xl font-extrabold text-white">
          You travel the world{" "}
        </h1>
        <h1 className="text-5xl font-extrabold text-logo-green">
          WorldWise keeps track of your adventures.{" "}
        </h1>
        </div>
        <p className="mb-3 text-white dark:text-gray-400">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Button
          onClick={handleLoginClick}
          className="greenBtn bg-logo-green"
          id="startTrackingBtn"
          >
          START TRACKING NOW
        </Button>
        </div>
      </div>
    </div>
          </div>
  );
}
