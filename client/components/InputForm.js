import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addFeeling} from '../store'


class InputForm extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            target: '', 
            notes: '', 
        }
        this.handleSubmit= this.handleSubmit.bind(this); 
    }
    handleSubmit(event){ 
        console.log(this.props.feelingType); 
        event.preventDefault(); 
        this.props.addFeeling(this.state, this.props.feelingType); 
        this.setState({
            target: '', 
            notes: '', 
        })
        this.props.handleClose(); 
    }
    render(){ 
        return (
            <form className="input-container counter-text">
                object of my {this.props.feelingType}
                <br/>
                <input type="text" value={this.state.target} onChange={event => this.setState({ target: event.target.value })}/>
                <br />
                notes on this {this.props.feelingType}
                <br />
                <input type="text" value={this.state.notes} onChange={event => this.setState({ notes: event.target.value })}/>
                <br />
                <button type="submit" onClick={this.handleSubmit}>Add</button>
            </form>
               
        )
    

    }
}

const mapDispatchToProps = dispatch => ({ 
    addFeeling: (feeling, feelingType) => dispatch(addFeeling(feeling, feelingType))
})

export default connect(null, mapDispatchToProps)(InputForm); 