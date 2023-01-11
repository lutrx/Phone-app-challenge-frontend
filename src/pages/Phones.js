import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:3000";


function Phones () {
    const [phones, setPhones] = useState();

    useEffect(() => {
        const fetchPhones = async () => {
            let response = await axios.get(`${API}/phones`);
            setPhones(response.data);
        };
        fetchPhones();
    }, []);

    console.log(phones)


    return phones ? (
        <div>
            <h1>List of all phones</h1>
            <div>
                {phones.map((phone) => (
                    <div key={phone.id}>
                        <h2>Name: {phone.name}</h2>
                        <Link to={`/${phone.id}`}>See Details</Link>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div>
            <span>Loading....</span>
        </div>
    )
}

export default Phones;