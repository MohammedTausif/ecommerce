import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { GetSelectedColor, GetSelectedGender, GetSelectedSize, GetSelectedSort, GetSelectedType } from '../utils/urlHelpers'
import { Kids_ShopAll_Thumbnail } from '../data/KidsCollection'
import ThumbnailCard from '../components/ui/ThumbnailCard'

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
        <div className='mt-13'>
            <h1>Kids Collection Page</h1>
            <div className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-2"
                style={{ gridAutoColumns: '200px' }}>
                    {
                        Kids_ShopAll_Thumbnail.map((item)=>(
                            <ThumbnailCard key={item.id} product={item} selectedtype={selectedType} onClick={()=>alert(item.title)}/>
                        ))

                    }

            </div>
        </div>
    )
}

export default KidsCollection
