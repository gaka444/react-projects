import React from 'react';

function Child(props){
    const items = [];
     for(let i=0;i<props.num;i++) {
        items.push(props.children(i));
    }
    return(
        <>
        {items.map((item,index) => <React.Fragment key={index}>{item}</React.Fragment>)}
        </>
    );
}

export default Child;