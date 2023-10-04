import axios from "axios";

export const getHotels=()=>{
    return async(dispatch)=>{
        const result = await axios.get("http://localhost:4000/getHotels");
        let arr = result.data.data;
        dispatch({
            type:'GET_HOTELS',
            payload:arr
        })
    }
}