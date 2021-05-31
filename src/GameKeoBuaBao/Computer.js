import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let keyframes = `@keyframes randomItem${Date.now()}{
            0% {top:-50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
        }`
        return (
            <div className="playerGame d-flex">
                <style>
                    {keyframes}
                </style>
                <div className="think pt-3 position-relative" >
                    <img style={{
                        position:'absolute', 
                        left:'15%',
                        animation:`randomItem${Date.now()} 0.5s`,transform:'rotate(120deg)'}} width={100} height={100} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
                </div>
                <div className="speech-bubble mb-2"></div>
                <img width={200} height={200} src="./img/playerComputer.png" alt="./img/player.png"/>
            </div>
        )
    }
}

const mapStateToProps = rootReducer =>{
    return{
        computer: rootReducer.gameKeoBuaBaoReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)
