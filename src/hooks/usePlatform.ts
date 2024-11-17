import useData from "./uesData";
interface platform{
    id:number;
    name:string;
    slug:string
}
const usePlatform=()=>useData<platform>('/platforms/lists/parents')
export default usePlatform