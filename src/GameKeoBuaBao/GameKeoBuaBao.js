import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/GameKeoBuaBao.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

class GameKeoBuaBao extends Component {
    render() {
        return (
            <div className="bgGame">
                <div className="row">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4 mt-3">
                        <KetQuaTroChoi />
                        <button onClick={()=>{
                            {this.props.playGame()}
                        }} className="btn btn-success mt-3"> Play game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        playGame: ()=>{

            let count = 0;
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type:'RANDOM',
                }) 
                count ++;
                if(count>10){
                    clearInterval(randomComputerItem);

                    dispatch({
                        type:'END_GAME'
                    })
                }
            },100)
        }
    }
}

export default connect(null, mapDispatchToProps)(GameKeoBuaBao)
