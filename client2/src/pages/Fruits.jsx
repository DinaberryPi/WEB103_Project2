import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Fruits.css'


const Fruits = (props) => {

    const [fruits, setFruits] = useState([])

    useEffect(() => {
        setFruits(props.data)
    }, [props])
    
    return (
        <div className="Fruits">
            <main>
            {
                fruits && fruits.length > 0 ?
                fruits.map((fruit,index) => 
                    
                   <Card id={fruit.id} 
                         image={fruit.image} 
                         name={fruit.name} 
                         PLU_Code={fruit.plu_code}  />

                ) : <h3 className="noResults">{'No Fruits Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Fruits