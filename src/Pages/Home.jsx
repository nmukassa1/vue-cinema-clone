import CinemaFinder from "../components/CinemaFinder";
import HeroSlide from "../components/HeroSlide";
import TopFilms from "../components/TopFilms";

import useData from "../Hooks/useData";
import {useState} from 'react'

function Home() {
    const {locationShowings} = useData()

    const [placeholder, setPlaceholder] = useState(locationShowings[0].location);
    // const placeholder = locationShowings[0].location;
    return ( 
        <div>
            <HeroSlide />

            <CinemaFinder 
                placeholder={locationShowings ? placeholder : 'Browse A-Z'} 
                setPlaceholder={locationShowings ? setPlaceholder : null}
            />

            <TopFilms 
                placeholder={locationShowings ? placeholder : 'Browse A-Z'} 
            />
        </div>
    );
}

export default Home;