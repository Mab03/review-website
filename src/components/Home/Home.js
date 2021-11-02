import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
// import AllServices from '../AllServices/AllServices';
import './Home.css';

const Home = () => {
    // const [allServices, setAllServices] = useState([]);
    const [services, setServices] = useState([]);
       
    useEffect(()=>{
         fetch('./services.JSON')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            })
    }, [])

    let shuffled = services
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        console.log(shuffled.length=4);

    return (
        <>
            <div className="home-container">
                <div>
                    <div className="service-list">
                        <br/>
                        <br/>
                        <br/>
                        <h2>Here are some of our courses (randomly selected)</h2>
                        <br/>
                    </div>
                    <div className="service-container">
                    {shuffled.map(service =><Service
                        key={service.key}
                        service={service}
                        ></Service>)} 
                    </div>
                                   
                </div>
            </div>
        </>
    );
};

export default Home;