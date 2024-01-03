import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,  faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
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

            <div id='menu'>
                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
}

export default Navbar;