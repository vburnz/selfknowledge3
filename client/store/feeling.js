import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_FEELING = 'GOT_FEELING'
const ADDED_FEELING = 'ADDED_FEELING'

/**
 * INITIAL STATE
 */

const initialState = {
    feeling: []
}
/**
 * ACTION CREATORS
 */
const gotFeeling = feeling =>({type: GOT_FEELING, feeling})
const addedFeeling= feeling => ({type: ADDED_FEELING, feeling})

/**
 * THUNK CREATORS
 */
export const getFeeling = (startDate, feelingType) => async dispatch => { 
    console.log('startDate', startDate); 
    try { 
        const res = await axios.get(`/api/feeling/${feelingType}/cycle/${startDate}`)
        console.log('res', res.data); 
        dispatch(gotFeeling(res.data || initialState.feeling))
    } 
    catch (err) { 
        console.error(err); 
    }
}

export const addFeeling = (feeling, feelingType) => async dispatch => { 
    try {
        console.log('feelingTupe', feelingType); 
        console.log('feeling', feeling); 
        const res = await axios.post(`/api/feeling/${feelingType}`, feeling)
        dispatch(addedFeeling(res.data))
    } catch (error) {  
        console.error(error); 
    }
}

export const removeFeeling = (feelingId) => async dispatch => { 
    try {
        await axios.delete('/api/feeling', feelingId)
    } catch (error) {
        console.error(error); 
    }
}

/**
 * REDUCER
 */

export default function (state = initialState, action) { 
    switch (action.type) { 
        case GOT_FEELING: 
            return {feeling: action.feeling}
        case ADDED_FEELING: 
            return {...state, feeling: [...state.feeling, action.feeling]}
        default: 
            return state; 
    }
}