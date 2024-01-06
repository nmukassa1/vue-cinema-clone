import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,  faMagnifyingGlass, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [handleDisplayToggle, setHandleDisplayToggle] = useState('');

    function handleToggle(){
        handleDisplayToggle === '' ? setHandleDisplayToggle('nav-menu__toggle') : setHandleDisplayToggle('')
    }

    return ( 
        <header className='container'>
            <Link to="/" className='logo'>
                <img src={require('../Assets/vue-logo.webp')} alt="logo" />
            </Link>

            <nav className='navbar-pages'>
                <Link to="">what's on</Link>
                <Link>trailers</Link>
                <Link>coming soon</Link>
                <Link>big screen events</Link>
                <Link>gift cards</Link>
            </nav>

            <div className='user'>
                <div id="user-menu">
                    <Link>Log In</Link>
                    <Link>Join</Link>
                </div>

                <div id="account_search">
                    <button>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>

            <div id='menu'>
                <button onClick={handleToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div className={`menu-dropdown ${handleDisplayToggle}`}>
                <div className="menu-dropdown__container container">
                    <div className="close-button">
                        <button onClick={handleToggle}>{<FontAwesomeIcon icon={faXmark} />}</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;