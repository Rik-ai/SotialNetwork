import React from 'react'
import styled from '@emotion/styled'

const Img = styled.img`
width:50px;
height:50px;
`
const Span = styled.span`
font-size:20px;
margin:10px 5px 20px 0;
`




const Post = (props) => {
  return (
      
    <div>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGaDEzF_M7OTh0H2CZ87zAToR6f2NICEMylw&usqp=CAU' />
      {props.message}
      <div>
        <Span>Like {props.like}</Span>
        <Span>Dislike{props.dislike}</Span>
      </div>

    </div>
     

  )
}
  
  
export default Post