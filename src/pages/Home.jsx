import { locations } from '../locationObj';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import Card from '../components/Card';


const Home = () => {

    const [locationsSpain, setLocationsSpain] = useState(locations)
    // const [seeMore, setSeeMore] = useState(false)

    const filterCity = (search) => {
        let searchedLocations = locationsSpain.filter((location) => {
            return location.city.toLowerCase().includes(search)
        })

        setLocationsSpain(searchedLocations)

    }

    return (
        <div>
            <h1>Logistic <span>Centers</span></h1>
            <SearchBar filterCity = {filterCity}/>
            <div className='locations-grid'>
            {locationsSpain.map((location) => {
                return(
                    <div>
                        <Card location={location}/>
                    </div> 
                )
            })}
             </div>
        </div>
    )
}

export default Home