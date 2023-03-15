import { locations } from '../locationObj';
 import ReactMapGL, {Marker, Popup} from 'react-map-gl';
 import { useState } from 'react';

 const MapComponent = () => {

     const [showPopup, setShowPopup] = useState(null)

     return (
         <div>
             <ReactMapGL
              initialViewState={{
                  longitude: 2.174754,
                  latitude: 41.397415,
                  zoom: 10
                }}
             style={{width: '100vw', height: '100vh'}}
             mapStyle="mapbox://styles/mapbox/streets-v9"
             MapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
                 
                 {locations.map((location) => (
                     <Marker
                     key = {location.id} 
                     longitude={location.longitude} 
                     latitude={location.latitude} 
                     //anchor="bottom" 
                     onClick={e => {
                        //e.preventDefault()
                        console.log('clicked')
                        setShowPopup(location)
                        console.log(showPopup)
                    }}
                     >
                         {/* <svg
                             onClick={e => {
                                 e.preventDefault()
                                 console.log('clicked')
                                 setShowPopup(location)
                                 console.log(showPopup)
                             }}
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                             <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                         </svg> */}
                     </Marker>
                     ))}

                     {/* <Popup
                     longitude={2.174754} 
                     latitude={41.397415}
                     >
                        hi hhkjdehkjdhaejkdnaejkd
                     </Popup> */}

                    {showPopup ? (
                        <Popup 
                        longitude={showPopup.longitude} 
                        latitude={showPopup.latitude}
                        //anchor="bottom"
                        //onClose={() => setShowPopup(false)}
                        >
                        <div>
                            <h2>{showPopup.name}</h2>
                        </div>
                        </Popup>) : (<Popup
                     longitude={2.174754} 
                     latitude={41.397415}
                     >
                        hi hhkjdehkjdhaejkdnaejkd
                     </Popup>)}

                    {/* {showPopup && (
                        <Popup
                            latitude={showPopup.longitude}
                            longitude={showPopup.latitude}
                            anchor="bottom"
                            onClose={() => setShowPopup(false)}
                        >
                            <div>{showPopup.name}</div>
                    </Popup>
                    )} */}

                     {/* {showPopup && (
                         <Popup longitude={2.15058} latitude={
                             41.367018}
                                 anchor="bottom"
                                 >
                                 You are here
                     </Popup>)} */}

                     {/* {showPopup ? 
                         <Popup 
                         longitude={showPopup.longitude} 
                         latitude={showPopup.latitude} 
                         anchor="bottom"
                         >
                             <div>PARK!!!</div>
                         </Popup> : null
                     } */}
             </ReactMapGL>
           
        
         </div>
     )
 }

 export default MapComponent