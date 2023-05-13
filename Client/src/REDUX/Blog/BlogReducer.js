import {createSlice} from "@reduxjs/toolkit"
import blogs from "../../DATA/BLOG_DATA/BlogData";

const randomIndex = Math.floor(Math.random() * blogs.length);
const randomItem = blogs[randomIndex];

const initialState= {
    BlogData:{...randomItem,content:""},
}

const blogState = createSlice({
    name:"blog",
    initialState,
    reducers:{
        ChangeBlogData:(state,{payload})=>{
            state.BlogData ={ ...payload,content:""}
        }
    }
});

const blogReducer = blogState.reducer;
const {ChangeBlogData} = blogState.actions;
export {
    blogReducer,
    ChangeBlogData
}