import React from 'react'
import { Link } from 'react-router-dom'

const Button = React.memo(({ link, title, className='' }) => {
    return (
            <Link to={link}>
                <button className={`${className} hover:backdrop-blur font-poppins  rounded-full  text-[11px] cursor-pointer`}>
                    {title}
                </button>
            </Link>
    )
});

export default Button
