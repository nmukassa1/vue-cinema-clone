import useData from '../Hooks/useData'
import {Link} from 'react-router-dom'

function TopFilms({location}) {

    const {filmDb, locationShowings} = useData()
    const filmArr = Object.values(filmDb)

    const item = locationShowings.find((item) => item.location === location)
    console.log(item)
    

    return ( 
        <div className="top-films container">
            <div className="top-films__header">
                <h2 className=''>TOP FILMS</h2>
            </div>

            <ul className="top-films__list">
                {filmDb && 
                    filmArr.map((item) => (
                        <li className="card" key={item.title}>
                            <Link to={`/cinema/${location}/film/${item.title}/${item.id}`}  >
                                <img src={item.poster} alt={item.alt} />
                                <h3 className="card-title">{item.title}</h3>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TopFilms;