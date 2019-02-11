import React from 'react'
import {Link} from 'react-router-dom'


export const Tag =(props) =>{
  const template  = <div style={{background: props.bck, color: props.color, fontSize: props.size, padding: '5px 10px', display: 'inline-block', fontFamily: 'Righteous', ...props.add
 }}>{props.children}</div>

    if(props.link){
        return (
            <Link to="props.linkTo">
                {template}
            </Link>
        )
    }else{
        return template
    }
}

export const firebaseLooper = (snapshot) =>{
    const data = [];
    snapshot.forEach((childSpanshot)=>{
        data.push({
            ...childSpanshot.val(),
            id: childSpanshot.key
        })
    })
    return data;
}

export const reverseArray = (actualArray) =>{
    let reversedArray = [];

    for(let i = actualArray.length - 1; i>= 0; i --){
        reversedArray.push(actualArray[i])
    }
    return reversedArray;
}