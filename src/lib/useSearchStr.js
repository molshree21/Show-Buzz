import { useState,useEffect } from "react"
const usePersistedState = (initial_state,sessionStorage_key)=>{
    const [state,setState] = useState(()=>{
        const persisted_value = sessionStorage.getItem(sessionStorage_key);
        return persisted_value?JSON.parse(persisted_value):initial_state;
    });

    useEffect(()=>{
        sessionStorage.setItem(sessionStorage_key,JSON.stringify(state))

    },[state,sessionStorage_key]);
    return [state,setState]
}


export const useSearchStr = ()=>{
    return usePersistedState('','searchString')
   
}