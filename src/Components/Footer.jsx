import React from 'react';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faFacebook, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons';
import NewsLetter from './NewsLetter';

const Footer = () => {
  
    return (
        <div className="shadow Footer">
            <NewsLetter />
            <footer className="bg-success text-white mt-5 p-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Support</h3>
                            <div className="">
                                
                                <Link to="/" className="d-block text-decoration-none text-white">One Link</Link>
                                <Link to="/" className="d-block text-decoration-none text-white">Police de Confidentialité</Link>
                                <Link to="/" className="d-block text-decoration-none text-white">Cookies</Link>
                                </div>
                        </div>
                         <div className="col-md-4">
                             <h3>Nos sujets</h3>
                             <nav class="nav flex-column">
                            <Link class="nav-link active text-white" aria-current="page" to="#">Communauté</Link>
                            <Link class="nav-link text-white" to="#">Bibliothèque</Link>
                            <Link class="nav-link text-white" to="#">Aide caritative</Link>
                            <Link class="nav-link text-white" to="/">Nos partenaires</Link>
                            </nav>
                         </div>
                          <div className="col-md-4 text-center">
                              <h3>Nous contacter</h3>
                              <dl class="row">
                                    <dt class="col-sm-3">Adresse</dt>
                                    <dd class="col-sm-9">463 Round Table Drive, Norwood, OH, Ohio</dd>

                                    <dt class="col-sm-3 text-truncate">Télephone</dt>
                                    <dd class="col-sm-9">+237 2534 574 58474</dd>

                                    
                              </dl>
                              <p className=" ">
                                  <Link to="/" className="text-white m-2 h2  text-center"><FontAwesomeIcon icon={faFacebook} /></Link>
                                  <Link to="/" className="text-white m-2 h2 text-center"><FontAwesomeIcon icon={faTwitter} /></Link>
                                  <Link to="/" className="text-white m-2 h2 text-center"><FontAwesomeIcon icon={faGoogle} /></Link>
                              </p>
                          </div>
                    </div>

                    <div className="row justify-content-center text-center">
                        <hr className='footHr' />
                        <p>Copyright ©2021 <span className='orange'>Orange Digital Center</span> | Powered by <span className='orange'>Team 3</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;