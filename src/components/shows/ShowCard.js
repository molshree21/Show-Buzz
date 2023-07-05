import React from "react";
import { styled } from "styled-components";
import { SearchCard, SearchImgWrapper } from "../common/Searchcard";
import { StarIcon } from "../common/StarIcon";
// import { Link } from "react-router-dom";
const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const stripped_summary = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "") + "..."
    : "No Description";
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt="img" className="show-image" />
      </SearchImgWrapper>
      <Headings>
        <h1>{name}</h1>
        <p>{stripped_summary}</p>
      </Headings>

      <ActionSection>
        <ReadMore>
          <a href={`/show/${id}`} target="_blank" rel="noreferrer">
            Read More
          </a>
        </ReadMore>

        <StarBtn className="animate" border={isStarred} onClick={() => onStarMeClick(id)}>
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCard;

const ActionSection = styled.div`
  color: white;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;
const Headings = styled.div`
  h1 {
    color: #FD9914;
    font-size: 25px;
  }
  p {
    color: white;
    font-size: 15px;
  }
`;
const ReadMore = styled.button`
  a {
    padding: 10px 20px;
    color: #0ea99a;
    text-decoration: none;
    background: transparent;
  }
  a:hover {
    color: #fff;
  }
  background: transparent;
  border: 2px solid #0ea99a;
  border-radius: 5px;
  &:hover {
    background: #0ea99a;
    color: #fff;
  }
`;
const StarBtn = styled.button`
  ${"" /* outline: none; */}
  border: 2px solid ${(props) => (props.border ? "#ffc806" : "#ddd")};
  border-radius: 50%;
  padding: 10px 10px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate:hover {
    ${'' /* ${StarIcon} { */}
      animation: increase 2s linear infinite;;
      @keyframes increase {
        0% {
		transform: rotateY(0deg);
	}

	100% {
		transform: rotateY(360deg);
	}
      ${'' /* } */}
    }
  }
`;
