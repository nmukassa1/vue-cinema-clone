import useData from '../Hooks/useData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function CinemaFinder({placeholder, setPlaceholder}) {
    console.log(placeholder)

    const [handleToggle, setHandleToggle] = useState('')

    const {locationShowings} = useData();

    let locations = [];
    
    for(let i = 0; i < locationShowings.length; i++){
        locations.push(locationShowings[i].location)
    }
    // console.log(locations)

    const handleSelectedCinema = (cinema) => {
        setPlaceholder(cinema)
        setHandleToggle('')
        // console.log(placeholder)
    }
    

    return ( 
        <div className='cinema-finder container'>
            <h2 className='section-title'>
                SEE WHAT'S ON AT
            </h2>

            <div className='cinema-finder__dropdown'>
                <button className='dropdown-opener' onClick={() => setHandleToggle('handleDisplayToggle')}>
                    <div>{placeholder}</div>
                    <span className='cinema-finder__dropdown-icon'>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </button>

                <div className={`dropdown-menu ${handleToggle}`}>
                    <div id="dropdown-menu__header">
                        <h3 className="dropdown-menu__title">
                            CHOOSE YOUR VUE</h3>
                        <button onClick={() => setHandleToggle('')}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>

                    <div className="dropdown-menu__search">
                        <input type="text" placeholder='Browse Vue A-Z'/>
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>

                    <ul className="dropdown-menu__list">
                        {locations.map((item) => (
                            <li key={item}>
                                <button className='dropdown-item' onClick={() => handleSelectedCinema(item) }>{item}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Link to={`/cinema/${placeholder}/whats-on`} className='cinema-finder__button'>GO</Link>

            <div className="bar"></div>
        </div>
    );
}

export default CinemaFinder;