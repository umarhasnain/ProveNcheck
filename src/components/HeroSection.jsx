import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover-z-10 opacity-25"
            >
                <source src="/assets/imgs/car-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 -z-10" />

            {/* Content */}
            <div className="absolute top-[39%] text-white left-1/2 transform -translate-x-1/2 max-w-[970px] w-full text-center z-[1]">
                <p className="text-sky-400 text-lg font-semibold">
                    Comprehensive Vehicle Reports
                </p>
                <h1 className="w-[50%] text-white text-3xl md:text-5xl md:w-full font-bold leading-tight my-4">
                    Get the perfect report or full vehicle history at Vehicles Crafter!
                </h1>
                <p className="mb-6 text-lg ">
                    Dealerships offer new and used cars, trucks, bikes & boats with full
                    history reports or key details.
                </p>


                {/* Trustpilot Badge */}
                <div className="mt-6 text-sm">
                    <button className="bg-sky-400 hover:bg-sky-500 transition px-6 py-3 rounded font-semibold">
                        Find Your Report
                    </button>
                    <div className="flex flex-col">
                        <div className="flex gap-5 flex-col">
                            <Image
                                src="/assets/imgs/trustpilot-logo2.png"
                                alt="Trustpilot"
                                width={100}
                                height={20}
                            />
                            <Image
                                src="/assets/imgs/trustpilot-star.png"
                                alt="Trustpilot"
                                width={100}
                                height={20}
                            />
                          <p>Trust Rating <strong>4.2</strong> | 1268 Reviews</p>
                        
                        </div>
                        <div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
