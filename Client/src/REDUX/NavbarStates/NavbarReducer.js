import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    showAndHideNav:"",
    showAndHideSearch:"",
}

const navbarState = createSlice({
    name:"navbar",
    initialState,
    reducers:{
        showOrHideNav:(state,{payload})=>{
            state.showAndHideNav = payload
        },
        showOrHideSearch:(state)=>{
            if(state.showAndHideSearch === ""){
                state.showAndHideSearch = "showAndHideSearch"
            }else{
                state.showAndHideSearch = ""
            }
        }
    }
});

const navbarReducer = navbarState.reducer;
const {showOrHideNav,showOrHideSearch} = navbarState.actions;
export {
    navbarReducer,
    showOrHideNav,
    showOrHideSearch
}