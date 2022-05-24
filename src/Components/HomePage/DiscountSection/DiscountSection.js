import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/bn2.jpg'
import img2 from '../../../images/bn3.jpg'
const DiscountSection = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:my-40 my-28'>
            <div className='flex justify-center'>
            <Link to={'/'}> <img src={img1} alt="" /></Link>
           </div>
           
            <div className='flex justify-center lg:pr-5'>
            <Link to={'/'}> <img src={img2} alt="" /></Link>
           </div>
        </div>
    );
};

export default DiscountSection;