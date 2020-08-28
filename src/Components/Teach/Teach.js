import React from 'react';
import { useState } from 'react';
import courses from '../../FakeData/Courses';
import './Teach.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';




const Teach = () => {

    const [course, setCourse] = useState(courses);
    const [cart, setCart] = useState([]);

    const handleAddPrice = (course) => {
        console.log(course);
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="course-container">
                <ul>
                {
                    course.map(crs => <Course handleAddPrice={handleAddPrice} course={crs}></Course>)
                }
                </ul>
            </div>
            <div className="cart text-center">
                <br/>
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Teach;