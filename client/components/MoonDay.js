import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/cycle'
import {setCycleNum} from '../store'


class MoonDay extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            today: '2018-11-12', 
            moonType: null, 
            moonMessage: null, 
            buttonTitle: "What has this cycle been like so far?",
            cycleDay: 6, 
            cycleNumber: 1
        }
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick(event){ 
        if (event.target.value === "2018-11-07"){ 
            this.props.setCycleNum(1)
            this.setState({moonType: 'New', cycleDay: 1, cycleNumber: 1, buttonTitle:'What serves you?'})
            this.setState({moonMessage: 'New Moons are excellent times for deciding what no longer serves you and for starting anew'})
        } else if (event.target.value === "2018-11-23"){ 
            this.props.setCycleNum(1)
            this.setState({moonType: 'Full', cycleDay:14, cycleNumber:1, buttonTitle:'What have you harvested?'})
            this.setState({moonMessage: 'Full Moons are great times for abundance, manifestation, and harvest! What have you harvested this Month?'})
        }
        else if (event.target.value === "2018-12-07"){ 
            //console.log('event target', event.target.value); 
            this.props.setCycleNum(2)
            this.setState({moonType: 'New', cycleDay: 1, cycleNumber: 2, buttonTitle:'What serves you?'})
            this.setState({moonMessage: 'New Moons are excellent times for deciding what no longer serves you and for starting anew'})
        } else if (event.target.value === "2018-12-23"){ 
            this.props.setCycleNum(2)
            this.setState({moonType: 'Full', cycleDay:14, cycleNumber:2, buttonTitle:'What have you harvested?'})
            this.setState({moonMessage: 'Full Moons are great times for abundance, manifestation, and harvest! What have you harvested this Month?'})
        }
        else { 
            this.setState({moonType: null, buttonTitle:"What has this cycle been like so far?"})
        }
        
        this.setState({today: event.target.value})
        
    }
    componentDidMount(){ 
        //get the moon phase day 
        //1 = new moon 
        //17 = full moon 
        //if less than 17 --> say X many days from full moon --> working on abundance !!
        //if greater than 17 --> say X many days till 
        console.log('cyclenum', this.props.cycleNum); 
    }
    render(){
        return (
            <div>
                <P5Wrapper sketch={sketch} day={this.state.cycleDay}/>

                <h2>Today is {this.state.today}</h2>
                <button type="button" value="2018-11-07" onClick={this.handleClick}>New Moon 1</button>
                <button type="buttom" value="2018-11-12" onClick={() => { this.setState({ today: '2018-11-12', moonType: null, moonMessage: null, cycleDay: 6, buttonTitle:"What has this cycle been like so far?"})}}>Today</button>
                <button type="button" value="2018-11-23" onClick={this.handleClick}>Full Moon 1</button>

                <button type="button" value="2018-12-07" onClick={this.handleClick}>New Moon 2</button>
                <button type="button" value="2018-12-23" onClick={this.handleClick}>Full Moon 2</button>
                {/* <button type="button" value="2019-01-05" onClick={this.handleClick}>New Moon 3</button>
                <button type="button" value="2019-01-21" onClick={this.handleClick}>Full Moon 3</button> */}

                {/* it's this many days till the next new moon // full moon --> will depend on the .get  */}
            
                {this.state.moonType ? 
                (   <div>
                        <div>Today is a {this.state.moonType} Moon!</div>
                        <div>{this.state.moonMessage}</div>
                        
                        
                    </div>
                )
                : 
                (<div></div>)}

                {(this.state.cycleDay > 14) ? (<div>There are {28-this.state.cycleDay} days left until the next New Moon</div>) : null}
                {(this.state.cycleDay < 14 && this.state.cycleDay > 1) ? (<div>There are {14-this.state.cycleDay} days left until the next Full Moon</div>) : null}
                    
                <Link to={{pathname: "/summary", state:{moonType: this.state.moonType}}}><button type="button">{this.state.buttonTitle}</button></Link>
                            


            </div>

        )
    }
}

const mapStateToProps = state => ({ 
    cycleNum: state.cycle.cycleNum
})

const mapDispatchToProps = dispatch => ({ 
    setCycleNum: (cycleNum) => dispatch(setCycleNum(cycleNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoonDay)
