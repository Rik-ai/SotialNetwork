import React from 'react'
import preloader from '../../../assets/images/Preloader2.gif'


const Preloader = (props)=>{
  return  <div style={{backgroundColor: 'white'}, {zIndex: 1}}>
    <img src={preloader} />
  </div> 

}

export default Preloader 