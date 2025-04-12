import React from 'react'
import { Link } from 'react-router-dom'

const VariantStyle = {
    "primary": "bg-white hover:bg-white/90 text-black py-4",
    "outline": "py-4 bg-white text-[#002FA7] outline-1 outline-[#002FA7] hover:bg-[#002FA7] hover:text-white w-[148px]",
    "secondary": "py-4 bg-[#002FA7] text-white hover:bg-[#002FA7]/90 w-[156px]",
    "custom": "py-4 bg-[#002FA7] text-white hover:bg-[#002FA7]/90",

}

const Button = React.memo(({ link, title, variant, onClick, className = '' }) => {
    return (
        <Link to={link} onClick={onClick} >
            <button className={`${className} flex justify-center  font-poppins  rounded-full  text-[11px] cursor-pointer py-4  ${VariantStyle[variant]} `}>
                {title}  
            </button>
        </Link>
    )
});

export default Button

