var initailState = {
    allHotel :[]
}

export const hotelReducer=(state = initailState,action)=>{

    if(action.type=='GET_HOTELS')
    {   
        return {...state,allHotel:action.payload}
    }
    else{
        return state
    }
}