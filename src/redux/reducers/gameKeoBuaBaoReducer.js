const stateDefault = {
    mangKeoBuaBao: [
        {ma: 'keo', hinhAnh:'./img/keo.png', luaChon:true},
        {ma: 'bua', hinhAnh:'./img/bua.png', luaChon:false},
        {ma: 'bao', hinhAnh:'./img/bao.png', luaChon:false},
    ],
    ketQua: "I'm iron man, i love 3000!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'bua', hinhAnh:'./img/bua.png'}
} 

export const gameKeoBuaBaoReducer = ( state = stateDefault, action ) =>{

    switch(action.type){
        case 'CHON_KEO_BUA_BAO':{
            let mangKeoBuaBaoUpdate = [...state.mangKeoBuaBao];
            mangKeoBuaBaoUpdate = mangKeoBuaBaoUpdate.map((item,index)=>{
                if(item.ma === action.maChon){
                    return {...item,luaChon:true}
                }
                return{...item,luaChon:false}
            })
            state.mangKeoBuaBao = mangKeoBuaBaoUpdate;
            return{...state}
        }
        case 'RANDOM':{
            let soNgauNhien = Math.floor(Math.random() * 3);
            let luaChonNgauNhien = state.mangKeoBuaBao[soNgauNhien];

            state.computer = luaChonNgauNhien;

            return {...state}
        }
        case 'END_GAME':{
            let player = state.mangKeoBuaBao.find(item => item.luaChon === true);
            let computer = state.computer;

            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua='Hòa nhau!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua='Bạn thua rồi!!!';
                    }else{
                        state.soBanThang += 1;
                        state.ketQua="I'm iron man, i love 3000!!!";
                    }
                ;break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.soBanThang += 1;
                        state.ketQua="I'm iron man, i love 3000!!!";
                    }else if(computer.ma === 'bua'){
                        state.ketQua='Hòa nhau!!!'
                    }else{
                        state.ketQua='Bạn thua rồi!!!';
                    }
                ;break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua='Bạn thua rồi!!!';
                    }else if(computer.ma === 'bua'){
                        state.soBanThang += 1;
                        state.ketQua="I'm iron man, i love 3000!!!";
                    }else{
                        state.ketQua='Hòa nhau!!!'
                    }
                ;break;
                default: state.ketQua="I'm iron man, i love 3000!!!";
                return {...state}
            }
            state.soBanChoi +=1;

            return {...state}
        }
    }   
    return {...state};
}