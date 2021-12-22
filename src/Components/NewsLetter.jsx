import React from 'react';
import {Link} from 'react-router-dom'

const NewsLetter = () => {
    return (
        <div className='NewsLetter'>
            <section class="subscribe-area pb-50 pt-70 bg-dark p-5">
                <div class="container">
                    <div class="row mt-4">

                                    <div class="col-md-5">
                                        <div class="subscribe-text mb-15 text-white">
                                            <span>Abonnez-vous à la newsletter pour rester au courant
                                            Date de nos dernières nouvelles</span>  
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="">
                                            <div class="subscribe-form">
                                                <form action="#" className="d-flex">
                                                    <input className="form-control me-2" placeholder="Email" type="email" />
                                                    <button className="btn btn-info">subscribe <i class="fas fa-long-arrow-alt-right"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="onTop"><Link to=""><i className="bi bi-chevron-double-up mb-5 text-white fs-3"></i></Link></div>
                                </div>

                </div>
</section>
        </div>
    );
};

export default NewsLetter;