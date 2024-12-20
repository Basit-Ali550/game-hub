import useData from "./uesData";
export interface platform{
    id:number;
    name:string;
    slug:string
}
const usePlatform=()=>useData<platform>('/platforms/lists/parents')
export default usePlatform