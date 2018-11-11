import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import {getMourn} from '../store'
import sketch from '../sketches/mourn'


class Mourn extends Component { 
    componentDidMount(){ 
        this.props.getMourn(); 

    }
    render(){ 
        return (
            this.props.mourn ? 
            (
            <div className="mourn container">
                <P5Wrapper sketch={sketch}/>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th>Tags</th>
                        </tr>
                        {this.props.mourn.map(mourn => { 
                        return (
                            <tr key={mourn.id}>
                                <td>{mourn.date}</td>
                                <td>{mourn.target}</td>
                                <td>{mourn.notes}</td>
                                <td>{mourn.tags.join(', ')}</td>
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
    mourn: state.mourn.mourn
})

const mapDispatchToProps = dispatch => ({ 
    getMourn: () => dispatch(getMourn())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mourn)); 