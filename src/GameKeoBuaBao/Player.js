import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="playerGame d-flex">
                <div className="think pt-3">
                    <img style={{transform:'rotate(120deg)'}} width={100} height={100} src={this.props.mangKeoBuaBao.find(item => item.luaChon === true).hinhAnh} alt={this.props.mangKeoBuaBao.find(item => item.luaChon === true).hinhAnh}/>
                </div>
                <div className="speech-bubble mb-2"></div>
                <img width={200} height={200} src="./img/player.png" alt="./img/player.png"/>
                <div className="row">
                    {this.props.mangKeoBuaBao.map((item, index)=>{

                        let border = {};
                        if(item.luaChon){
                            border = {border:'3px solid orange'}
                        }

                        return <div className="col-4">
                            <button onClick={()=>{
                                this.props.luaChon(item.ma);
                            }} style={border} width={100} height={100}>
                                <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return{
        mangKeoBuaBao: rootReducer.gameKeoBuaBaoReducer.mangKeoBuaBao
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        luaChon: (maChon) => {
            dispatch({
                type:'CHON_KEO_BUA_BAO',
                maChon
            })
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Player)
