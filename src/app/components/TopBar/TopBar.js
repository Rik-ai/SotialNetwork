import './index.module.scss'
import { ReactComponent as LoginIcon } from './icons/login.svg'
import React from 'react'
import styled from '@emotion/styled'
import Select from './Select/Select'
import { NavLink } from 'react-router-dom'

const Img = styled.img`
width:80px;
height: 100%;
position:sticky;
right: 1800px;
`
const Nav = styled.nav`
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
z-index: 100;
list-style: none;
margin: 0;
padding: 0;
`
const NavItemLi = styled.li`
width: 50px;
display: flex;
align-items: center;
justify-content: center;
`


const TopBar = (props)=> {
  return (
    <Navbar>
      
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfTBba-a3Kwl_OzBUcg7wBiaUa-iW1PNkzag&usqp=CAU' />
      <Select />
      <NavItem icon={<LoginIcon />} />
    </Navbar>
  )
}

const Navbar = (props) => {
  debugger
  return (
    <Nav>
      <NavbarNav>{props.children}</NavbarNav>
    </Nav>
  )
}

const NavItem = (props) => {
  return (
    <NavItemLi>
      {props.isAuth ? props.login : <NavLink to={'/login'} className="icon-button"  style={{ color: '#dadce1', textDecoration: 'none' }}>
        {props.icon}
      </NavLink> }
      
      {open && props.children}
    </NavItemLi>
  )
}

export default TopBar
