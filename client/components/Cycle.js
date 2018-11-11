import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAstrodata} from '../store'


// const astroAPI = require('./sdk'); 


class Cycle extends Component { 
    constructor(){ 
        super(); 
        this.state = {
            response: {}
        }

    }
    componentDidMount(){ 
        this.props.getAstrodata(); 
        console.log(this.props.astro); 
    

    }
    // async getAstrodata(){ 
    //     const astro = await astroAPI.call('western_horoscope', 5, 6, 1992, 4, 48, 33.4152, 111.8315, -7)
    //     console.log(astro); 
    //     return astro; 
    // }
    render(){ 
        return (
            <div></div>

            // this.props.appreciate ? 
            // (
            // <div>
            //     <table>
            //         <tbody>
            //             <tr>
            //                 <th>Date</th>
            //                 <th>Target</th>
            //                 <th>Notes</th>
            //                 <th>Tags</th>
            //             </tr>
            //             {this.props.appreciate.map(appreciate => { 
            //             return (
            //                 <tr key={appreciate.id}>
            //                     <td>{appreciate.date}</td>
            //                     <td>{appreciate.target}</td>
            //                     <td>{appreciate.notes}</td>
            //                     <td>{appreciate.tags.join(', ')}</td>
            //                 </tr>
            //             )})}
            //         </tbody>
            //     </table>
            // </div>
            // )
            // : 
            // (<div></div>)

        )
    }
}

const mapStateToProps = state => ({ 
    astro: state.astro
})

const mapDispatchToProps = dispatch => ({ 
    getAstrodata: () => dispatch(getAstrodata())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cycle)); 