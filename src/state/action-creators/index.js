import axios from "axios";

export const getHotels=()=>{
    return async(dispatch)=>{
        const result = await axios.get("https://intern-mnab.onrender.com/getHotels");
        let arr = result.data.data;
        dispatch({
            type:'GET_HOTELS',
            payload:arr
        })
    }
}