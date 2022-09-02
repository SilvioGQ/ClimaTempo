import React from 'react';

function List({text}) {
    console.log(text)
    return (
        <div style={{marginLeft:20}}>
            <p>{text}</p>
        </div>
    );
}

export default List;