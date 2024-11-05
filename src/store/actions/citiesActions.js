import { createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const setSearch = createAction('SET_SEARCH')
export const setCategory = createAction('SET_CATEGORY')

export const getCities = createAsyncThunk('CITIES', async () => {
    const response = await axios.get('http://localhost:8080/api/cities/all')
    response.data.data.sort(function () {
        return Math.random() - 0.5
    })
    await new Promise((resolve) => setTimeout(resolve, 800))

    return response.data.data
})
