import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({ 
    name: "cars", 
    initialState: { 
        data: [], 
    }, 
    reducers: { 
        importCar: (state, action) => { 
        state.data = action.payload; 
        }, 
        carsFilter: (state, action) => { 
        const { driver, date, time, capacity } = action.payload; 
        state.data = state.data.filter((car) => { 
            if (date === "") return car.capacity >= capacity; 
            else return car.availableAt.slice(0, 10) >= date && car.capacity >= capacity; 
        }); 
        }, 
    }, 
}); 
 
export const { importCar, carsFilter } = carsSlice.actions; 
 
export default carsSlice.reducer;