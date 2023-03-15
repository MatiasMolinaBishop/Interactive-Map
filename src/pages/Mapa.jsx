import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import { locations } from '../locationObj';
import Modal from '../components/Modal';

const Mapa = () => {

    console.log(locations)
    return (
        <div>
        <MapContainer center={[41.397415, 2.174754]} zoom={6} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location) => {
                return(
                    <Marker 
                        key={location.id}
                        position={[location.latitude, location.longitude]}>

                        <Popup position={[location.latitude, location.longitude]}>
                            <div>
                                <h3>Cpany Name: {location.name}</h3>
                                <p>Suare meters: {location.sqm}</p>
                                <p>Available Spaces: {location.spaces}</p>
                                <p>City: {location.city}</p>
                                <img className = 'profile-img' src={location.img} alt='warehouseview'/>
                                <Modal/>
                            </div>
                        </Popup>
                    </Marker> 
                )
            })}
        </MapContainer>
        </div>
    )
}

export default Mapa