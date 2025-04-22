import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GetSelectedColor, GetSelectedGender, GetSelectedSize, GetSelectedSort, GetSelectedType } from '../utils/urlHelpers'

const KidsShopAll = () => {
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
      <h1>Shop all page</h1>
    </div>
  )
}

export default KidsShopAll
