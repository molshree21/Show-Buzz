
import React from 'react'
import {styled} from 'styled-components'

export const CustomeRadio = ({label,...otherProps}) => {
  return (
    <div>
    <StyledRadio>
        <p>{label}</p>
            
            <input {...otherProps}/>
            <span></span>
    </StyledRadio>
    </div>
  )
}

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 500;
  line-height: 1.65;
  p{
    color:#FD9914;
  }
 
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color:black;
    border: 3px solid ${({ theme }) => theme.mainColors.orange};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.orange};
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 0px;
    left: 0px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.orange};
  }
`;
