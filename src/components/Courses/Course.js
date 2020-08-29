import React from 'react';
import fakeData from '../fakedata';
import Courses from '../Courses/Courses';
import Cart from './Cart';
import { useState } from 'react';

const Course = () => {
    const [cart, setCart] = useState([]);
    const handleEnrollNow = (courses) => {
        console.log(courses.name)
        const newCart = [...cart, courses];
        setCart(newCart);
    }

    return (
        <div className="content">
            <div className="row">
                <Courses courses={fakeData} handleEnrollNow={handleEnrollNow}></Courses>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;