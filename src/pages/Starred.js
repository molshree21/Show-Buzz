import React from "react";
import { useStarredShows } from "../lib/useStarredShow";
import { useQuery } from "@tanstack/react-query";
// import { useState } from 'react';
import { get_show_by_ids } from "../Api/tvmaze.js";
import ShowGrid from "../components/shows/ShowGrid";
import { TextCenter } from "../components/common/TextCenter";

const Starred = () => {
  const [starredShowsIds] = useStarredShows();
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () => 
      get_show_by_ids(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  console.log("Starred Shows : ", starredShows);
  if (starredShows?.length>0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShows?.length<=0) {
    return <TextCenter>No Starred Shows</TextCenter>
  } 
  if(starredShowsError)
  {
    return <TextCenter>Error occurred :{starredShowsError.message} </TextCenter>
  }

  return <TextCenter>Shows are Loading ... </TextCenter>;
};

export default Starred;
