import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <h3 className="display-4 pt-5 text-warning">{this.props.ketQua}</h3>
                <div className="text-success display-4">Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span></div>
                <div className="text-success display-4">Số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) =>{
    return{
        ketQua: rootReducer.gameKeoBuaBaoReducer.ketQua,
        soBanThang: rootReducer.gameKeoBuaBaoReducer.soBanThang,
        soBanChoi: rootReducer.gameKeoBuaBaoReducer.soBanChoi,
    }
}

export default connect (mapStateToProps)(KetQuaTroChoi)
