import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Course.css'

const Course = (props) => {
    console.log(props)
    const { name, Category, price, shipping } = props.course;
    return (
        <div >
            <br/>
            <div className="card text-center" id="makeup">
            <div className="card-header">
                Mela! Mela! Mela!
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="price">Shommani: ${price} Matro! </h6>
                <div className="ship">
                    <p className="cat">Category : {Category} </p>
                    <p>Shipping: {shipping}</p>
                </div>
                </div>
            <div className="card-footer text-muted">
            <button onClick={() => props.handleAddPrice(props.course)} className="btn btn-primary"><FontAwesomeIcon icon={faPlusCircle} /> Enroll Now</button>
            </div>
            </div>
        </div>
    );
};

export default Course;