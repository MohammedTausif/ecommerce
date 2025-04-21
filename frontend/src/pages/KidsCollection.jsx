import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { GetSelectedColor, GetSelectedGender, GetSelectedSize, GetSelectedSort, GetSelectedType } from '../utils/urlHelpers'

const KidsCollection = () => {
    const type = useParams()
    const [openSortFilter, setOpenSortFilter] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedType = GetSelectedType(searchParams)
    const selectedSort = GetSelectedSort(searchParams)
    const selectedColor = GetSelectedColor(searchParams)
    const selectedSize = GetSelectedSize(searchParams)
    const selectedGender = GetSelectedGender(searchParams)

    
    return (
        <div>
            <h1>Kids Collection Page</h1>
        </div>
    )
}

export default KidsCollection
