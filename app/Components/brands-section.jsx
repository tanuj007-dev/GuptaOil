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
    <section className="w-full bg-[#F3F3F3] py-10">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-10">

          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[120px] h-[100px] opacity-70 hover:opacity-100 transition duration-300"
            >
              <img
                src={logo}
                alt="client logo"
                className="max-h-[60px] w-auto object-contain grayscale"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}