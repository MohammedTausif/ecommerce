import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = React.memo(({ imageUrl, hoverImageUrl, title, link, effect }) => {
    return (
            <Link to={link} className='cursor-pointer'>
                <img
                    src={imageUrl}
                    alt={title}
                    className= {`absolute inset-0 w-full h-full  object-cover object-top  rounded-t transition-opacity duration-300 ${effect? "group-hover:opacity-0" : " "}`}
                    loading='lazy'
                />
                {/* Image changes on hover */}
                {
                    effect && <img
                        src={hoverImageUrl}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover object-top  rounded-t transition-opacity duration-300 opacity-0 md: group-hover:opacity-100"
                        loading='lazy'
                    />}
            </Link>
    )
});

export default ProductCard
