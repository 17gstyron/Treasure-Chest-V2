import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import DisplayListings from '../components/DisplayListings'

function HomePage({ title }) {
    const [listings, setListings] = React.useState([])

    let location = useLocation();
    title('Home');

    const getAllListings = async () => {
        await axios.get(`http://localhost:8080/listing/`)
        .then(post => {
            setListings(post.data);
        })
        .catch(e => console.error(e));
    }

    useEffect(() => {
        getAllListings();
    }, []);
    
    return (
        <div style={{marginTop: 45, marginBottom: 45}}>
            <DisplayListings listings={listings}/>
        </div>
    )
}

export default HomePage;
