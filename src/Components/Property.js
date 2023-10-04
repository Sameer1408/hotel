import Card from "./Card"
import { useNavigate } from "react-router-dom";

function Property({ data,img}) {
    const navigate = useNavigate();
    const HandleCardSelect =()=>{

    }
    return (
    <div className="container" 
    style={{
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",    
        flexDirection:"column"    
        }}>
      <Card ele={data} image={img} HandleCardSelect={HandleCardSelect}/>
      <i class="ri-corner-down-left-line"
      onClick={(e)=>{
        navigate('/')
      }}
      ></i>
    </div>
  );
}

export default Property;