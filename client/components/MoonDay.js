import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


export default class MoonDay extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            today: '2018-11-07', 
            moonType: null, 
            moonMessage: null
        }
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick(event){ 
        if (event.target.value === ("2018-11-07" || "2018-12-07" || "2019-01-05")){ 
            this.setState({moonType: 'New'})
            this.setState({moonMessage: 'New Moons are excellent times for deciding what no longer serves you and for starting anew'})
        } else if (event.target.value === ("2018-11-23" || "2018-12-23" || "2019-01-21")){ 
            this.setState({moonType: 'Full'})
            this.setState({moonMessage: 'Full Moons are great times for abundance, manifestation, and harvest! What have you harvested this Month?'})
        }
        else { 
            this.setState({moonType: null})
        }
        this.setState({today: event.target.value})
        
    }
    componentDidMount(){ 
        //get the moon phase day 
        //1 = new moon 
        //17 = full moon 
        //if less than 17 --> say X many days from full moon --> working on abundance !!
        //if greater than 17 --> say X many days till 
    }
    render(){
        return (
            <div>

                <h2>Today is {this.state.today}</h2>
                <button type="button" value="2018-11-07" onClick={this.handleClick}>New Moon 1</button>
                <button type="buttom" value="2018-11-12" onClick={this.handleClick}>Today</button>
                <button type="button" value="2018-11-23" onClick={this.handleClick}>Full Moon 1</button>

                {/* <button type="button" value="2018-12-07" onClick={this.handleClick}>New Moon 2</button>
                <button type="button" value="2018-12-23" onClick={this.handleClick}>Full Moon 2</button>
                <button type="button" value="2019-01-05" onClick={this.handleClick}>New Moon 3</button>
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


            </div>

        )
    }
}