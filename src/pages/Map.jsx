import { useState } from 'react'
import Map from 'react-map-gl'

const MapComponent = () => {

    // const [viewport, setViewport] = useState({
    //     longitude: -100,
    //     latitude: 40,
    //     zoom: 3.5
    // })


    return (
        <div>
            <Map
            // {...viewport}
             initialViewState={{
                 longitude: -100,
                 latitude: 40,
                 zoom: 3.5
               }}
            style={{width: '100vw', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
             MapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}/>
        
        </div>
    )
}

export default MapComponent

// {process.env.REACT_APP_MAPBOX_TOKEN}
//pk.eyJ1IjoibGVpZ2hoYWxsaWRheSIsImEiOiJjanVma3E4aGMwZjk0NDVwZzFpcG84M3cwIn0.GrI8s893TPtJfjHzpMMP_A