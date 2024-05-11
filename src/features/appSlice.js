import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hover: "",
    isLoggedIn: false,
    active: "home",
  }
  
  const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
    setHover: (state, action) => {
        state.hover = action.payload
    },
    setIsLoggedIn: (state, action) => {
        state.isLoggedIn = action.payload
    },
    setActive: (state, action) => {
        state.active = action.payload
    },
  }})

export const { setHover, setIsLoggedIn, setActive } = appSlice.actions;
export default appSlice.reducer