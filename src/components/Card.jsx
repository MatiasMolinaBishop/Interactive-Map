
import { useState } from 'react';
import Modal from './Modal';

const Card = (props) => {
    
    const [seeMore, setSeeMore] = useState(false)

    return (
        <div key={props.location._id} className="card">
            <h3 className='location-name'>{props.location.name}</h3>
            <img className='location-img' src={props.location.img} alt="location" />
            <p>City: {props.location.city}</p>
            <h2>Available Spaces: {props.location.spaces}</h2>
            <button onClick = {() => setSeeMore(true)}>See More</button>
            {seeMore && <Modal/>}
        </div>  
    )
}

export default Card