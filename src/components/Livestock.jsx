import React from 'react'

function Livestock ({animal}) {
    console.log(animal.image)
    return (
        <div className="livestock">
            <img className="livestock-image" src={animal.image} alt={animal.name}/>
            <div>{animal.name}</div>
            <div>Something cool about the livestock</div>
        </div>
    )
}

export default Livestock