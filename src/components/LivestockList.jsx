import React from 'react'
import {useContext} from 'react'
import LivestockContext from '../context/LivestockContext'
import LivestockGrid  from './LivestockGrid';

function LivestockList() {
    const {animalState} = useContext(LivestockContext)

    if (!animalState || animalState.length === 0){
        return <p>No Feedback as of yet</p>
    }
    return (
            <div className='livestock-list'>
                <LivestockGrid animals={animalState}/>
            </div>
    )
}

export default LivestockList