import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import {getIntention} from '../store'
import sketch from '../sketches/intention'

class Intention extends Component { 
    componentDidMount(){ 
        this.props.getIntention(); 
        console.log('props', this.props)

    }
    render(){ 
        console.log('intention!'); 
        return (
            this.props.intention ? 
            (
            <div className="intention container">
                <P5Wrapper sketch={sketch} className="sketch"/>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Target</th>
                            <th>Notes</th>
                            <th>Tags</th>
                        </tr>
                        {this.props.intention.map(intention => { 
                        return (
                            <tr key={intention.id}>
                                <td>{intention.date}</td>
                                <td>{intention.target}</td>
                                <td>{intention.notes}</td>
                                <td>{intention.tags.join(', ')}</td>
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
    intention: state.intention.intention
})

const mapDispatchToProps = dispatch => ({ 
    getIntention: () => dispatch(getIntention())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intention)); 