import React, { useState, useRef, useEffect } from "react";
import Button from '../components/ui/Button'

const videos = [
  { id: 1, src: "https://pangaia.com/cdn/shop/videos/c/vp/152944895b42468ba6d9807fbe4c3619/152944895b42468ba6d9807fbe4c3619.HD-720p-4.5Mbps-22940805.mp4",  headline: "Discover ROGER", description: "Bringing problem-solving innovations to the world through premium lifestyle products and experiences" , link:'/to-1', button:"Find out more"},
  { id: 2, src: "https://pangaia.com/cdn/shop/videos/c/vp/baff8fe43efa4810868148862527dbf0/baff8fe43efa4810868148862527dbf0.HD-1080p-7.2Mbps-36310217.mp4?v=0" ,  headline: "Spotlight On Mirum", description: "A radically minimal tote crafted entirely from MIRUM®  a 100% bio-based, animal-free leather alternative.", link:'/', button:"Find out more"},
  { id: 3, src: "https://pangaia.com/cdn/shop/videos/c/vp/d33a624109cf46e4921f4525127d6f8a/d33a624109cf46e4921f4525127d6f8a.HD-720p-3.0Mbps-33635785.mp4?v=0",  headline: "ROGER Inner Circle", description: "Gain access to execlusive member benefits and rewards" , link:'/', button:"Join Now"},
];


const VideoCarousel = () => {
  const [videoWidth, setVideoWidth] = useState(702);
  const [videoHeight, setVideoHeight] = useState(450);
  const [sidePadding, setSidePadding] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Update dimensions based on viewport size.
  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth;
      if (vw < 768) {
        // Mobile dimensions: 321px x 480px
        setVideoWidth(321);
        setVideoHeight(480);
        setSidePadding((vw - 321) / 2);
      } else {
        // Desktop dimensions: 702px x 450px
        setVideoWidth(702);
        setVideoHeight(450);
        setSidePadding((vw - 702) / 2);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Update active index based on scroll position.
  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleScroll = () => {
      if (container) {
        const index = Math.round(container.scrollLeft / videoWidth);
        setActiveIndex(index);
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [videoWidth]);

  // Scroll to a specific video index.
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * videoWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-4 mb-8">
      {/* Horizontal scroll container with left/right padding */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ paddingLeft: sidePadding, paddingRight: sidePadding }}
      >
        <div className="inline-flex space-x-2">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative flex-shrink-0 snap-center w-[320px] h-[480px] md:w-[564px] md:h-[361px] xl:w-[702px] xl:h-[450px]"
              // style={{ width: videoWidth, height: videoHeight }}
            >
              <div className="relative w-full h-full">
                {/* Heading */}
                <div className="absolute top-4 left-0 right-0 text-center z-10 pointer-events-none flex justify-center md:justify-start p-6 ">
                  <h2 className="text-white text-2xl  drop-shadow-md font-poppins">
                    {video.headline} 
                  </h2>
                </div>
                {/* Video element */}
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Description overlay */}
                <div className="w-full absolute bottom-12  left-0 right-0 text-center   flex justify-evenly  flex-col  md:flex-row flex-wrap space-y-1">
                <p className="md:hidden  text-white text-[17px] md:w-[60%] w-full  drop-shadow-md px-2">
                    {video.description}
                  </p>
                  <Button 
                  title={video.button}
                  link={video.link}
                  className=' py-4 md:w-40 w-36 text-black bg-white cursor-pointer'
                  />
                 <p className="hidden md:block text-white text-[17px] md:w-[60%] w-full  drop-shadow-md px-2 font-sans">
                    {video.description}
                  </p>

                </div>
                {/* Dim overlay for inactive videos */}
                {activeIndex !== index && (
                  <div className="absolute inset-0 bg-gray-200/60 pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="mt-4 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-800" : "bg-gray-300"
            }`}
            aria-label={`Go to video ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
