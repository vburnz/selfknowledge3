import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
import P5Wrapper from './P5Wrapper'
import sketch from '../sketches/cycle'
import {setCycleNum} from '../store'
import {getMoonPhase} from '../store'; 


class MoonDay extends Component { 
    constructor(){ 
        super(); 
        this.state = { 

        }
    }

    componentDidMount(){ 
        this.props.getMoonPhase(); 
    }

    render(){
        console.log(this.state); 
        return (
            <div className="home-page">
                <P5Wrapper sketch={sketch} day={this.props.cycleDay + 1}/>
         
                {this.props.today ? 
                (   <div>
                        <div>Today is a {this.props.today}!</div>
                    </div>
                )
                : 
                (
                <div>
                    <p>There are {this.props.newMoon} days left until the next New Moon</p>
                    <p>There are {this.props.fullMoon} days left until the next Full Moon</p>
                </div>
                )
                }

                
                    
                {/* <Link to={{pathname: "/summary", state:{moonType: this.state.moonType}}}><button type="button">{this.state.buttonTitle}</button></Link> */}
                {/* </div>
                </div>         */}


            </div>

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
    getMoonPhase: () => dispatch(getMoonPhase())
 })

export default connect(mapStateToProps, mapDispatchToProps)(MoonDay)
