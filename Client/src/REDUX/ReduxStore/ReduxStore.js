import {configureStore} from '@reduxjs/toolkit'
import { navbarReducer } from '../NavbarStates/NavbarReducer'
import {blogReducer} from "../Blog/BlogReducer"
import { logosReducer } from '../LogosState/LogosStates'

const store = configureStore({
    reducer:{
        navBarState:navbarReducer,
        blogDataSate:blogReducer,
        logosState:logosReducer
    }
})


export default store;