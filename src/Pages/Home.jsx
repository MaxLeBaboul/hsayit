import React from 'react';
import Header from '../Components/Header';
import Doctors from '../images/doctors and medical teams wearing.png';
import ImgReact from '../images/react.png';
import Testimonial1 from '../images/testimonial-1.png';
import Testimonial2 from '../images/testimonial-2.png';
import Testimonial3 from '../images/testimonial-3.png';
import { Link } from 'react-router-dom';
import LastNews1 from '../images/lastNews-2.jfif';
import LastNews2 from '../images/lastNews-3.jpg';
import LastNews3 from '../images/lastNews-4.jfif';
import SocialCommunity from '../images/internet social community.png';
import Product1 from '../images/product-1.png';
import Product2 from '../images/chinese-herbology-traditional.png';
import Product3 from '../images/product-3.png';



const Home = () => {
    return (
        <div className="Home">
            
            <Header />
            <section className="container-fluid bg-white p-5">
                <div className="row d-fluid justify-content-center">
                    <div className="col-md-8 text-start p-5">
                        <h2>Une communaut√© une confiance</h2>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                        <button className="btn btn-success shadow px-5 py-2 rounded-pill">Savoir plus</button>
                    </div>
                    <div className="col-md-4 "><h2 className="text-center"><img src={SocialCommunity} className='img-fluid shadow' /></h2></div>
                </div>
            </section>
            
            <section className="container-fluid  bg-dark py-5">
                <div className="row">
                    <div className="col-md-4 p-2">
                        <div className="card p-2 onCard">
                            <img src={Product1}  className="card-img-top img-fluid"  alt="product image" />
                            <div className="card-body">
                                <p className="cart-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusantium at aliquam vel, sint placeat eius. Doloribus, vel! Porro, facilis!</p>
                                <Link to='/' className='btn btn-success shadow d-block m-auto w-50 rounded-pill'>Acheter</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-2 onCard">
                            <img src={Product2}  className="card-img-top img-fluid"  alt="product image" />
                            <div className="card-body">
                                <p className="cart-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusantium at aliquam vel, sint placeat eius. Doloribus, vel! Porro, facilis!</p>
                                <Link to='/' className='btn btn-success shadow d-block m-auto w-50 rounded-pill'>Acheter</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-2 onCard">
                            <img src={Product3}  className="card-img-top img-fluid"  alt="product image" />
                            <div className="card-body">
                                <p className="cart-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusantium at aliquam vel, sint placeat eius. Doloribus, vel! Porro, facilis!</p>
                                <Link to='/' className='btn btn-success shadow d-block m-auto w-50 rounded-pill'>Acheter</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col-md-12 d-block text-center text-white">
                        <h2 className='display-6'>Biblioth√®que</h2>
                        <div className="underling m-auto"></div>
                        <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repudiandae iste laudantium necessitatibus magnam eligendi nam temporibus sunt eum cumque quidem. Impedit, ut nulla. Est, quam laborum pariatur perspiciatis culpa neque ad quae molestiae soluta nam esse, corrupti nobis necessitatibus!</p>
                    </div>
                </div>
            </section>

            <section className="container-fluid py-5  bg-white justify-content-center">
                 <div className="row m-4">
                    <div className="col-md-12 d-block">
                        <h2 className='display-6'>T√©moignage</h2>
                        <div className="underling"></div>
                        <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repudiandae iste laudantium necessitatibus magnam eligendi nam temporibus sunt eum cumque quidem. Impedit, ut nulla. Est, quam laborum pariatur perspiciatis culpa neque ad quae molestiae soluta nam esse, corrupti nobis necessitatibus!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 onCard p-2 ">
                        <div className="maincard shadow p-2">
                            <div className="thecard">
                                <div className="thefront text-center py-4">
                                    <img src={Testimonial2} className='rounded rounded-circle mt-2 img-fluid' />
                                    <h3 className="mt-2 mb-0">Doe John</h3>
                                    <small className="user_name">Lead Manager</small>
                                </div>
                                <div className="theback py-3 px-3">
                                    <div className="quote mt-3 d-flex">
                                        <h4><i className="bi bi-quote"></i></h4>
                                        <p className="about text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam consequatur iure dolorum magnam aperiam molestiae minima vel porro deleniti aspernatur?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="col-md-4 onCard p-2">
                        <div className="maincard shadow p-2">
                            <div className="thecard">
                                <div className="thefront text-center py-4">
                                    <img src={Testimonial1} className='rounded-circle mt-2 img-fluid' />
                                    <h3 className="mt-2 mb-0">Christele</h3>
                                    <small className="user_name">Frontend Software</small>
                                </div>
                                <div className="theback py-3 px-3">
                                    <div className="quote mt-3 d-flex">
                                        <h4><i className="bi bi-quote"></i></h4>
                                        <p className="about text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam consequatur iure dolorum magnam aperiam molestiae minima vel porro deleniti aspernatur?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="col-md-4 onCard p-2">
                        <div className="maincard shadow p-2">
                            <div className="thecard">
                                <div className="thefront text-center py-4">
                                    <img src={Testimonial3} className='rounded-circle mt-2 img-fluid' />
                                    <h3 className="mt-2 mb-0">Yared Ayankam</h3>
                                    <small className="user_name">Backend software</small>
                                </div>
                                <div className="theback py-3 px-3">
                                    <div className="quote mt-3 d-flex">
                                        <h4><i className="bi bi-quote"></i></h4>
                                        <p className="about text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam consequatur iure dolorum magnam aperiam molestiae minima vel porro deleniti aspernatur?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid bg-dark text-white p-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 "><h2 className="text-center"><img src={Doctors} className='img-fluid shadow' /></h2></div>
                    <div className="col-md-8 text-start p-5">
                        <h2>Aidez nous a aider les autres</h2>
                        <div className="underline"></div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur nam cupiditate maiores quibusdam architecto sint ipsum optio nesciunt ab adipisci nemo, at numquam? Hic, praesentium. Possimus quis perferendis expedita atque voluptatum sequi repellendus laudantium alias. Sapiente architecto beatae minima placeat culpa impedit, incidunt exercitationem sint nostrum eligendi saepe labore cumque dolorum distinctio accusamus amet ea, earum ipsam dolore! Iste consequuntur magni ducimus tempore inventore, consequatur veniam voluptatibus a voluptate laudantium distinctio, dolorum illum molestias. Deleniti enim asperiores molestias necessitatibus quibusdam eum doloremque modi consequuntur, harum voluptatem consequatur iure, eos possimus ratione expedita itaque? Perferendis illum veniam eligendi nulla labore?</p>
                        <button className="btn btn-success px-5 py-2 me-5 rounded-pill">Aide...</button>
                    </div>
                    
                </div>
            </section>

            <section className="container-fluid bg-white p-5">
                <div className="row m-4">
                    <div className="col-md-12 d-block">
                        <h2 className='display-6'>Nos derni√®res actualit√©s</h2>
                        <div className="underling"></div>
                        <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repudiandae iste laudantium necessitatibus magnam eligendi nam temporibus sunt eum cumque quidem. Impedit, ut nulla. Est, quam laborum pariatur perspiciatis culpa neque ad quae molestiae soluta nam esse, corrupti nobis necessitatibus!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-2">
                        <div className="card p-2 shadow onCard">
                            <img src={LastNews1}  className="card-img-top img-fluid"  alt="product image" />
                            <div className="card-body">
                                <p className="card-text"><small className="text-muted">Last update 3 min ago</small></p>
                                <h5 className="card-title">Article N¬į1</h5>
                                <p className="cart-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusantium at aliquam vel, sint placeat eius. Doloribus, vel! Porro, facilis!</p>
                                <Link to='/' className='btn btn-success d-block m-auto w-50 rounded-pill'>Lire la suite</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-2 shadow onCard">
                            <img src={LastNews2}  className="card-img-top img-fluid"  alt="product image" />
                            <div className="card-body">
                                <p className="card-text"><small className="text-muted">Last update 3 min ago</small></p>
                                <h5 className="card-title">Article N¬į2</h5>
                                <p className="cart-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusantium at aliquam vel, sint placeat eius. Doloribus, vel! Porro, facilis!</p>
                                <Link to='/' className='btn btn-success d-block m-auto w-50 rounded-pill'>Lire la suite</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card p-2 shadow onCard">
                            <img src={LastNews3}  className="card-img-top img-fluid"  alt="product image" />
                            <div className="card-body">
                                <p className="card-text"><small className="text-muted">Last update 3 min ago</small></p>
                                <h5 className="card-title">Article N¬į3</h5>
                                <p className="cart-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusantium at aliquam vel, sint placeat eius. Doloribus, vel! Porro, facilis!</p>
                                <Link to='/' className='btn btn-success d-block m-auto w-50 rounded-pill'>Lire la suite</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        
           
        </div>
    );
};

export default Home;