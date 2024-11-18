// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

import { GameQuery } from "../App";
import useData from "./uesData";
// import { CanceledError } from "axios";
export interface Platforms{
  id:number;
  name:string;
  slug:string
}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platforms}[];
    metacritic:number
  }
  // interface FetchGamesResponse {
  //   count: number;
  //   results: Game[];
  // }
// const useGames=()=>{
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setisLoading] = useState(false)
//     useEffect(() => {
//         const controller=new AbortController()
//         setisLoading(true)
//       apiClient
//         .get<FetchGamesResponse>("/games",{signal:controller.signal})
//         .then((res) => {
//           setGames(res.data.results);
//           setisLoading(false)
//         })
//         .catch((err) =>{
//             if(err instanceof CanceledError) return;
//             setError(err.message)
//             setisLoading(false)
//           });

//         return ()=> controller.abort()
//     }, []);
//   return{games,error,isLoading}
// }
const useGames =( gameQuery :GameQuery)=>useData<Game>('/games',{params:{genres:gameQuery.genre?.id,platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder}},[gameQuery])
export default useGames