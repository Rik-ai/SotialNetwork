import React, {useState} from 'react'

import styled from '@emotion/styled'


const SmallComp = styled.div`
  width: 70%;
  height: 35px;
  color: white;
  opacity: 0.5;
  padding-top: 10px;
  margin: 20px auto;
  border: 2px solid white;
  border-radius: 10px;
  display: ${props => props.display};
  text-align:center;
  ` 

const Sidebar1 = styled.nav`
  position: relative;
  height: 100%;
  border: 4px groove black;
  width: 250px;
  top: 0;
  left: 0;
  opacity: 1;
  background-image: url(${'https://cdn.lifehacker.ru/wp-content/uploads/2019/09/ZB7FrVz_1569238415-310x672.jpg'}); 
  color: ${props=>props.color};
  ` 




const Sidebar =()=>{
  const [visible, setVisible] = useState(false)

  return(
    <Sidebar1 onClick = { () => setVisible(!visible)}>
      {
        [1,2,3,4].map( (item, index) => {
          return (
            <SmallComp 
              key = {index} 
              display = {visible ? 'block' : 'none'}
            > {item} Hello matherfuckers !
            </SmallComp>
          )
        })
      }
    </Sidebar1>
  )
}

export default Sidebar