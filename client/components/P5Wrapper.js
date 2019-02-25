import React from 'react'
import p5 from 'p5'

export default class P5Wrapper extends React.Component {
  
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper)
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props)
    }
  }

  componentWillReceiveProps(newprops) {
    console.log('recieved new props!')
    if(this.props.sketch !== newprops.sketch){
      console.log('here1')
      this.canvas.remove()
      this.canvas = new p5(newprops.sketch, this.wrapper)
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      console.log('here2'); 
      console.log('new props', newprops); 
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops)
    }
  }

  componentWillUnmount() {
    this.canvas.remove()
  }

  render() {
    return <div className="sketch-container" ref={wrapper => this.wrapper = wrapper}></div>
  }
}