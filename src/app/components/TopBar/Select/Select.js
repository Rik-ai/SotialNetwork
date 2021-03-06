import React, { useState } from 'react'
import styled from '@emotion/styled'



const Select2 = styled.div`
padding: 0px 5px;
&;label {
padding-top: 10px;
display: block;
},
&;select {
box-sizing: border-box;
border: 1px solid #bebebe;
height: 30px;
width: 100%;
outline: none;
transition: all 300ms ease-in-out;
border-radius: 4px;
background-color: #484a4d;
color: white;

}
`


const Select = props => {
  const onChange = (event) => {
    setLanguage(event.target.value)
  }

  const [language, setLanguage] = useState('English')



  const htmlFor = `${Math.random()}`

  const options = [
    { text: 'Russian', icon: 'Ru' },
    { text: 'English' },
    { text: 'Ukrainian' },
    { text: 'German' }
  ]

  return (
    <Select2>
      <label htmlFor={htmlFor}></label>
      <select
        id={htmlFor}
        value={language}
        onChange={onChange}

      >
        {options.map((option, index) => {
          return (
            <option
              value={option.text}
              key={option.text + index}
            >
              {option.text}
            </option>
          )
        })}
      </select>
    </Select2>
  )
}


export default Select
