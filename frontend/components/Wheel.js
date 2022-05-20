import React from 'react'
import {moveClockwise, moveCounterClockwise} from "../state/action-creators"
import {connect} from "react-redux"

function Wheel(props) {
  console.log(props)
  const {counter} = props

  const handleMoveClickwise = () => {
    props.moveClockwise()
  }
  const handleMoveCounterClockwise = () => {
    props.moveCounterClockwise()
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div> */}
        <div className={`${counter === 0 ? "cog active": "cog"}`} style={{ "--i": 0 }}>{`${counter === 0 ? "B": ""}`}</div>
        <div className={`${counter === 1 ? "cog active": "cog"}`} style={{ "--i": 1 }}>{`${counter === 1 ? "B": ""}`}</div>
        <div className={`${counter === 2 ? "cog active": "cog"}`} style={{ "--i": 2 }}>{`${counter === 2 ? "B": ""}`}</div>
        <div className={`${counter === 3 ? "cog active": "cog"}`} style={{ "--i": 3 }}>{`${counter === 3 ? "B": ""}`}</div>
        <div className={`${counter === 4 ? "cog active": "cog"}`} style={{ "--i": 4 }}>{`${counter === 4 ? "B": ""}`}</div>
        <div className={`${counter === 5 ? "cog active": "cog"}`} style={{ "--i": 5 }}>{`${counter === 5 ? "B": ""}`}</div>
        {/* <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleMoveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleMoveClickwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.wheel.counter,
  }
} 

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)








