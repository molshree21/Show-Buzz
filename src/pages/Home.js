import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { search_for_shows, search_for_people } from "../Api/tvmaze.js";
import SearchFrom from "../components/SearchFrom.js";
import ShowGrid from "../components/shows/ShowGrid.js";
import ActorsGrid from "../components/actors/ActorsGrid.js";

const Home = () => {
  const [filter, setFilter] = useState(null);
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.option === "shows"
        ? search_for_shows(filter.q)
        : search_for_people(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const on_search = async ({ q, option }) => {
    setFilter({ q, option });

    // try {
    //   setApiDataError(null);
    //   if (option === "shows") {
    //     const api_data = await search_for_shows(q);
    //     console.log(api_data);
    //     setApiData(api_data);
    //   } else {
    //     const api_data = await search_for_people(q);
    //     console.log(api_data);
    //     setApiData(api_data);
    //   }
    // } catch (error) {
    //   setApiDataError(error);
    // }
  };
  const display_api_data = () => {
    if (apiDataError) {
      return <div>Something went wrong : {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No Results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };
  return (
    <div>
      <SearchFrom on_search={on_search} />
      <div>{display_api_data()}</div>
    </div>
  );
};

export default Home;
