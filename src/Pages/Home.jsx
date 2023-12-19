import CinemaFinder from "../Components/CinemaFinder/CinemaFinder";
import HeroSlide from "../Components/HeroSlide/HeroSlide";
import TopFilms from "../Components/TopFilms/TopFilms";

import useData from '../Hooks/useData'

function Home() {
    const {locationShowings} = useData();

    const placeholder = locationShowings[0].location

    return ( 
        <>
            <HeroSlide />
            <CinemaFinder placeholder={locationShowings ? placeholder : 'Browse A-Z'}/>
            <TopFilms location={locationShowings ? placeholder : 'Browse A-Z'}  />
        </>
    );
}

export default Home;