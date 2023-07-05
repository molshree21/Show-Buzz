import { useReducer ,useEffect } from "react";

const usePersistedReducer = (reducer,initial_state,localStorage_key) =>{
    const [state,dispatch] = useReducer(reducer,initial_state,(inital)=>{
      const persistedValue = localStorage.getItem(localStorage_key)
      return persistedValue? JSON.parse(persistedValue):inital
    });
    useEffect(()=>{
      localStorage.setItem(localStorage_key,JSON.stringify(state))
    },[state,localStorage_key])
    return [state,dispatch]
  }
  const starredShowsReducer = (currentStarred,action)=>{
    switch(action.type)
    {
      case 'STAR':return currentStarred.concat(action.showId)
      case 'UNSTAR': return currentStarred.filter((showId)=>showId!==action.showId)
      default: return currentStarred
    }
  
  }
  export const useStarredShows = ()=>{
    return usePersistedReducer(starredShowsReducer,[],'starredShows')
  }