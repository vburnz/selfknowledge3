import React from 'react'

const Greeting = ({name}) => { 
    const userName = name ? name : 'veronique'
    const now = new Date(); 
    const today = new Date().setHours(0, 0, 0, 0); 
    const hour = (now - today)/(60*60*1000); 
    const greeting = returnGreeting(hour); 
    return (
        <h3>{greeting}{userName}</h3>
    )
}

export default Greeting; 

function returnGreeting(hour){ 
    if (hour >= 21 && hour < 5) return 'happy nite time '
    else if (hour >=5 && hour < 12) return 'good morning '
    else if (hour >=12 && hour < 17) return 'good afternoon '
    else if (hour >=17 && hour < 21) return 'good evening '
}