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
                        <h3 className="text-[13px] leading-[1.4] font-medium text-gray-900 mb-[2px] tracking-wide cursor-pointer">
                            {product.title}
                        </h3>
                        <p className="text-xs text-gray-600 font-normal">₹{product.price}</p>
                    </div>

                    {/* Cart Button */}
                    <div className="">
                        <button
                            onClick={() => onAddToCart(product)}
                            className="w-9 h-9 bg-[#002fa7]  text-white rounded-full md:opacity-0 md:group-hover:opacity-100 flex justify-center items-center cursor-pointer">
                            <img
                                className='w-[12px] h-[17px] size4 text-white '
                                style={{ filter: 'invert(1)' }}
                                src="src/assets/images/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3QtY3VycmVudCIgZGF0YS1sYWJlbD0ic3ZnIj4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsa.svg" alt="Cart icon" />
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ItemssCard;