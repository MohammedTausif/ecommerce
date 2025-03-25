import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ link, title, className }) => {
    return (
        <>
            <Link to={link}>
                <button className={`${className} + hover:backdrop-blur hover:bg-white/90 font-poppins bg-white rounded-full text-black text-[11px] cursor-pointer`}>
                    {title}
                </button>
            </Link>
        </>
    )
}

export default Button
