import React from 'react'
import { useParams } from 'react-router-dom'

const WomensCollections = () => {
    const {type}= useParams()
  return (
    <div className='w-full  flex justif-center itemscenter mt-13'>
      Womens Page {type}
    </div>
  )
}

export default WomensCollections
