import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MoonDay from './MoonDay'
import Greeting from './Greeting'

/**
 * COMPONENT
 */
export const UserHome = ({name}) => {

  return (
    <div className ="welcome container">
      <Greeting name ={name} />
      <MoonDay />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    name: state.user.name, 
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
