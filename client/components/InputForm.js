import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import {getAppreciate} from '../store'
import sketch from '../sketches/appreciate'

class InputForm extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            date: '', 
            target: '', 
            notes: '', 
            tags: ''
        }
    }
    componentDidMount(){ 
        // this.props.getAppreciate(); 
        //in map dispatch to props ---> ? I guess just map all of them?

    }
    render(){ 
        return (
            this.props.appreciate ? 
            (
            <div className ="appreciate container">
                <P5Wrapper sketch={sketch}/>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th>Tags</th>
                        </tr>
                        {this.props.appreciate.map(appreciate => { 
                        return (
                            <tr key={appreciate.id}>
                                <td>{appreciate.date}</td>
                                <td>{appreciate.target}</td>
                                <td>{appreciate.notes}</td>
                                <td>{appreciate.tags.join(', ')}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            )
            : 
            (<div></div>)

        )
    }
}

const mapStateToProps = state => ({ 
    appreciate: state.appreciate.appreciate
})

const mapDispatchToProps = dispatch => ({ 
    getAppreciate: () => dispatch(getAppreciate())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Appreciate)); 