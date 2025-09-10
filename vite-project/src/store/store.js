import {configureStore} from '@reduxjs/toolkit'
import  CounterSlice  from '../slice/Counter'

export const store = configureStore({
    reducer:{
        counter:CounterSlice
    },

})