export default function Carecature() {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full group">
        <video
          src="/images/carecature.mp4"
          className="object-contain w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
