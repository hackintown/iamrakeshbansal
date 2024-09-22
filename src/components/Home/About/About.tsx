import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="p-4 md:p-8 text-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-300">
              Let's Dream Big Together
            </h1>
            <p className="mb-4">
              Dr. Rakesh Bansal's aim is to revolutionize stock market research
              services by bringing technology assisted analysis accessible to
              retail investors.
            </p>
            <p>
              With your support, it is our endeavour to build India's largest
              stock research ecosystem.
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

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-300">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
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
              <p>
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
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Dr. Rakesh Bansal"
                width={300}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Button className="mb-4 sm:mb-0 bg-cyan-500 hover:bg-cyan-600">
            Enroll Now
          </Button>
          <Button
            variant="outline"
            className="border-gray-400 text-gray-400 hover:bg-gray-700"
          >
            Book a free Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
