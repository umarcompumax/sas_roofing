import { FiExternalLink, FiHeart, FiFolder, FiShare2 } from "react-icons/fi";

interface Slide {
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function BlogSlideCard({ slide }: { slide: Slide }) {
  const [day, month] = slide.date.split(" ");

  return (
    <div className="relative w-full h-[400px] rounded-sm shadow-md overflow-hidden flex flex-col">
      {/* Image + Overlay */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />

        {/* Date Badge */}
        <div className="absolute top-3 right-3 z-20 bg-[#ef4423] text-white text-center font-bold px-2 py-1 leading-tight rounded-sm">
          <div className="text-[24px] sm:text-[24px] font-extrabold leading-none">
            {day}
          </div>
          <div className="text-[14px] sm:text-[13px] font-semibold uppercase leading-none">
            {month}
          </div>
        </div>

        {/* Title + Category */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-2 items-start text-left">
          <div className="text-[#ef4423] text-xs sm:text-sm md:text-base xl:text-base font-semibold uppercase tracking-wide flex items-center gap-2">
            <FiFolder className="text-[#ef4423] w-4 h-4" />
            {slide.description}
          </div>
          <div className="text-white font-bold text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl leading-tight drop-shadow-md">
            {slide.title}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-white px-4 py-3 flex justify-between items-center text-sm z-20 border-t border-gray-200">
        <a
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-bold text-[#003366] text-[13px] sm:text-[15px]"
        >
          <FiExternalLink className="w-4 h-4" />
          MORE DETAILS
        </a>
        <div className="flex items-center gap-4 text-gray-500">
          {/* Heart Count */}
          <div className="group flex items-center gap-1 cursor-pointer hover:text-[#e63a27] transition-colors duration-200">
            <FiHeart className="w-4 h-4 group-hover:text-[#e63a27]" />
            <span className="group-hover:text-[#e63a27]">10</span>
          </div>
          <FiShare2 className="w-4 h-4 cursor-pointer hover:text-[#ef4423] transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
}
