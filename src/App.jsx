import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import MapPage from './pages/MapPage.jsx';
import CityList from "./pages/CityList.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  let state = useSelector((state) => state.app);
  let dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/app" element={<MapPage/>} >
              <Route path="cities" element={<CityList/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
