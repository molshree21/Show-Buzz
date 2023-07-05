const BASE_URL = "https://api.tvmaze.com"
const get_api = async (query)=>{
    const response = await fetch(`${BASE_URL}${query}`);
    const body = await response.json();
    return body;

}
export const search_for_shows = (search)=>get_api(`/search/shows?q=${search}`)
export const search_for_people = (search)=>get_api(`/search/people?q=${search}`)
export const get_show_by_id = (show_id)=> get_api(`/shows/${show_id}?embed[]=seasons&embed[]=cast`)
export const get_show_by_ids = async (show_ids)=> {
    const promises = show_ids.map((showId)=> get_api(`/shows/${showId}`))
    const result =  await Promise.all(promises)
    return result;
}

