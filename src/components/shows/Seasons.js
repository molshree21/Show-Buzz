import React from "react";
import { styled } from "styled-components";

const Seasons = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <div className="main-wrap">
        <div className="seasons-div">
          <div className="sl">Total Seasons</div>
          <div className="sr">{seasons.length}</div>
        </div>
        <div className="seasons-div">
          <div className="sl">Total Episodes</div>
          <div className="sr">
            {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
          </div>
        </div>
      </div>

      <SeasonList>
        {seasons.map(
          (season) =>
            season.number && (
              <div key={season.id} className="season-item">
                <div className="left">
                  <div className="season-div">
                    <div className="sl">Season</div>
                    <div className="sr">{season.number}</div>
                  </div>
                  <div className="season-div">
                    <div className="sl">Episodes</div>
                    <div className="sr">{season.episodeOrder}</div>
                  </div>
                  {/* <p>Season  <span>{season.number}</span>  </p>
            <p>  <span>{season.episodeOrder}</span>  </p> */}
                </div>

                <div className="right">
                  {" "}
                  Aired : <span>{season.premiereDate} - {season.endDate}{" "}</span> 
                </div>
              </div>
            )
        )}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Seasons;
const SeasonsWrapper = styled.div`
  .main-wrap {
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    width: 65%;
  }

  .seasons-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    color: white;
    background: #0ea99a;
    padding: 5px;
    border-radius: 5px;
    ${"" /* margin:5px 0px; */}
    margin-right:50px
  }
  .sr {
    color: #fff;
    font-weight:600;

  }
  span {
    color: #fd9914;
    margin-left: 5px;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
      color: white;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
      color: white;
    }
    .season-div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
    }
    .sr {
      color: #fd9914;
    }
    .right {
      padding-left: 20px;
      flex: 1;
      color: white;
    }
    span{
      color: #fd9914
    }
  }
`;
