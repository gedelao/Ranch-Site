import React from 'react'
import LivestockCard from './LivestockCard'
import Livestock from './Livestock'

function LivestockGrid({animals}){
    return (
        <div className="livestock-grid">
            {animals.map((animal =>{
                return (
                <LivestockCard key={animal.id}>
                    <Livestock animal={animal} image={animal.image}/>
                </LivestockCard>
                )
            }))}
        </div>
    )
}


export default LivestockGrid