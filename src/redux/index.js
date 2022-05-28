import { configureStore } from "@reduxjs/toolkit";
import slicerReducer from '../slicer'

export default configureStore ({
    reducer:{
        slicerReducer,

    },
})