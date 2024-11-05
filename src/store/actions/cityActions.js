import { createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import axios from 'axios'

export const setParams = createAction('SET_PARAMS')

export const getCity = createAsyncThunk('CITY', async (url) => {
    const response = await axios.get(`http://localhost:8080/api/cities/name/${url}`)
    await new Promise((resolve) => setTimeout(resolve, 800))
    return response.data.data
})