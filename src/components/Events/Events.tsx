"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Calendar, MapPin, Users, Play } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Masonry from "react-masonry-css";
import Link from "next/link";
import Slider from "react-slick";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
}

// Add this new interface
interface GalleryImageProps {
  src: string;
  alt: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  attendees,
  image,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden border border-purple-200"
  >
    <div className="relative h-60">
      <Image src={image} alt={title} fill className="object-cover object-top" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-purple-800">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Calendar className="w-4 h-4 mr-2 text-green-600" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2 text-green-600" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Users className="w-4 h-4 mr-2 text-green-600" />
        <span>{attendees} attendees</span>
      </div>
    </div>
  </motion.div>
);

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onClick={togglePlay}
      />
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
        >
          <Play className="w-16 h-16 text-green-400" />
        </button>
      )}
    </div>
  );
};

const VideoSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    customPaging: function (i: number) {
      return (
        <div className="w-3 h-3 mx-1 rounded-full bg-purple-300 hover:bg-purple-500 transition-colors duration-300" />
      );
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const videos = [
    "https://32watts.com/iamrakeshbansal/testimonial1.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial2.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial3.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial4.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial5.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial6.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial7.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial8.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial9.mp4",
    "https://32watts.com/iamrakeshbansal/testimonial10.mp4",
  ];

  return (
    <Slider {...settings}>
      {videos.map((video, index) => (
        <div key={index} className="px-2">
          <VideoPlayer src={video} />
        </div>
      ))}
    </Slider>
  );
};

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
const ahmedabadEvents: GalleryImageProps[] = [
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad.webp",
    alt: "Ahmedabad Events 1",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad1.webp",
    alt: "Ahmedabad Events 2",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad2.webp",
    alt: "Ahmedabad Events 3",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad3.webp",
    alt: "Ahmedabad Events 4",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad4.webp",
    alt: "Ahmedabad Events 5",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad5.webp",
    alt: "Ahmedabad Events 6",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad6.webp",
    alt: "Ahmedabad Events 7",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad7.webp",
    alt: "Ahmedabad Events 8",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad8.webp",
    alt: "Ahmedabad Events 9",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad9.webp",
    alt: "Ahmedabad Events 10",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad10.webp",
    alt: "Ahmedabad Events 11",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad11.webp",
    alt: "Ahmedabad Events 12",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad12.webp",
    alt: "Ahmedabad Events 13",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad13.webp",
    alt: "Ahmedabad Events 14",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad14.webp",
    alt: "Ahmedabad Events 15",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad15.webp",
    alt: "Ahmedabad Events 16",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad16.webp",
    alt: "Ahmedabad Events 17",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad17.webp",
    alt: "Ahmedabad Events 18",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad18.webp",
    alt: "Ahmedabad Events 19",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad19.webp",
    alt: "Ahmedabad Events 20",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad20.webp",
    alt: "Ahmedabad Events 21",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad21.webp",
    alt: "Ahmedabad Events 22",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad22.webp",
    alt: "Ahmedabad Events 23",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad23.webp",
    alt: "Ahmedabad Events 24",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad24.webp",
    alt: "Ahmedabad Events 25",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/ahmedabad/Ahemdabad25.webp",
    alt: "Ahmedabad Events 26",
  },
];
const delhiImages: GalleryImageProps[] = [
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent.webp",
    alt: "Delhi Events",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent1.webp",
    alt: "Delhi Events 1",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent2.webp",
    alt: "Delhi Events 2",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent3.webp",
    alt: "Delhi Events 3",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent4.webp",
    alt: "Delhi Events 4",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent5.webp",
    alt: "Delhi Events 5",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent6.webp",
    alt: "Delhi Events 6",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent7.webp",
    alt: "Delhi Events 7",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent8.webp",
    alt: "Delhi Events 8",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent9.webp",
    alt: "Delhi Events 9",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent10.webp",
    alt: "Delhi Events 10",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent11.webp",
    alt: "Delhi Events 11",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent12.webp",
    alt: "Delhi Events 12",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent13.webp",
    alt: "Delhi Events 13",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent14.webp",
    alt: "Delhi Events 14",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent15.webp",
    alt: "Delhi Events 15",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent16.webp",
    alt: "Delhi Events 16",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent17.webp",
    alt: "Delhi Events 17",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent18.webp",
    alt: "Delhi Events 18",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent19.webp",
    alt: "Delhi Events 19",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent20.webp",
    alt: "Delhi Events 20",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent21.webp",
    alt: "Delhi Events 21",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent22.webp",
    alt: "Delhi Events 22",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent23.webp",
    alt: "Delhi Events 23",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent24.webp",
    alt: "Delhi Events 24",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent25.webp",
    alt: "Delhi Events 25",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent26.webp",
    alt: "Delhi Events 26",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent27.webp",
    alt: "Delhi Events 27",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent28.webp",
    alt: "Delhi Events 28",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent29.webp",
    alt: "Delhi Events 29",
  },
  {
    src: "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent30.webp",
    alt: "Delhi Events 30",
  },
];

const BansalGallery: React.FC<{ images: GalleryImageProps[] }> = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: function (i: number) {
      return (
        <div className="w-3 h-3 mx-1 rounded-full bg-purple-300 hover:bg-purple-500 transition-colors duration-300" />
      );
    },
  };

  return (
    <Slider {...settings}>
      <div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8 text-purple-800"
        >
          Ahmedabad Events
        </motion.h3>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {ahmedabadEvents.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-purple-900 bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
      <div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8 text-green-700"
        >
          Delhi Events
        </motion.h3>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {delhiImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-green-900 bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </Slider>
  );
};
const CustomArrow = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full transition-all duration-300 ${
      direction === "prev" ? "left-4" : "right-4"
    }`}
  >
    {direction === "prev" ? (
      <FaChevronLeft size={20} />
    ) : (
      <FaChevronRight size={20} />
    )}
  </button>
);

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  const banners = [
    {
      image: "https://32watts.com/iamrakeshbansal/events/event3.webp",
      title: "Elevate Your Trading Experience",
      subtitle: "Join our exclusive events featuring industry experts",
    },
    {
      image: "https://32watts.com/iamrakeshbansal/events/event9.webp",
      title: "Ahmedabad Events",
      subtitle: "Learn from the best in the industry",
    },
    {
      image: "https://32watts.com/iamrakeshbansal/events/event15.webp",
      title: "Delhi Events",
      subtitle: "Expand your connections and opportunities",
    },
  ];

  return (
    <div className="relative h-[60vh] lg:h-[80vh] min-h-[300px] max-h-[500px] overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative h-[60vh] lg:h-[80vh] min-h-[300px] max-h-[500px]"
          >
            <Image
              src={banner.image}
              alt={`Event banner ${index + 1}`}
              fill
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-4"
              >
                {banner.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-center mb-4 md:mb-6 max-w-2xl"
              >
                {banner.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdBP02jUowk_c0cgx2cEpt-8fup2hhfnIYiAx3L6Qkk2D0cNA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md transition duration-300 shadow-md inline-block"
                >
                  Register Now
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default function EventsPage() {
  const recentEvents: EventCardProps[] = [
    {
      title: "Ahmedabad Events",
      date: "June 15, 2023",
      location: "Ahmedabad, India",
      attendees: 150,
      image:
        "https://32watts.com/iamrakeshbansal/events/ahmedabad/AhmedabadEvent.webp",
    },
    {
      title: "Delhi Events",
      date: "July 2, 2023",
      location: "Delhi, India",
      attendees: 200,
      image:
        "https://32watts.com/iamrakeshbansal/events/delhi/DelhiEvent3.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />

      {/* Recent Events Section */}
      <AnimatedSection>
        <section className="py-16 px-4 md:px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            Recent Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Professional Event Gallery Section */}
      <AnimatedSection>
        <section id="gallery" className="py-16 px-4 md:px-8 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-800">
            Event Gallery
          </h2>
          <BansalGallery images={ahmedabadEvents} />
        </section>
      </AnimatedSection>

      {/* Video Showcase Section */}
      <AnimatedSection>
        <section id="videos" className="py-16 px-4 md:px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
            Event Highlights
          </h2>
          <div className="container">
            <VideoSlider />
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
