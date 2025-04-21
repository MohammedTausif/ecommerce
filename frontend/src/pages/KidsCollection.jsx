import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { GetSelectedType } from '../utils/urlHelpers'

const KidsCollection = () => {
    const type = useParams()
    
    return (
        <div>
            <h1>Kids Collection Page</h1>
        </div>
    )
}

export default KidsCollection
