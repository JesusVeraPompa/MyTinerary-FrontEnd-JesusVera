import { createReducer } from '@reduxjs/toolkit'
import { setParams, getCity } from '../actions/cityActions'

const initialState = {
    city: [],
    loading: true,
    error: false
}

export const cityReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCity.pending, (state) => {
            state.loading = true
        })
        .addCase(getCity.fulfilled, (state, action) => {
            state.loading = false
            state.city = action.payload
        })
        .addCase(getCity.rejected, (state, action) => {
            state.loading = true
            state.error = true
        })
})