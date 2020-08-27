import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as LoginIcon } from './icons/login.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as LogoutIcon } from './icons/logout.svg'
import { NavLink } from 'react-router-dom'
import Select from './Select/Select'

const Navbar = styled.nav`
height: 60px;
background-color: #242526;
padding: 0 1rem;
border-bottom: 1px solid #474a4d;
`
const NavbarNav = styled.ul`
max-width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
margin: 0;
padding: 0;
`
const NavItem = styled.li`
width: 48px;
display:flex;
align-items: caenter;
justify-content: center;
`
const IconButton = styled.a`
width: 30px;
height: 30px;
background-color: #484a4d;
border-radius: 9px;
padding: 5px;
margin: 2px;
display: flex;
align-items: center;
justify-content: center;
transition: filter 300ms;
&:hover{
  filter: brightness(1.2)
}
svg{
  fill: #dadce1;
  width: 20px;
  heigth: 20px
}
`
const Img = styled.img`
width:80px;
height: 100%;
position:sticky;
right: 1800px;
`

const Header = (props)=>{
  return(
    <NavBar>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfTBba-a3Kwl_OzBUcg7wBiaUa-iW1PNkzag&usqp=CAU' />
      <Select />

      {props.isAuth ? <NavItems icon={<LoginIcon/>} /> 
        : <NavLink to={'/login'}><NavItems icon={<LogoutIcon/>} /></NavLink>}

      <NavLink to={'/dialogs'}><NavItems icon={<MessengerIcon/>} /></NavLink>
      <NavLink to={'/plus'}><NavItems icon={<PlusIcon/>} /></NavLink>
    </NavBar>
  )
}

const NavBar = (props)=>{
  return(
    <Navbar>
      <NavbarNav>
        {props.children}
      </NavbarNav>
    </Navbar>
  )
}

const NavItems = (props)=>{
  return(
    <NavItem>
      <IconButton>
        {props.icon}  
      </IconButton>
    </NavItem>
  )
}



export default Header