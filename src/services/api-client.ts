import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'7d1e27734027426d9e5ad7e66ec8873f'
    }
})
