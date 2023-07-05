import React from "react";
import {styled} from 'styled-components'
import { useParams } from "react-router-dom";
import { get_show_by_id } from "../Api/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
import { Link } from "react-router-dom";
import { TextCenter } from "../components/common/TextCenter";
const Show = () => {
  const { showId } = useParams();
  // const {showData,showErr} = useShowById(showId)
  const { data: showData, error: showErr } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => get_show_by_id(showId),
    refetchOnWindowFocus:false,
  });

  if (showErr) {
    return <TextCenter>We have an error : {showErr.message}</TextCenter>;
  }

  if (showData) {
    return(
      
      <ShowPageWrapper>
      <BackHomeWrapper>
      <Link to="/">Home</Link> <br></br>
      </BackHomeWrapper>
      <ShowMainData image = {showData.image} name = {showData.name} rating = {showData.rating} summary = {showData.summary} genres = {showData.genres}  />
      <InfoBlock>
        <h1>Details</h1>
        <Details status ={showData.status} premiered = {showData.premiered} network = {showData.network} />
      </InfoBlock>
      <InfoBlock>
        <h1>Seasons</h1>
        <Seasons seasons = {showData._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h1>Cast</h1>
        <Cast  cast = {showData._embedded.cast}/>
      </InfoBlock>
      </ShowPageWrapper>
      
    )
  }

  return <TextCenter>Data is loading</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: white;
    ${'' /* color: ${({ theme }) => theme.mainColors.white}; */}
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h1 {
    color: #fff;
    margin: 0;
    margin-bottom: 30px;
    font-size: 25px;
    
  }
`;

//custom hook
// const useShowById = (showId)=>{
//   const [showData,setShowData] = useState(null);
//     const [showErr,setShowErr] = useState(null);

//     useEffect(()=>{
//       // get_show_by_id()
//       async function fetch_data()
//       {
//         try{
//           const data = await get_show_by_id(showId);
//           setShowData(data)
//         }
//         catch(err){ setShowData(err);}
//       }
//       fetch_data();
//     },[showId]);
//     return{showData,showErr}

// }
