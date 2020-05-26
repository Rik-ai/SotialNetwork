import React from 'react'
import styled from '@emotion/styled'




const Button2 = styled.button`
display: inline-block;
padding: 10px 20px;
border-radius: 4px;
border: 1px solid pink;
color: red;
margin-right: 15px;
margin-top: 10px;
font-weight: bold;
font-size: 12px;
background: rgb(26, 57, 111);
display: ${props => props.display};
&:focus {
    outline: none;
}
&:active{
    box-shadow: inset 2px 2px 1px rgba(37, 255, 108, .9);
}
&:disabled{
    background: #ccc;
    color: #000;
    cursor: not-allowed;
}
&:error {
    background: rgba(240, 87, 108, 1);
}

&:succes {
    background: rgba(161, 240, 69, 1);
}

&:primary {
    background: #2884f6;
    color: #fff;
}

`



const Button = props => {
    return (
        <Button2
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.children}</Button2>
    )
}


export default Button