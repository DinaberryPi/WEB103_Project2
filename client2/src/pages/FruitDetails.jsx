

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FruitDetails.css';
const FruitDetails = ({data}) => {
    const { id } = useParams()
    const [fruit, setFruit] = useState({id: 0, name: "", image: "", description: ""})


    useEffect(() => {
        const fetchFruit = async () => {
            const response = await fetch(`http://localhost:3001/fruits/${id}`);
            const data = await response.json();
            setFruit(data);
          };
          fetchFruit();
    }, [id, fruit]);


    return (
        <div className="FruitDetails">
            <main id="fruit-content" class="fruit-info">
                <div class="image-container">
                    <img id="image" src={fruit.image} />
                </div>
                <div class="fruit-details">
                    <h2 id="name">{fruit.name}</h2>
                    <p id="submittedBy">{'Submitted By: ' + fruit.submittedby}</p>
                    <p id="PLU_Code">{'Plu_Code: ' + fruit.plu_code}</p>
                    <p id="description">{fruit.description}</p>
                </div>
            </main>
        </div>
    )
}

export default FruitDetails