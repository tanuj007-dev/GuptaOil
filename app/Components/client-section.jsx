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
    <section className="w-full bg-[#F3F3F3] py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* MOBILE: grid-cols-2 (2 logos per row) 
            DESKTOP (md+): flex-nowrap (Your original row layout)
        */}
        <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:flex md:flex-nowrap md:items-center md:justify-between md:gap-10">
          
          {logos.map((logo, index) => (
            <div
              key={index}
              /* Increased height on mobile (h-[120px]) vs your original desktop height */
              className="flex items-center justify-center w-full md:w-[120px] h-[120px] md:h-[100px]"
            >
              <img
                src={logo}
                alt="client logo"
                /* max-h-full ensures it fills the new larger mobile container */
                className="max-h-full w-auto object-contain transition duration-300 hover:scale-105"
                style={{
                  filter: "brightness(0) saturate(100%)"
                }}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}