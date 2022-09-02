import React from 'react';

function Button(props) {
    return (
        <button style={{fontSize:16, marginLeft:20, backgroundColor:'#5C63F7', color:'white', paddingTop:16, paddingBottom:16,paddingLeft:32,paddingRight:32, border:'none', borderRadius:5 }} onClick={props.onclick}>
            {props.text}
        </button>
    );
}

export default Button;