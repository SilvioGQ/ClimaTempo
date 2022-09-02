import React from 'react';

function Header(props) {
    return (
        <div style={{height:60,padding:30,display:'flex',justifyContent:'space-between', alignItems:'center', backgroundColor:'#2E34AB'}}>
            <p style={{color:'#F79D74', fontSize:28, fontWeight:'bold', alignItems:'center'}}>Titulo</p>
            <div style={{display:'flex', alignItems:'center'}}>
                <p style={{color:'#F79D74'}}>opção 1</p>
                <p style={{color:'#F79D74',marginLeft:20}}>opção 2</p>
                <p style={{color:'#F79D74',marginLeft:20}}>opção 3</p>
            </div>
        </div>
    );
}

export default Header;
