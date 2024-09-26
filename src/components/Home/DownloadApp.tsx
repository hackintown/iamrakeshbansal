import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-12 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-900 via-purple-900 to-green-900">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="app-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20h40v1H0zM20 0v40h1V0z"
                fill="rgba(255,255,255,0.05)"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#app-pattern)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              id="app-radial"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="50%" r="50%" fill="url(#app-radial)" />
        </svg>
      </div>
      <div className="px-4 conatiner w-full sm:px-6 lg:px-8 relative z-10">
        <div className="2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                Elevate Your Trading with Our Mobile App
              </h2>
              <p className="mt-4 text-xs sm:text-sm lg:text-base text-gray-300">
                Access real-time market data, execute trades on-the-go, and
                receive personalized mentoring notifications. Our mobile app is
                designed to enhance your trading performance and keep you
                connected to the markets 24/7.
              </p>

              <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                <Link href="#" className="flex" role="button">
                  <Image
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="w-auto h-14"
                  />
                </Link>

                <Link href="#" className="flex" role="button">
                  <Image
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="w-auto h-14"
                  />
                </Link>
              </div>
            </div>

            <div className="relative px-12">
              <div
                className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2  text-green-400 
              w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
              >
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
              </div>
              <Image
                src="/images/download-app.webp"
                alt="Trading App Mockup"
                width={500}
                height={500}
                className="relative w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
