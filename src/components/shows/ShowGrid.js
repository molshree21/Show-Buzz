import React from "react";
import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShow";
import {FlexGrid} from '../common/FlexGrid';

// import { styled } from 'styled-components'
const ShowGrid = ({ shows }) => {
  // const [starredShows,dispatchStarred] = useReducer(starredShowsReducer,[])
  // const [starredShows,dispatchStarred] = usePersistedReducer(starredShowsReducer,[],'starredShows')
   const [starredShow,dispatchStarred] =  useStarredShows()

  console.log(starredShow)
  const onStarMeClick = (showId)=>{
    
    const isStarred = starredShow.includes(showId)
    console.log("is Starred : ",isStarred)
    if(isStarred === true)
    {
      dispatchStarred({type:'UNSTAR', showId})
    }
    else 
    {
      dispatchStarred({type:'STAR', showId})
    }

  }

  return (
    <FlexGrid>
      {shows.map((data) => {
        return (
          <ShowCard
            key={data.show.id}
            name={data.show.name}
            image={
              data.show.image ? data.show.image.medium : "/not-found-image.png"
            }
            id={data.show.id}
            summary={data.show.summary}
            onStarMeClick = {onStarMeClick}
            isStarred = {starredShow.includes(data.show.id)}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
