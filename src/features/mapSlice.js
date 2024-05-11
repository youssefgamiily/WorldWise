import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    location: null,
    viewForm: false,
    active:'cities',
    markers: [],
    status: false,
    form: {
      city: "",
      when: null,
      // when: '2022-04-17',
      notes: "",
      id: null
    },
    
  }
  
  const mapSlice = createSlice({
    name: 'map',
    initialState: initialState,
    reducers: {
    setCity: (state, action) => {
        state.form.city = action.payload
    },
    setWhen: (state, action) => {
        state.form.when = action.payload
    },
    setNotes: (state, action) => {
        state.form.notes = action.payload
    },
    setStatus: (state, action) => {
      console.log(state)
      state.status = action.payload
      console.log(state)
    },
    setActiveButton: (state, action) => {
      state.active = action.payload
    },

    viewForm: (state, action) => {
      state.viewForm = action.payload
    },
    setCurrLocation: (state, action) => {
      state.location = action.payload
    },
    setFormId: (state, action) => {
      state.form.id = action.payload
    },
    addMarker: (state, action) => {
      if (!state.markers.find(marker => marker.id === action.payload.id)) {
        
        state.markers.push(action.payload)
      }
    },
    submitForm: (state, action) => {
      let formDetails = state.form

      let updatedMarkers = state.markers.map(marker => {
        if (marker.id === formDetails.id) { // what is this condition?
          return {
            ...marker,
            when: formDetails.when,
            city: formDetails.city,
            notes: formDetails.notes
          };
        } else {
          return marker;
        }
      });

      return {...state, markers: updatedMarkers, viewForm:false, form:initialState.form}
    },
    setDatePicker: (state, action)=> {
      return {...state, datePickerValue: action,payload}
    }
  }})

export const { setCity, setWhen, setNotes, setStatus, setActiveButton, viewForm, setCurrLocation, addMarker, submitForm, setFormId, setDatePicker } = mapSlice.actions;
export default mapSlice.reducer;