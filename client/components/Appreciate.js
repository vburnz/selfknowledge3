import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import P5Wrapper from 'react-p5-wrapper'
import P5Wrapper from './P5Wrapper'
import {getFeeling} from '../store'
import sketches from '../sketches'
import InputForm from './InputForm'
import Table from './Table'
import Modal from './Modal'
import {Link} from 'react-router-dom'

class Appreciate extends Component { 
    constructor(){ 
        super(); 
        this.state = { 
            type: 'appreciate', 
            showAdd: false, 
            showTable: false, 
        }
    }
    componentDidMount(){ 
        this.props.getFeeling(new Date() - (28 - this.props.newMoon), this.props.type); 
    }

    showAddModal = () => {
        this.setState({ showAdd: true });
    }
    
    showTableModal = () => {
        this.setState({ showTable: true });
    }
    
    hideAddModal = () => {
        this.setState({ showAdd: false });
    }

    hideTableModal = () => { 
        this.setState({ showTable: false });
    }

    render(){ 
        console.log('type', this.props.type); 
        console.log(sketches); 
        const feelings = this.props.feeling.filter(feeling => feeling.type == this.props.type) 
        return (
            
            <div className ="appreciate container">
                <Link to="/home">
                    <button type='button'>
                        HOME
                    </button>
                </Link>
                {(feelings.length >= 5) ? (<div className="filled-notice">{this.props.type.toUpperCase()}FILLED</div>) : (null) }
                <P5Wrapper className="sketch" sketch={sketches[this.props.type]} feelings={feelings.length}/>
                <span className="button-span">
                    <button type='button' onClick={this.showAddModal}>ADD</button>
                    <button type='button' onClick={this.showTableModal}>VIEW</button>
                </span>
                <div className="counter-text">{feelings.length} / 5 {this.props.type}s this cycle</div>
                <Modal show={this.state.showAdd} handleClose={this.hideAddModal} >
                    <InputForm feelingType={this.props.type} handleClose={this.hideAddModal}/> 
                </Modal>
                <Modal show={this.state.showTable} handleClose={this.hideTableModal} >
                    <Table feelings = {feelings} /> 
                </Modal>
                
            </div>

        )
    }
}

const mapStateToProps = state => ({ 
    feeling: state.feeling.feeling, 
    newMoon: state.cycle.newMoon
})

const mapDispatchToProps = dispatch => ({ 
    getFeeling: (startDate, feelingType) => dispatch(getFeeling(startDate, feelingType)),
    addFeeling: (feeling, feelingType) => dispatch(addFeeling(feeling, feelingType))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Appreciate)); 