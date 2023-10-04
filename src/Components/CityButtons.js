import "./CityButtons.css"

function CityButton({setCity,handleViewAll}) {

  return (
    <div style={{
        position:"fixed",
        width:"100%",
        top:"100px"
    }}>
    <div className='cityButton container'>
        <div>
    <button className='btn' onClick={(e)=>{
        setCity("newyork")
    }}>New York</button>
    <button className='btn' onClick={(e)=>{
        setCity("mumbai")
    }}>Mumbai</button>
    <button className='btn' onClick={(e)=>{
        setCity("paris")
    }}>Paris</button>
    <button className='btn' onClick={(e)=>{
        setCity("london")
    }}>London</button>
    </div>
    <div>
        <button className='btn' id="viewAll"
        onClick={handleViewAll}
        >
        View All
        <i class="ri-arrow-right-line"></i>
        </button>
    </div>
    </div>
    </div>
  );
}

export default CityButton;