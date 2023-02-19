import React from 'react'

function LivestockCard({children, image}) {
  return (
    <div className="livestockCard">
        {image && <img src={image} alt="h"/>}
        {children}    
    </div>
  )
}

export default LivestockCard