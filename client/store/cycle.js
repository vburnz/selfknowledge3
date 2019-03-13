import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_UPCOMING_MOONS = 'SET_UPCOMING_MOONS'
const GET_UPCOMING_MOONS = 'GET_UPCOMING_MOONS'

/**
 * INITIAL STATE
 */

const initialState = { 
    cycleDay: 0,
    newMoon: 0,
    fullMoon: 0,
    today: null,

}
/**
 * ACTION CREATORS
 */


export const setUpcomingMoons = (newMoon, fullMoon, today) => ({
    type: SET_UPCOMING_MOONS, 
    newMoon, 
    fullMoon, 
    today
})

export const getUpcomingMoons = () => ({
    type: GET_UPCOMING_MOONS, 
    newMoon, 
    fullMoon, 
    today
})


/**
 * THUNK CREATORS
 * 
 */

export const getMoonPhase = () => async dispatch => { 
    try {
        const date = new Date(); 
        const day = date.getDate(); 
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();  
        date.setHours(0, 0, 0, 0); 
        const moonData = await axios.get(`https://api.usno.navy.mil/moon/phase?date=${month}/${day}/${year}&nump=4`); 
        console.log('moondata', moonData); 
        let newMoon; 
        let fullMoon; 
        let today = null; 
        moonData.data.phasedata.forEach(datum => { 
            console.log('datum', datum); 
            if (datum.phase==='New Moon') newMoon = Math.floor((new Date(datum.date) - date)/86400000); 
            if (datum.phase==='Full Moon') fullMoon = Math.floor((new Date(datum.date) - date)/86400000)
        })
        if (newMoon === 0) today = 'New Moon'
        else if (fullMoon === 0) today = 'Full Moon'
        dispatch(setUpcomingMoons(newMoon, fullMoon, today)); 
    } catch (error) {
        
    }
}

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
        // case SET_CYCLE_NUM: 
        //     return {...state, cycleNum: action.cycleNum}
        case SET_UPCOMING_MOONS: 
            return {...state, newMoon: action.newMoon, fullMoon: action.fullMoon, today: action.today, cycleDay: 28-action.newMoon}
        case GET_UPCOMING_MOONS: 
        default: 
            return state; 
    }
}