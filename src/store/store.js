import { configureStore } from '@reduxjs/toolkit'
import { citiesReducer } from './reducer/citiesReducer.js'
import { cityReducer } from './reducer/cityReducer.js'
import { authReducer } from './reducer/authReducer.js'

const store = configureStore({
    reducer: {
        
        citiesStore: citiesReducer,
        cityStore: cityReducer,
        authStore: authReducer,
    },
})

export default store
