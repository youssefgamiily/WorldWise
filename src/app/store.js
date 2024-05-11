// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice.js';
import mapReducer from '../features/mapSlice.js';

export default configureStore({
    reducer: {
        app: appReducer,
        map: mapReducer
    }
    // Add other reducers here if you have more slices
})