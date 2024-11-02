import { createReducer } from '@reduxjs/toolkit'
import { setCategory, setSearch, getCities } from '../actions/citiesActions'

const initialState = {
    cities: [],
    category: 'All',
    search: '',
    loading: true,
    error: false,
}

export const citiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setCategory, (state, action) => {
            state.category = action.payload
        })
        .addCase(setSearch, (state, action) => {
            state.search = action.payload
        })

        .addCase(getCities.pending, (state) => {
            state.loading = true
        })
        .addCase(getCities.fulfilled, (state, action) => {
            state.loading = false
            state.cities = action.payload
        })
        .addCase(getCities.rejected, (state, action) => {
            state.error = true
            state.loading = false
        })
})
