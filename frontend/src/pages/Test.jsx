// ProductGrid.jsx
import { BaggageClaim, LuggageIcon } from 'lucide-react';
import React from 'react';
export const products = [

    {
        id: 1,
        title: 'Mens 365 Midweight Sweatshirt',
        price: '499',
        link: "/collection/mens-365/sweatsheart/forest-green",
        image: 'https://pangaia.com/cdn/shop/files/365_Midweight-Sweatshirt_Forest_Green-1_3a4659c6-4e6b-4c37-8bfa-0a2c2dcd8ee4.png?crop=center&height=1866&v=1727177645&width=1400',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
    },
    {
        id: 2,
        title: 'Product 2',
        price: '999',
        image: 'https://pangaia.com/cdn/shop/files/365_TrackPants_Forest_Green-1_19b47d32-6b6a-4fa1-9e3a-7b1a6d2e100c.png?crop=center&height=1364&v=1729733037&width=1024',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_TrackPants_Forest_Green_Mens-1_fbc0fc89-00c3-4698-a05d-09042a39a05e.jpg?crop=center&height=1364&v=1729733034&width=1024',
    },
    {
        id: 3,
        title: 'Product 3',
        price: '499',
        image: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
    },
    {
        id: 4,
        title: 'Product 4',
        price: '499',
        image: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
    },
    // Add more products as needed...
    {
        id: 5,
        title: 'Product 1',
        price: '499',
        image: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
    },
    {
        id: 6,
        title: 'P',
        price: '999',
        image: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
    },
    {
        id: 7,
        title: 'Product 3',
        price: '999',
        image: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
    },
    {
        id: 8,
        title: 'Product 4',
        description: '999',
        image: 'https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768',
        hoverImage: 'https://pangaia.com/cdn/shop/files/365_Midweight_Sweatshirt_Forest_Green_Mens-1_2feb49c3-5f76-41f5-b428-10edcfa93049.jpg?crop=center&height=1364&v=1729648083&width=1024',
    },

];

const ItemssCard = ({ product, onAddToCart }) => {
    return (
        <div className="group relative ">
            {/* Image Container */}
            <div className="relative  sm:w-[351px] w-full md:w-[254px] lg:w-[339px] h-[308px] sm:h-[400px] md:h-[336px] lg:h-[455px] overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full absolute inset-0  object-cover object-top md:object-center rounded-t transition-opacity duration-300 group-hover:opacity-0"
                />

                <img
                    src={product.hoverImage}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover object-top md:object-center  rounded-t transition-opacity duration-300 opacity-0  group-hover:opacity-100"
                    loading='lazy'
                />

            </div>

            {/* Product Info */}
            <div className="pt-4 pb-2 px-1">
                <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0 font-poppins">
                        <h3 className="text-[13px] leading-[1.4] font-medium text-gray-900 mb-[2px] tracking-wide">
                            {product.title}
                        </h3>
                        <p className="text-xs text-gray-600 font-normal">₹{product.price}</p>
                    </div>

                    {/* Cart Button */}
                    <div className="">
                        <button
                            onClick={() => onAddToCart(product)}
                            className="w-9 h-9 bg-[#002fa7]  text-white rounded-full md:opacity-0 md:group-hover:opacity-100 flex justify-center items-center">
                            <img
                                className='w-[12px] h-[17px] size4 text-white  cursor-pointer'
                                style={{ filter: 'invert(1)' }}
                                src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3QtY3VycmVudCIgZGF0YS1sYWJlbD0ic3ZnIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsa.svg" alt="Cart icon" />
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

const ProductGrid = () => {

    const handleAddToCart = (product) => {
        alert('Added to Cart :' + product.title)
    }

    return (
        <div className="w-full  px-2 sm:px6 lg:px-5 py-2 bg-white ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  sm:gap-5">
                {products.map((product) => (
                    <ItemssCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;

