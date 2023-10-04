import { useEffect, useState } from 'react';
import './DashBoard.css'
import axios, { all } from 'axios';
import Card from './Card';
import CityButton from './CityButtons';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { getHotels } from '../state/action-creators';
import { useNavigate } from 'react-router-dom';

function DashBoard({setId,setData,setImg}) {
    const navigate = useNavigate();
    const [allHotel,setAllHotel] = useState([]);
    const [arr,setArr] = useState([]);
    const [pageNumber,setPageNumber] = useState(0);
    const [loading,setLoading] = useState(true);
    const [city,setCity] = useState("");
    const state = useSelector(state=>state.hotel)
    const dispatch = useDispatch();

    const handleMore=()=>{
        if(city=="")
        {
           var i = (pageNumber+1)*6;
           let temp = new Array(i+3);
           const size = allHotel.length;
           var j =0;
           var k = 0;
            // alert(temp.length+" "+allHotel.length)
            while(j<size && k<temp.length)
            {
                temp[k] = allHotel[j];
                j++;
            k++;
        }
        console.log(temp);
        setArr(temp);
        setPageNumber(pageNumber+1);
        }

    }

    const handleViewAll=()=>{
        setArr(allHotel);
        setCity("");
    }
    
    useEffect(()=>{
        if(city!="")
        {        
            const a = allHotel.filter(item => {
                return item?.city?.toLowerCase()?.indexOf(city?.toLowerCase()) !== -1
            })
            setArr(a)
        }
    },[city])

    useEffect(() => {
        const usersPerPage = 6
        const pagesVisited = pageNumber * usersPerPage;
        const displayUsers = allHotel.slice(pagesVisited, pagesVisited + usersPerPage);
        setArr(displayUsers)
        setLoading(false);
    }, [allHotel])

    useEffect(()=>{
        setAllHotel(state.allHotel);
    },[state.allHotel])

    useEffect(()=>{
       dispatch(getHotels());
    },[])

    const HandleCardSelect=(index,ele,src)=>{
        setId(index+1);
        setData(ele);
        setImg(src);
        navigate(`property/${index+1}`)
        
    }

    return (
    <div className="">
    <div style={{
        position:"fixed",
        width:"100%",
        top:"0px",
        paddingTop:"10px",
        backgroundColor:"white",
        zIndex:"1000"
        }}>
    <div className="top">
        <h1>Featured Listed Property</h1>
        <p>Real estate can be bought,sold ,leased,or rented,and can be a valauable investement oppurtunity.The value of real estate can be...</p>
    </div>
    </div>
    <CityButton setCity={setCity} handleViewAll={handleViewAll}/>
    <div className='dashBoard'>
    {loading?<h1>loading .. ..</h1>:
                    arr.length > 0 ?
                        arr?.map((ele,index) => {
                            var base64 = btoa(
                                new Uint8Array(ele?.img?.data?.data)
                                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                            );
                            var src = `data:image/png;base64,${base64}`
                            return <Card index={index} HandleCardSelect={HandleCardSelect} image={src} ele={ele} />
                        })
                        : <h1>No More Cars to Show</h1>
                }
    </div>
    <div className='showDiv'>
    <button className='btn showMore'
    onClick={handleMore}
    >
    <i class="ri-hourglass-fill"></i>
        Show More
    </button>
    </div>
    </div>
  );
}

export default DashBoard;