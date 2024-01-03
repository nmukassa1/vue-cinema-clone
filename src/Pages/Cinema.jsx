import { useParams } from "react-router-dom";
import useData from "../Hooks/useData";

import '../sass/Cinema.css'

function Cinema() {

    //slide scroll back to top of page
    // window.scrollTo(0,0)

    const {location, id} = useParams();
    const {locationShowings, filmDb} = useData()

    let movie
    if(filmDb) movie = Object.values(filmDb).find((movie) => movie.id === id)

    //Find object i need to work with
    let cinema
    let globalScheduel // This acts as the scheduel for the whole week of every film
    let currentFilmScheduel = []
    if (locationShowings) {
        //  go through array and find the object that matches the url location slug
        cinema = locationShowings.find((item) => item.location === location )

        //turn scheduel object into an array so I can  itterate over it
        globalScheduel = Object.values(cinema.schedual)

        // Isolate the schedule for the wwek for the current film I need right now
        // Itterate over the globalScheduel array
        for(let i = 0; i < globalScheduel.length; i++){
            // Isolate each day
            let day = globalScheduel[i].date;

            // Itterate over the movie array so I can find which item matches the search query / movie I'm looking for. 
            globalScheduel[i].movies.forEach((item) => {
                if(item.id === id) currentFilmScheduel.push({day: day, time_screen: item.time_screen})
            })
        }
    }

    // console.log(movie, cinema , globalScheduel, currentFilmScheduel)
    return ( 
        <div id="film-details">
            <div id="film-details__container">
                <div id="film-details__wrapper">
                    <div id="film-details__poster">
                        <img src={movie.poster} alt={movie.alt} />
                    </div>
                    <div>
                        <h1>{movie.title}</h1>
                        <p>{movie.logline}</p>
                        <p className="cheaper-online">£1 cheaper online</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Cinema;