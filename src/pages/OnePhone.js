import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
const API = "http://localhost:3000";


function OnePhone() {
    const {id} = useParams();

    const [onePhone, setOnePhone] = useState();
    useEffect(() => {
        const fetchOnePhone = async () => {
            let response = await axios.get(`${API}/phones/${id}`);
            setOnePhone(response.data[0]);
        };
        fetchOnePhone();
    }, [id]);

    return onePhone ? (
        <div>
            <h1>Details</h1>
            <div>
                <h2>Name: {onePhone.name}</h2>
                <p>Manufacturer: {onePhone.manufacturer}</p>
                <p>Description: {onePhone.description}</p>
                <p>Color: {onePhone.color}</p>
                <p>Price: {onePhone.price} USD</p>
            </div>
        </div>
    ) : (
        <div>
            <span>Loading....</span>
        </div>
    )
}

export default OnePhone;