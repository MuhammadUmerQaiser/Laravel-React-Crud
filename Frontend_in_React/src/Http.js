import axios from "axios";

export default axios.create({
    // localhost 8000 isliye diya hai takay laravel sai connect kre kyunke laravel 8000 port pr chlte hai 
    // axios ki madad sai react ko connect kr rahay hai laravel sai
    baseURL:"http://localhost:8000/api",
    headers:{
        "Content-type": "application/json"
    }
})