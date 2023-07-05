import React from "react";
import ActorCard from "./ActorCard";
import { FlexGrid} from '../common/FlexGrid'
import Not_Found_Image from '../../lib/not-found-image.png' ;
const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map((data) => {
        return (
          <ActorCard
            key={data.person.id}
            name={data.person.name}
            image={
              data.person.image
                ? data.person.image.medium
                : {Not_Found_Image}
            }
            country={data.person.country ? data.person.country.name : null}
            gender={data.person.gender}
            birthday={data.person.birthday}
            deathday={data.person.deathday}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ActorsGrid;
