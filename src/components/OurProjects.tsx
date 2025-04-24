import GallerySection from "./GallerySection";

const OurProjects = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-[1px] bg-red-600" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-red-600 uppercase whitespace-nowrap">
                Our Projects
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#003366] leading-snug">
              Recently Completed Works
            </h1>
          </div>

          <button className="relative group self-start md:self-auto">
            <div className="border-4 border-[#003366] px-2 py-2">
              <div className="border border-red-600 px-5 py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-red-600 uppercase whitespace-nowrap hover-button">
                All Projects
              </div>
            </div>
          </button>
        </section>
      </div>
      <GallerySection />
    </main>
  );
};

export default OurProjects;
