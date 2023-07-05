import React from "react";
import { styled } from "styled-components";
import { StarIcon } from "../common/StarIcon";
import Not_Found_Image from '../../lib/not-found-image.png' ;
const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <MainDataWrapper>
      <div className="img-wrap">
        <img src={image ? image.original : {Not_Found_Image}} alt={name} />
      </div>

      <DataSection>
        <Headline>
          <h2>{name}</h2>
          <div><StarIcon active = {true}></StarIcon> <span>   </span> {rating.average || "N/A"} </div>
        </Headline> <br></br>

        <Summary>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </Summary>

        <Genres>
          Genres :
          <div>
            {genres.map((genre) => (
              <span> {genre} </span>
            ))}
          </div>
        </Genres>
      </DataSection>
    </MainDataWrapper>
  );
};

export default ShowMainData;
const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  .img-wrap {
    width: 275px;
    max-width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
      border: 1px solid #ddd;
      border-radius: 40px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
  }
`;

const DataSection = styled.div`
  margin-left: 20px;
  flex: 1;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h2 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
    color:#FD9914;
  }
  div {
    color:#FD9914;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

const Summary = styled.div`
  color: #5f5f5f;
  line-height: 1.5;
`;

const Genres = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  color:white;
  span {
    margin: 6px;
    margin-bottom: 0;
    color: #0EA99A;
    background-color: #8AFCEF;
    padding: 3px 13px;
    border-radius: 5px;
    font-size: 14px;
  }
`;
// blue: '#008DFF',
//       gray: '#c6c6c6',
//       dark: '#353535',
//       yellow:'#FFE63D',
//       orange:'#FD9914',
//       green:'#A6FB04',
//       teal:'#0EA99A',
