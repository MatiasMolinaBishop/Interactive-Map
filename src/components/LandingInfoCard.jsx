import { Link } from "react-router-dom";

const LandingInfoCard = (props) => {
    return(
        <div className="info-card">
            <h4>Discover logistic centers near you</h4>
            <Link className="map-link" to='/map'>Find location on map</Link>
            <img className='info-card-img' src='https://media.istockphoto.com/id/1389405901/photo/view-of-virtual-city.jpg?b=1&s=170667a&w=0&k=20&c=VsBGpy9Nykq-Ggc5nu5xbxuDCdT3RFnN6kDIhIEuKHo=' alt='map'/>
        </div>
    )
}

export default LandingInfoCard