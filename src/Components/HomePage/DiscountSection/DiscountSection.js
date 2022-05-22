import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/bn2.jpg'
import img2 from '../../../images/bn3.jpg'
const DiscountSection = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:my-40 my-28'>
           <Link to={'/'}> <img src={img1} alt="" className='mx-auto'/></Link>
           <Link to={'/'}> <img src={img2} alt="" className='mx-auto'/></Link>
        </div>
    );
};

export default DiscountSection;