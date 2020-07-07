import React, { useState } from 'react'
import styled from '@emotion/styled'
import Button from '../Select/Select'
import Select from '../Select/Select'

const SideBanner = styled.div`
background-color:#242526;
margin-top: 90px;
position: absolute;
height: 100%;
width: 250px;
padding: 0 1rem;
border-right: 1px solid #474a4d;
border-top: 1px solid #474a4d;
border-radius: 15px;
`


const LeftBar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <SideBanner onClick={() => setVisible(!visible)}>
      {
        [1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <Select
              key={index}
              display={visible ? 'block' : 'none'}
            > {item} Hello!
            </Select>
          )
        })
      }
    </SideBanner>
  )
}


export default LeftBar