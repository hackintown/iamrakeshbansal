import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="p-4 md:p-8 text-white">
      <div className="container px-4">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-300">
                Let's Dream Big Together
              </h1>
              <p className="mb-4 font-light leading-normal">
                Dr. Rakesh Bansal, a post-graduate in International Business
                Management, has been a prominent figure in the stock market
                since 1998 and is now a full-time trader and mentor. With over
                two decades of extensive experience, he specializes in technical
                analysis, wealth management, investment analysis, and portfolio
                management.
              </p>
              <p>
                As the founder of Rakesh Bansal Ventures, he is a
                SEBI-registered Research Analyst (INH100008984), offering
                high-quality market insights and educational resources to
                traders and investors across the country.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Heading",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ].map((text, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    index === 0
                      ? "bg-purple-600"
                      : index === 1
                      ? "bg-cyan-500"
                      : "bg-pink-500"
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute w-full h-[2px] bg-gray-300 my-8"></div>
        </div>

        <div className="py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cyan-300">
              About Us
            </h2>
            <Button
              variant="default"
              className="bg-transparent border border-[#71B4C5] px-8"
            >
              Book a Free Demo
            </Button>
          </div>
          <div className="mb-6">
            <p className="font-light leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              laoreet sapien vel malesuada auctor. Curabitur venenatis ex ac
              semper posuere. Integer consequat consequat sapien. Pellentesque
              sed dolor ut ex aliquam efficitur. Sed scelerisque odio et rutrum
              lacinia. In accumsan magna et dui tristique, eget congue dui
              egestas. Duis eget lectus felis. Integer diam diam, vulputate ac
              massa tempor, elementum vehicula risus. Suspendisse eget volutpat
              enim. Nullam mollis augue in orci scelerisque, ac congue libero
              blandit. In dignissim viverra eros, at luctus metus volutpat
              tempus. Nulla facilisis sodales metus at faucibus.
            </p>
          </div>

          <div className="relative">
            <div>
              <p className="font-light leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                laoreet sapien vel malesuada auctor. Curabitur venenatis ex ac
                semper posuere. Integer consequat consequat sapien. Pellentesque
                sed dolor ut ex aliquam efficitur. Sed scelerisque odio et
                rutrum lacinia. In accumsan magna et dui tristique, eget congue
                dui egestas. Duis eget lectus felis. Integer diam diam,
                vulputate ac massa tempor, elementum vehicula risus. Suspendisse
                eget volutpat enim. Nullam mollis augue in orci scelerisque, ac
                congue libero blandit. In dignissim viverra eros, at luctus
                metus volutpat tempus. Nulla facilisis sodales metus at
                faucibus.
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-[#71B4C5] mt-8 font-normal text-base"
              >
                Enroll Now
              </Button>
              <div className="absolute right-0 w-full">
                <Image
                  src="/images/avatar3.png"
                  alt="Dr. Rakesh Bansal"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover max-w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
