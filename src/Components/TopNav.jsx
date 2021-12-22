import React from 'react';


function TopNav() {
    return (
        <div className="container me-0 topnav">
            
            
                      
                            <form className=" d-flex  justify-content-center">

                               
                                
                               <div className="input-group rounded-pill m-2 me-5  topgroup d-none d-lg-flex">
                                    
                                    <input className="form-control border-end-0 border me-n3 rounded-end rounded-pill" placeholder="Search" type="text" aria-label='Search'  aria-describedby='basic-addon1'/>
                                    <span className="input-group-append" id='basic-addon1'>
                                        <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-start rounded-pill ms-n3" type='button'>
                                          <i className='bi bi-search'></i>
                                         </button>
                                    </span>
                                    
                                    </div>
                                

                                <button className="btn-outline-dark m-2 text-white btn btn-rounded rounded-pill ">S'inscrire<i className="bi bi-box-arrow-in-down-right"></i></button>
                                <button className="m-2 btn btn-dark btn-rounded rounded-pill">Se connecter<i className="bi bi-box-arrow-in-right"></i></button>
                            </form>
                       
                    
               
            
        </div>
    );
}

export default TopNav;