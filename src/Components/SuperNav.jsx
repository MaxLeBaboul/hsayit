import React from 'react';
import TopNav from './TopNav';
import Navigation from './Navigation'

const SuperNav = () => {
    return (
        <div className='SuperNav shadow'>
            <TopNav />
            <hr className="line-head" />
           <Navigation /> 
        </div>
    );
};

export default SuperNav;