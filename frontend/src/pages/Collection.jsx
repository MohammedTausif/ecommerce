import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Button from "../components/ui/Button";

const CategoriesPage = () => {
    const categories = [
        {
            id: 1,
            title: "Tracksuits",
            image: "https://pangaia.com/cdn/shop/files/Tracksuits.jpg?crop=center&height=559&v=1741857608&width=420",
            link: '/tracksuits'
        },
        {
            id: 2,
            title: "Linen",
            image: "https://pangaia.com/cdn/shop/files/ELEVATED_WOMENS_2-033B_de7e1d6a-e980-42ea-b76a-c9beebee65b2.png?crop=center&height=559&v=1742481866&width=420",
            link: '/collection/linen'
        },
        {
            id: 3,
            title: "Lightweight Outwear",
            image: "https://pangaia.com/cdn/shop/files/Outerwear_3436421e-a873-4be0-b049-ef8f1568af95.jpg?crop=center&height=1023&v=1741857626&width=768",
            link: '/collection/lightweight-outwear'
        },
    ];

    // For mobile scroll navigation
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollToIndex = (index) => {
        if (scrollContainerRef.current && scrollContainerRef.current.children[index]) {
            scrollContainerRef.current.children[index].scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            setCurrentIndex(index);
        }
    };

    // Update current index when scrolling (in case user swipes)
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const onScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.offsetWidth; // each card takes full width on mobile
            const newIndex = Math.round(scrollLeft / cardWidth);
            setCurrentIndex(newIndex);
        };

        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    const handlePrev = () => {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        scrollToIndex(prevIndex);
    };

    const handleNext = () => {
        const nextIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : currentIndex;
        scrollToIndex(nextIndex);
    };

    return (
        <div className=" mx-auto md:mx-auto px-0 py-0">
            {/* Desktop View: 3 cards in a row */}
            <div className="hidden  md:flex justify-center ">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative  overflow-hidden h-[639px] w-full"
                    >
                        <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
                            <div className="relative bottom-1 flex flex-col justify-center items-center space-y-3">

                                <h3 className="text-2xl font-poppins flex justify-center">{category.title}</h3>

                                <Button
                                    title='Shop Now'
                                    link={category.link}
                                    className='w-[148px] py-4 '
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View: Horizontally scrollable full-width cards */}
            <div className="md:hidden relative ">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide"
                >
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="snap-center flex-shrink-0 w-full overflow-hidden"
                            style={{ height: "600px" }}
                        >
                            <div className="relative ">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover object-bottom "
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">

                                    <div className="relative bottom-1 flex flex-col justify-center items-center space-y-3">
                                        <h3 className="text-2xl font-poppins flex justify-center">{category.title}</h3>
                                        <Button
                                            title='Shop Now'
                                            link={category.link}
                                            className='w-[148px] py-4 '
                                        />
                                    </div>
                                   </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Arrow Navigation */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex == 0}
                    className="absolute top-[43%] left-2 transform  -translate-y-1/2 bg-white  text-black p-1 text-xs  rounded-full opacity-100 hover:opacity-75 transition-opacity disabled:opacity-0"
                >
                    <ArrowLeft className="size-3.5 opacity-85" />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex == categories.length - 1}
                    className="absolute top-[43%] right-2 transform -translate-y-1/2 bg-white text-black p-1 text-xs  rounded-full opacity-100 hover:opacity-75 transition-opacity disabled:opacity-0"
                >
                    <ArrowRight className="size-3.5 opacity-85" />
                </button>
            </div>
        </div>
    );
};

export default CategoriesPage;