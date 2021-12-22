import React from 'react';
import {Link} from 'react-router-dom';
import LogoSayIt from '../images/logo_sayit.png'


function Navigation() {
    return (
        <div className='Navigation'>
            <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand " to="/">
        <svg className="Trac_87 d-none d-md-block " viewBox="8100 0 158 222">
		<path id="Trac_87" d="M 8099.99951171875 0 L 8099.99951171875 222 L 8175.11376953125 126.8571472167969 L 8258 222 L 8258 0 L 8099.99951171875 0 Z">
		</path>
	</svg>
        <img id="logo_sayit_2" src={LogoSayIt} />

        </Link>
      <button className="navbar-toggler bg-tranparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle text-white" to="/community" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
                  Community
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/">Action</Link></li>
              <li><Link className="dropdown-item" to="/">Another action</Link></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" aria-current="page" to="/library">Boutique</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/charitableaid">Aide caritative</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact" tabindex="-1" aria-disabled="true">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about" tabindex="-1" aria-disabled="true">A propos</Link>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
        </div>
    );
}

export default Navigation;