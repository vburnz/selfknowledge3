import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import NewMoon from './NewMoon'
import FullMoon from './FullMoon'
import P5Wrapper from './P5Wrapper'
import sketch from '../sketches/cycle'
import {getMoonPhase} from '../store'; 
import {logout} from '../store'


class MoonDay extends Component { 
    componentDidMount(){ 
        this.props.getMoonPhase(); 
    }

    render(){
        return (
            (this.props.newMoon || this.props.fullMoon) ? 
            <div className="home-page">
                {this.props.today ? 
                (   <div>
                        <div>Today is a {this.props.today}!</div>
                        {this.props.today === 'New Moon' ? <NewMoon /> : <FullMoon />}
                    </div>
                )
                : 
                (
                <div>
                    <div>
                        {this.props.newMoon < this.props.fullMoon ? 
                            (
                                <div>
                                    <p className="shimmer">there are {this.props.newMoon} days left until the next New Moon</p>
                                    <div className="moonscription">
                                        <p>the absence of the moon's light reminds us of our return to darkness, to fresh soil, allowing some things to die so new things can be born</p>
                                        <p>in the wind-down of the waning moon...</p>
                                    </div>
                                </div>
                            )
                            : 
                            (
                                <div>
                                    <p className="shimmer">there are {this.props.fullMoon} days left until the next Full Moon</p>
                                    <div className="moonscription">
                                        <p>the fullness of the moon represents the abundance of self-manifestation and the illuminative light of seeing the self with clarity</p>
                                        <p>in the lead-up of the waxing moon...</p>
                                    </div>
                                </div>
                            )
                        }
                        <div className="would-you">
                        <p>would you like to deposit a feeling?</p>
                        
                    <div className="feeling-buttons">
                        <Link to="/appreciate"><button type="button">Appreciate</button></Link>
                        <Link to="/mourn"><button type="button">Mourn</button></Link>
                        <Link to="/intention"><button type="button">Intention</button></Link>
                    </div>
                    </div>
                        <div>
                        <P5Wrapper  sketch={sketch} day={this.props.cycleDay + 1}/>
                        </div>
                    <a className="center" href="#" onClick={this.props.handleClick}>
                        <button type="button">Logout</button>
                    </a>
                    </div>
                </div>
                )
                }

                
                    
                {/* <Link to={{pathname: "/summary", state:{moonType: this.state.moonType}}}><button type="button">{this.state.buttonTitle}</button></Link> */}
                {/* </div>
                </div>         */}


            </div>

            : 

            <h1>LOADInG</h1>

        )
    }
}

const mapStateToProps = state => ({ 
    cycleDay: state.cycle.cycleDay, 
    newMoon: state.cycle.newMoon, 
    fullMoon: state.cycle.fullMoon, 
    today: state.cycle.today
})

const mapDispatchToProps = dispatch => ({ 
    getMoonPhase: () => dispatch(getMoonPhase()), 
    handleClick: () => dispatch(logout())
 })

export default connect(mapStateToProps, mapDispatchToProps)(MoonDay)
