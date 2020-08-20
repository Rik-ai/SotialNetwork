import React from 'react'
import preloader from '../../../assets/images/Preloader2.gif'
import styled from '@emotion/styled'

const Img = styled.img`
margin: 10px;
width:300px;
height:300px;
border-radius: 20px;
`

const Preloader = (props)=>{
  return  <div>
    <Img src={preloader} />
  </div> 

}

export default Preloader 