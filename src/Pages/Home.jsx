import CinemaFinder from "../components/CinemaFinder";
import HeroSlide from "../components/HeroSlide";

import useData from "../Hooks/useData";

function Home() {
    const {locationShowings} = useData()
    const placeholder = locationShowings[0].location;
    return ( 
        <div>
            <HeroSlide />
            <CinemaFinder placeholder={locationShowings ? placeholder : 'Browse A-Z'}/>
        </div>
    );
}

export default Home;