import './Navbar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,  faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return ( 
        <nav className='navbar'>
            <Link to="/" className='logo'>
                <img src={require('../../Assets/vue-logo.webp')} alt="logo" />
            </Link>

            <div className='navbar-pages'>
                <Link to="">what's on</Link>
                <Link>trailers</Link>
                <Link>coming soon</Link>
                <Link>big screen events</Link>
                <Link>gift cards</Link>
            </div>

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
        </nav>
    );
}

export default Navbar;