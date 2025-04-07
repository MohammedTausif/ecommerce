import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, InstagramIcon, Linkedin, TwitterIcon } from 'lucide-react'

const socialLinks = [
    { name: 'Instagram', icon: <InstagramIcon className='size-4 md:size-5 stroke-[1px]' />, link: '/', },
    { name: 'Linkedin', icon: <Linkedin className='size-4 md:size-5 stroke-[1px]' />, link: '/', },
    { name: 'Facebook', icon: <Facebook className='size-4 md:size-5 stroke-[1px]' />, link: '/', },
    { name: 'Twitter', icon: <TwitterIcon className='size-4 md:size-5 stroke-[1px]' />, link: '/', }
]

const Newsletter = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('submitted')
    }
    return (
        <>
            <div className="md:border-r border-b border-gray-700 w-full md:w-1/2">
                <div className="max-w-7xl mx-auto px-4  sm:px-6 py-8 ">
                    <div className=" flex flex-col md:fex-row justify-between items-start space-y-4 md:space-y-6">
                        <div className="flex-1">
                            <h3 className="md:text-xs text-lg font-light mb-2">Want to be part of our collective?</h3>
                        </div>
                        <div >
                            <p className='md:text-xs text-sm font-light'>
                                Be the first to receive innovative new product launches, perspectives and technologies, direct to your inbox. To introduce you to our world, we are offering 10% off your first order. Discount applies to full-price products only.
                            </p>
                        </div>
                        <form className="flex flex-col flex-1 w-full max-w-xl" onSubmit={handleSubmit}>
                            <div className='flex w-full'>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 bg-transparent border-[0.5px] border-gray-600  p-2  focus:outline-none placeholder-gray-200 font-poppins text-sm w-1/2"
                                />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="flex-1 bg-transparent border-[0.5px]  border-gray-600  p-2 focus:outline-none placeholder-gray-200 text-sm w-1/2"
                                />
                            </div>
                            <button className="px-6 py-1 bg-transparent text-white border-[0.5px]  border-gray-600 font-light hover:text-gray-300 transition-colors"    >
                                Subscribe
                            </button>
                        </form>

                        <div className="flex space-x-4">
                            {socialLinks.map((platform) => (
                                <Link key={platform.name} to={platform.link} className="hover:opacity-75 transition-opacity">
                                    {platform.icon}
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                </div>

            </div>


        </>
    )
}

export default Newsletter
