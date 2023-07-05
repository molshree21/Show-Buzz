import React from 'react'
import {NavLink} from 'react-router-dom'
import {styled} from 'styled-components'


const Nav = () => {
    const LINKS = [
        {
            text:'Home',
            to:'/'
        },
        {
            text:'Stared',
            to:'/starred'
        }
    ]
  return (
    <div >
        
        <NavList>
            {
                LINKS.map((link) => {
                    return(
                    <li key = {link.to} className='Nav-li'>
                    <LinkStyled  className='Nav-Link' to ={link.to}  >{link.text}</LinkStyled>
                    </li>
                    )
                })
            }
        </NavList>
        
      
    </div>
  )
}

export default Nav

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  
  
  color:red;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
    color:red;
    text-decoration:none;
    
  }
`;


const LinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.teal};
  &.active {
    color: ${({ theme }) => theme.mainColors.orange};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.orange};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;