import '../App.css';
import '../index.js';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';

function App() {
    return (
        <div className='text-dark'>
            <Navbar className='navbar navbar-expand-lg navbar-light' dark expand="md">
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <a class="navbar-brand" href="/">
                                <img src={logo} alt='logo' />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className='col d-flex flex-end'>
                            <Nav className="navbar-nav ms-auto navigation " navbar>
                                <NavItem className='navbar-kanan'>
                                    <NavLink className='text-dark nav-item' href="/">
                                        Our Service
                                    </NavLink>
                                </NavItem>
                                <NavItem className='navbar-kanan nav-item'>
                                    <NavLink className='text-dark' href="/">
                                        Why Us
                                    </NavLink>
                                </NavItem>
                                <NavItem className='navbar-kanan nav-item'>
                                    <NavLink className='text-dark' href="/">
                                        Testimonial
                                    </NavLink>
                                </NavItem>
                                <NavItem className='navbar-kanan nav-item'>
                                    <NavLink className='text-dark' href="/">
                                        FAQ
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='register btn btn-success text-white' href="/">
                                        Register
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default App;
