import { createContext, useReducer } from 'react'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_SEARCH = 'SET_SEARCH'

export const FilterStateContext = createContext('')
export const FilterDispatchContext = createContext('')

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(citiesReducer, initialState)

    return (
        <FilterStateContext.Provider value={state}>
            <FilterDispatchContext.Provider value={dispatch}>
                {children}
            </FilterDispatchContext.Provider>
        </FilterStateContext.Provider>
    )
}

const citiesReducer = (state, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, category: action.payload }
        case SET_SEARCH:
            return { ...state, search: action.payload }
        default:
            return state
    }
}

const initialState = {
    cities: [],
    category: 'All',
    search: '',
    loading: true,
    error: false,
}
