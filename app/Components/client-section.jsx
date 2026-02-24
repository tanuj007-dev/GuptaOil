"use client";

export default function ClientLogosSection() {
  const logos = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
    "/images/client6.png",
  ];

  return (
    <section className="w-full bg-[#F3F3F3] py-10 md:py-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="relative w-full overflow-hidden">
          
          {/* Slider Track */}
          <div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
            
            {/* Original Logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo1-${index}`}
                className="flex items-center justify-center w-[120px] h-[100px] flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="client logo"
                  className="max-h-full w-auto object-contain transition duration-300 hover:scale-105"
                  style={{
                    filter: "brightness(0) saturate(100%)"
                  }}
                />
              </div>
            ))}

            {/* Duplicate Logos (for seamless infinite loop) */}
            {logos.map((logo, index) => (
              <div
                key={`logo2-${index}`}
                className="flex items-center justify-center w-[120px] h-[100px] flex-shrink-0"
              >
                <img
                  src={logo}
                  alt="client logo"
                  className="max-h-full w-auto object-contain transition duration-300 hover:scale-105"
                  style={{
                    filter: "brightness(0) saturate(100%)"
                  }}
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .animate-scroll {
    animation: scroll 12s linear infinite;
  }
`}</style>
    </section>
  );
}