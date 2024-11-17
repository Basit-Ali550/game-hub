
import useData from "./uesData";
interface Genre{
    id:number;
    name:string
}

const useGenre=()=>useData<Genre>('/genres')

export default useGenre