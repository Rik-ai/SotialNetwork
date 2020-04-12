import React, {useState} from 'react'

import styled from '@emotion/styled'


const SmallComp = styled.div`
  width: 80%;
  height: 40px;
  background: green;
  margin: 5px;
  display: ${props => props.display};
  ` 

const Sidebar1 = styled.nav`
  position: relative;
  height: calc(100vh - 75px);
  overflow: auto;
  width: 260px;
  z-index: 4;
  padding-bottom: 30px;
  opacity: 1;
  background-image: url(${'https://s00.yaplakal.com/pics/pics_original/5/7/8/13224875.jpg'}); 
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
            > {item}
            </SmallComp>
          )
        })
      }
    </Sidebar1>
  )
}

export default Sidebar