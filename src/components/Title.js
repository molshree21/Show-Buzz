import React from 'react'
import { styled } from 'styled-components';

const Title = (props) => {
    const {title = "Box Office",sub_title = "Search Movie App"} = props;
  return (
    <TitleWrapper>
        <h1>{title}</h1>
        <p>{sub_title}</p>
    </TitleWrapper>
  )
}

export default Title
const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.orange};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.teal};
    margin: 0;
  }
`;