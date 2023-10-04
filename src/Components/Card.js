import "./Card.css"
function Card({ index,ele, image,HandleCardSelect}) {
  return (
    <div className="Card" onClick={(e)=>{
      HandleCardSelect( index,ele, image)
    }}>
      <div>
        <div className="CardImg" style={{ backgroundImage: `url(${image})` }}>
          <button className="btn" >
            For Rent
          </button>
          <button className="btn" >
            <i class="ri-heart-3-line"></i>
          </button>
        </div>

        <div className="loc ">
          <i class="ri-map-pin-line"></i>
          <p>{ele.pin}</p>
        </div>
        <p className="name">{ele.name}</p>
        <div className="iconDiv">
          <div>
          <i class="ri-hotel-line"></i>
          <p>{ele.room} Rooms</p>
          </div>
          <div>
          <i class="ri-hotel-line"></i>
          <p>{ele.bed} Bed</p>
          </div>
          <div>
          <i class="ri-showers-line"></i>
          <p>{ele.bath} Bath</p>
          </div>
          <div>
          <i class="ri-square-line"></i>
          <p>{ele.area} sqft</p>
          </div>
        </div>
        <div className="last">
          <p>{ele.rent}<span>/month</span></p>
          <button style={{zIndex:0}} className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;