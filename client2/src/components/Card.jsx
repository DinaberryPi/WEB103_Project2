import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [fruit, setFruit] = useState({id: 0, name: "", pricepoint: "", audience: "", image: ""})

    useEffect(() => {
        setFruit({id: props.id, name: props.name, pricepoint: props.pricepoint, audience: props.audience, image: props.image});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${fruit.image})`}}></div>
            <div className='bottom-container'>
                <h3>{fruit.name}</h3>
                <p>{'Price: ' + fruit.pricepoint}</p>
                <p>{'Great For: ' + fruit.audience}</p>
                <Link to={'/fruit/' + fruit.id}><a>Read More →</a></Link>
            </div>
        </div>
    )
}

export default Card