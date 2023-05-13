import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    showAndHideLogos:"hideLogos",
}

const logosState = createSlice({
    name:"logos",
    initialState,
    reducers:{
        showOrHideLogos:(state,{payload})=>{
            state.showAndHideLogos = payload
        },

    }
});

const logosReducer = logosState.reducer;
const {showOrHideLogos} = logosState.actions;
export {
    logosReducer,
    showOrHideLogos,
}