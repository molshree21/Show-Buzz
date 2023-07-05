import React from 'react'
import { styled } from 'styled-components'

const Details = ({status,premiered,network}) => {
  return (
    <DetailsWrapper>
        <p> Status : <span>{status}</span> </p>
        <p> Premiered : <span>{premiered} {!!network && ` on ${network.name}` }</span></p>

    </DetailsWrapper>
  )
}

export default Details
const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
    color:white
    
  }
  span{
      color:#FD9914;
    }
`;