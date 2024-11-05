import { configureStore } from '@reduxjs/toolkit'
import { citiesReducer } from './reducer/citiesReducer.js'
import { cityReducer } from './reducer/cityReducer.js'

const store = configureStore({
    reducer: {
        citiesStore: citiesReducer,
        cityStore: cityReducer
    },
})

export default store
