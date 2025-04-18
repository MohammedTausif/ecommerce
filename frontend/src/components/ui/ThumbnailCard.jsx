
const ThumbnailCard = ({ product, onClick, selectedtype }) => (
    <div key={product.id} className={` w-48 z-10  overflow-hidden shadow-md cursor-pointer transition-border duration-300 ${selectedtype === product.slug? "border-1 border-black " : "border-1 border-transparent "}`}
      onClick={onClick} >
  
      <div className='relative w-full h-48 group overflow-hidden'>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full relative  object-cover "
        />
         {/* title  */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-80 rounded-t-lg"></div>
        <h3 className="absolute bottom-2 left-2 text-xs font-poppins font-light text-white">
          {product.title.toUpperCase()}
        </h3>
      </div>
    </div >
  
  );

  export default ThumbnailCard;
  