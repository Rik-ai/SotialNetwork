import React from 'react'
import styled from '@emotion/styled'
import Preloader from '../../common/Preloader/Preloader'

const Img = styled.img`
margin: 10px;
width:300px;
height:300px;
border-radius: 20px;
`
const Div = styled.div`
margin: 10px;
color: #dadce1;
font-size: 25px;
position: relative;
top: -280px;
left: 330px;
`
const Div2 = styled.div`
padding: 5px;
`

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  // if(props.profile.lookingForAJob === true){
  //   lookingForAJob = 'Yes'
  // }else(props.profile.lookingForAJob === false){
  //   lookingForAJob = 'No'
  // }
  return (
    <div>
      <Img src={props.profile.photos.large} />
      <Div>
        <Div2>My Name: {props.profile.fullName}</Div2> 
        <Div2>About Me: {props.profile.aboutMe}</Div2> 
        <Div2>Job Description: {props.profile.lookingForAJobDescription}</Div2> 
        <Div2>Looking for a job: {props.profile.lookingForAJob}</Div2> 
        {/* <Div2>Contacts Me: {props.profile.contacts}</Div2>  */}
      </Div>
    </div>
  )
}
  
  
export default ProfileInfo