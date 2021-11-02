import React from 'react';
import './Service.css';


const Service = (props) => {
    const {name, description, img, method, courseFee, duration} = props.service;
    return (
       
            <div className="Service">
                <div>
                    <img class="responsive" src={img} alt="..."/>
                    <h4 className="service-name">Language: {name}</h4>
                    <p>Description: {description}</p>
                    <p><small>Duration: {duration}</small></p>
                    <p><small>Method of learning: {method}</small></p>
                    <p>Course Fee: Tk. {new Intl.NumberFormat().format(courseFee.toFixed(2))}</p>
                    <br/>
                </div>
            </div>
       
    );
};

export default Service;