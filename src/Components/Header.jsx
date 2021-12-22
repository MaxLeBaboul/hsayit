import React from 'react';

import {Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <section className="container-fluid  p-4">
                <div className="row align-items-center">
                    <div className="col-md-5 pe-5 ">
                        <img src="" alt="" className="img-fluid d-block ms-auto" />
                    </div>
                    <div className="col-md-7">
                        <div className="card m-auto" >
                            <div className="card-body">
                                <h5 className="card-title">Bienvenue sur notre application d'éducation et santé</h5>
                                <div className="underline mb-4"></div>
                                <p className="card-text">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="#" className="btn btn-success rounded-pill d-block m-auto w-25">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row mt-5 justify-content-center">
                    <div className="input-group rounded-pill m-2 me-5  topgroup">
                                    
                                    <input className="form-control border-end-0 border me-n3 rounded-end rounded-pill" placeholder="Search" type="text" aria-label='Search'  aria-describedby='basic-addon1'/>
                                    <span className="input-group-append" id='basic-addon1'>
                                        <button className="btn btn-outline-secondary bg-dark border-start-0 border rounded-start rounded-pill ms-n3" type='button'>
                                          <i className='bi bi-search'></i>
                                         </button>
                                    </span>
                                    
                     </div>
                </div>
                
                                
            </section>
        </div>
    );
};

export default Header;