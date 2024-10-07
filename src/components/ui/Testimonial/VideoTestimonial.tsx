// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const videoTestimonials = [
//   {
//     id: 1,
//     src: "https://www.iamrakeshbansal.com/wp-content/uploads/2024/01/RKB-23DEC-MEDIABYTES-05.mp4",
//     name: "John Smith",
//     role: "Forex Trader",
//     quote:
//       "This program transformed my trading strategy. I'm now consistently profitable.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     src: "https://www.iamrakeshbansal.com/wp-content/uploads/2024/01/RKB-23DEC-MEDIABYTES-02.mp4",
//     name: "Emily Johnson",
//     role: "Stock Market Analyst",
//     quote:
//       "The insights I gained have been invaluable. My portfolio performance has skyrocketed.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     src: "https://www.iamrakeshbansal.com/wp-content/uploads/2024/01/RKB-23DEC-MEDIABYTES-04.mp4",
//     name: "Michael Chen",
//     role: "Cryptocurrency Trader",
//     quote:
//       "The mentorship provided clear strategies for navigating the volatile crypto market.",
//     rating: 4,
//   },
//   {
//     id: 4,
//     src: "https://www.iamrakeshbansal.com/wp-content/uploads/2024/01/RKB-23DEC-MEDIABYTE-JASWINDER.mp4",
//     name: "Sarah Thompson",
//     role: "Options Trader",
//     quote:
//       "I've learned to manage risk effectively and maximize my returns. Highly recommended!",
//     rating: 5,
//   },
//   {
//     id: 5,
//     src: "https://www.iamrakeshbansal.com/wp-content/uploads/2024/01/RKB-23DEC-MEDIABYTES-06.mp4",
//     name: "David Rodriguez",
//     role: "Futures Trader",
//     quote:
//       "The program's approach to technical analysis has been eye-opening. My trades are more precise now.",
//     rating: 4,
//   },
//   {
//     id: 6,
//     src: "https://www.iamrakeshbansal.com/wp-content/uploads/2024/01/RKB-23DEC-MEDIABYTES-10.mp4",
//     name: "Lisa Wang",
//     role: "Swing Trader",
//     quote:
//       "The mentorship helped me develop a disciplined approach to trading. My results speak for themselves.",
//     rating: 5,
//   },
// ];

// const imageTestimonials = [
//   {
//     id: 1,
//     src: "/hero/banner-img3.webp",
//     name: "Emma Wilson",
//     role: "Forex Trader",
//     quote: "This program has been a game-changer for my forex trading career.",
//     review:
//       "The in-depth analysis of currency pairs and macroeconomic factors has given me a significant edge in the forex market. I've seen a 40% increase in my monthly returns since completing the program.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     src: "/hero/banner-img3.webp",
//     name: "James Anderson",
//     role: "Stock Market Investor",
//     quote: "The mentorship provided invaluable insights into value investing.",
//     review:
//       "I've learned to identify undervalued stocks with high growth potential. My portfolio has outperformed the S&P 500 by 15% since I implemented the strategies taught in this program.",
//     rating: 5,
//   },
//   {
//     id: 3,
//     src: "/hero/banner-img3.webp",
//     name: "Sophia Martinez",
//     role: "Cryptocurrency Trader",
//     quote:
//       "This mentorship demystified the complex world of cryptocurrency trading.",
//     review:
//       "I now have a solid understanding of blockchain technology and its impact on different cryptocurrencies. My trading decisions are more informed, and I've achieved consistent profits even in volatile market conditions.",
//     rating: 4,
//   },
//   {
//     id: 4,
//     src: "/hero/banner-img3.webp",
//     name: "William Chang",
//     role: "Options Strategist",
//     quote: "The program's approach to options trading is unparalleled.",
//     review:
//       "I've mastered complex options strategies that have significantly reduced my portfolio risk while increasing my potential returns. The mentorship has paid for itself many times over.",
//     rating: 5,
//   },
//   {
//     id: 5,
//     src: "/hero/banner-img3.webp",
//     name: "Olivia Brown",
//     role: "Futures Trader",
//     quote: "This mentorship has revolutionized my approach to futures trading.",
//     review:
//       "The program's focus on risk management and market analysis has been crucial. I've learned to navigate the futures market with confidence, and my trading results have improved dramatically.",
//     rating: 4,
//   },
//   {
//     id: 6,
//     src: "/hero/banner-img3.webp",
//     name: "Ethan Davis",
//     role: "Swing Trader",
//     quote: "The mentorship program has perfected my swing trading strategy.",
//     review:
//       "I've learned to identify optimal entry and exit points for multi-day trades. My average holding period has decreased, while my per-trade profitability has increased by 30%.",
//     rating: 5,
//   },
// ];

// export default function AdvancedTestimonials() {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const videoSliderRef = useRef<Slider>(null);
//   const imageSliderRef = useRef<Slider>(null);

//   const videoSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0",
//     focusOnSelect: true,
//     beforeChange: (current: number, next: number) => setCurrentVideoIndex(next),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const imageSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     beforeChange: (current: number, next: number) => setCurrentImageIndex(next),
//   };

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//       setIsPlaying(false);
//     }
//   }, [currentVideoIndex]);

//   return (
//     <section className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
//           Client Success Stories
//         </h2>

//         {/* Video Testimonials */}
//         <div className="mb-24">
//           <Slider ref={videoSliderRef} {...videoSettings}>
//             {videoTestimonials.map((testimonial, index) => (
//               <div key={testimonial.id} className="px-2">
//                 <div
//                   className={`relative aspect-video rounded-xl overflow-hidden shadow-lg ${
//                     index === currentVideoIndex ? "ring-2 ring-gray-300" : ""
//                   }`}
//                 >
//                   <video
//                     ref={index === currentVideoIndex ? videoRef : null}
//                     src={testimonial.src}
//                     className="w-full h-full object-cover"
//                     loop
//                     playsInline
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     {index === currentVideoIndex && (
//                       <button
//                         onClick={togglePlay}
//                         className="bg-white bg-opacity-50 text-gray-800 p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                       >
//                         {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//                       </button>
//                     )}
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <p className="font-semibold text-sm sm:text-base mb-1 text-white">
//                           {testimonial.name}
//                         </p>
//                         <p className="text-secondary-foreground mb-1 text-sm">
//                           {testimonial.role}
//                         </p>
//                       </div>
//                       <div className="flex items-center mb-2">
//                         {Array.from({ length: 5 }).map((_, i) => (
//                           <Star
//                             key={i}
//                             size={16}
//                             className={
//                               i < testimonial.rating
//                                 ? "text-yellow-400 fill-yellow-400"
//                                 : "text-gray-400"
//                             }
//                           />
//                         ))}
//                       </div>
//                     </div>

//                     <p className="text-xs  italic text-white">
//                       "{testimonial.quote}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <div className="flex justify-center mt-6 space-x-4">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => videoSliderRef.current?.slickPrev()}
//               className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
//             >
//               <ChevronLeft size={24} />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => videoSliderRef.current?.slickNext()}
//               className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
//             >
//               <ChevronRight size={24} />
//             </Button>
//           </div>
//         </div>

//         {/* Image Testimonials */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="relative border border-border rounded-md">
//             <Slider ref={imageSliderRef} {...imageSettings}>
//               {imageTestimonials.map((testimonial) => (
//                 <div key={testimonial.id}>
//                   <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
//                     <Image
//                       src={testimonial.src}
//                       alt={testimonial.name}
//                       width={500}
//                       height={500}
//                       className="object-cover w-full h-auto"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-50">
//                       <p className="font-bold text-xl mb-1 text-white">
//                         {testimonial.name}
//                       </p>
//                       <p className="text-gray-300 mb-2">{testimonial.role}</p>
//                       <div className="flex items-center">
//                         {Array.from({ length: 5 }).map((_, i) => (
//                           <Star
//                             key={i}
//                             size={16}
//                             className={
//                               i < testimonial.rating
//                                 ? "text-yellow-400 fill-yellow-400"
//                                 : "text-gray-400"
//                             }
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//           <div>
//             <blockquote className="text-2xl sm:text-3xl font-medium mb-6 italic text-gray-800">
//               "{imageTestimonials[currentImageIndex].quote}"
//             </blockquote>
//             <p className="mb-6 text-gray-600">
//               {imageTestimonials[currentImageIndex].review}
//             </p>
//             <div className="flex items-center">
//               <div className="h-12 w-1 bg-gray-300 mr-4"></div>
//               <div>
//                 <p className="font-semibold text-lg">
//                   {imageTestimonials[currentImageIndex].name}
//                 </p>
//                 <p className="text-gray-600">
//                   {imageTestimonials[currentImageIndex].role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center mt-8 space-x-4">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => imageSliderRef.current?.slickPrev()}
//             className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
//           >
//             <ChevronLeft size={24} />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => imageSliderRef.current?.slickNext()}
//             className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
//           >
//             <ChevronRight size={24} />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
