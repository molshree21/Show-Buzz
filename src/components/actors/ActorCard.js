import React from "react";
import { SearchCard ,SearchImgWrapper} from "../common/Searchcard";
import { styled } from "styled-components";

// import NotFound from '../../../public/not-found-image.png'

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} className="show-image" />
      </SearchImgWrapper>
      <Actor>
      <h1>
        {name} {Boolean(gender) && `(${gender})`}{" "}
      </h1>
      <p> {country ? `Comes from ${country}` : "No Country Known"} </p>
      {Boolean(birthday) && <p>Born : {birthday}</p>}
      {Boolean(deathday) ? <p>Died :{deathday}</p> : "Alive"}

      </Actor>
      
    </SearchCard>
  );
};

export default ActorCard;
const Actor = styled.div`
h1{
  color:#FD9914;
}
p{
  color:white;
}
`
