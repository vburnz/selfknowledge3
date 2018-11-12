import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CYCLE_NUM = 'SET_CYCLE_NUM'

/**
 * INITIAL STATE
 */

const initialState = { 
    cycleNum: 1
}
/**
 * ACTION CREATORS
 */
export const setCycleNum = cycleNum =>({type: SET_CYCLE_NUM, cycleNum})


/**
 * THUNK CREATORS
 */
// export const getAppreciate = () => async dispatch => { 
//     try { 
//         const res = await axios.get('/api/appreciate')
//         console.log('res.data', res); 
//         dispatch(gotAppreciate(res.data || initialState.appreciate))
//     } 
//     catch (err) { 
//         console.error(err); 
//     }
// }

// export const addAppreciate = (appreciate) => async dispatch => { 
//     try {
//         const res = await axios.post('/api/appreciate', appreciate)
//         dispatch(addedAppreciate(res.data))
//     } catch (error) {  
//         console.error(error); 
//     }
// }

/**
 * REDUCER
 */

export default function (state = initialState, action) { 
    switch (action.type) { 
        case SET_CYCLE_NUM: 
            return {...state, cycleNum: action.cycleNum}
        default: 
            return state; 
    }
}