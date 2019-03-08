import React from 'react'
import {Link} from 'react-router-dom'

const LoginOrSignUp = () => { 
    return(
        <div className="outer-div">
            <div className="mid-div">
                <div className="center-div">
                    <Link to="/login"><button type="button">Login</button></Link>
                    <Link to="/signup"><button type="button">Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}

export default LoginOrSignUp; 