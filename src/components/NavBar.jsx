import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { createTheme } from '@mui/material/styles';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setHover, setIsLoggedIn, setActive } from "../features/appSlice.js";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00c46a',
    },
    // ...other theme properties
  },
})

function NavBar({  }) {
  let dispatch= useDispatch()
  let state=useSelector((state)=>state.app)

  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (e, type) => {
    console.log(e.target.innerHTML)
    switch (type) {
      case "LOGIN":
        if (location.pathname !== "/login") {
          setActive("login");
          navigate("/login");
        }

        break;
      case "PRICING":
        if (location.pathname !== "/pricing") {
          setActive("pricing");
          navigate("/pricing");
        }
        break;
      case "PRODUCT":
        if (location.pathname !== "/product") {
          setActive("product");
          navigate("/product");
        }
        break;
    }
  };

  return (
    <div className="relative NavBar landingPage bg-transparent flex justify-between px-3 py-3 z-50">
      {/* <div className="logoDiv w-2/12  flex-grow-0"> */}
      <div className="flex justify-between items-center py-4 w-2/12">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="logo-img z-30"
          src="src/assets/logo.png"
        />
      </div>
      <ButtonGroup size="md" ripple={true} color="green">
        <Button
          onClick={(e) => handleClick(e, "PRICING")}
          className={`${
            location.pathname === "/pricing" ? "active" : "NA"
          } self-center bg-logo-green outline-none border-none focus-outline-none`}
          // color={hover? BackGroundOnHover : BackGround}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          PRICING
        </Button>
        <Button
          onClick={(e) => handleClick(e, "PRODUCT")}
          className={`${
            location.pathname === "/product" ? "active" : "NA"
          } self-center bg-logo-green outline-none`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          
        >
          PRODUCT
        </Button>
        <Button
          onClick={(e) => handleClick(e, "LOGIN")}
          className="text-center self-center bg-logo-green outline-none"
        >
          LOGIN
        </Button>
      </ButtonGroup>
    </div>
  );
}

export { NavBar };