import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  className: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-[#D9D9D9] h-full flex flex-col rounded-2xl shadow-md overflow-hidden",
        className
      )}
    >
      <div className="bg-[#BABABA] relative h-[200px] lg:h-[250px] rounded-b-xl">
        <div className="absolute bg-primary rounded-full w-14 h-14 flex items-center justify-center left-6 -bottom-6 z-20">
          <Image
            src="/images/testimonial-icon.webp"
            width={28}
            height={28}
            alt="Testimonial icon"
            className="w-7 h-7"
          />
        </div>
      </div>
      <div className="px-4 md:px-8 py-6 mt-7 md:mt-10 flex flex-col flex-grow">
        <p className="text-foreground font-light leading-5 text-xs mb-4 flex-grow">
          {quote}
        </p>

        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-primary font-semibold text-xs">{name}</h3>
            <p className="text-muted-foreground text-xs font-normal">{title}</p>
          </div>

          <Button
            variant="outline"
            className={cn(
              "bg-primary text-primary-foreground hover:bg-primary/90 border-none rounded-full text-xs whitespace-nowrap",
              "transition-colors duration-200"
            )}
          >
            Continue Reading
          </Button>
        </div>
      </div>
    </div>
  );
}
