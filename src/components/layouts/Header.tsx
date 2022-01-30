import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HEADER = styled.header`
    position: fixed;
    top: 0;
    width:100%;
    z-index: 99;
    
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    box-shadow: 0 1px 1px #cfd1d5;
`
const LOGO = styled.div`
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const NAV = styled.nav`
    display: flex;
    justify-content: center;
    
    padding: 10px;
    transition: 1s;
`
const NAV_LINK = styled(NavLink)`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: ${props => props.className === 'active' ? 'var(--accent-color)' : 'var(--heading-color)'};
    font-weight: 700;
    font-size: 1rem;
    font-family: NanumGothic, serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  
    &:hover{
      color: var(--accent-color);
    }

    &:active{
      color: var(--accent-color);
    }
`

const UL = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  background: var(--background);
  background-size: contain;
`

const LI = styled.li`
  position: relative;
  height: 100%;
`

const Header = () =>{

    return(
        <HEADER id="header">
            <LOGO>
                <NavLink to="/">로고</NavLink>
            </LOGO>

            <NAV>
                <UL>
                    <LI><NAV_LINK to="/">News</NAV_LINK></LI>
                    <LI><NAV_LINK to="/scribbles">scribbles</NAV_LINK></LI>
                </UL>
            </NAV>
        </HEADER>
    )
}

export default Header;