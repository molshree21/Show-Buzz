import React from "react";
import { useState, useEffect } from "react";
import { useSearchStr } from "../lib/useSearchStr";
import { CustomeRadio } from "./CustomeRadio";
import {styled} from 'styled-components'

const SearchFrom = ({ on_search }) => {
  const [search, setSearch] = useSearchStr("");
  const [option, setOption] = useState("shows");

  useEffect(() => {}, []);
  const on_search_input_change = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const on_radio_change = (e) => {
    setOption(e.target.value);
  };
  const on_submit = (e) => {
    e.preventDefault();
    const options = {
      q: search,
      option,
    };
    on_search(options);
  };
  return (
    <div>
      <form onSubmit={on_submit}>
        <SearchInput type="text" value={search} onChange={on_search_input_change} placeholder="Search for something" />
        <RadiosWrapper>
          <CustomeRadio
            label="Shows"
            type="radio"
            name="search-options"
            value="shows"
            checked={option === "shows"}
            onChange={on_radio_change}
          />
          <CustomeRadio
              label="Actors"
              type="radio"
              name="search-options"
              value="actors"
              checked={option === "actors"}
              onChange={on_radio_change}
            />
          {/* <label>
            Shows
            <input
              type="radio"
              label = "Shows"
              name="search-options"
              value="shows"
              checked={option === "shows"}
              onChange={on_radio_change}
            />
          </label> */}
         
            
          
        </RadiosWrapper>
        <SearchButtonWrapper>
        <button type="submit">Search</button>
        </SearchButtonWrapper>
        
      </form>
    </div>
  );
};

export default SearchFrom;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 300px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 2px solid orange;
  background:transparent;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 15px;
  border-radius: 10px;
  

  color: #fff;
  &::placeholder {
    font-weight: 300;
    color: #CBC6C6;
    
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.teal};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
