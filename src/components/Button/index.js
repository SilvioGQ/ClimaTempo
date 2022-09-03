import React from 'react';

function Button(props) {
    return (
        <button style={{ fontSize:16, marginLeft:20, backgroundColor:'#5C63F7', color:'white', width:100, height:50, border:'none', borderRadius:5, cursor:'pointer' }} onClick={props.onclick}>
            {props.text}
        </button>
    );
}

export default Button;