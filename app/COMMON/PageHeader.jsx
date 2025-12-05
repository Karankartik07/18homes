"use client";
import Image from "next/image";

export default function PageHeader({ title }) {
  return (
    <section className="relative w-full max-w-[1720px] mx-auto h-[380px] md:h-[550px] flex items-center justify-center overflow-hidden bg-black">

      <Image
        src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1764948504/modern-apartment-architecture1_zcamv1.jpg"
        alt="Background"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white">
        <h1 className="text-[42px] md:text-[54px] font-bold ">
          {title}
        </h1>

        <p className="text-[18px] md:text-[20px] font-medium">
          Home / {title}
        </p>
      </div>
    </section>
  );
}
