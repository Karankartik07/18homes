"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function ContactSection() {
  return (
    <section className="w-full max-w-[1720px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SECTION */}
        <div className="bg-[#14253e] text-white px-8 md:px-20 py-8 flex flex-col justify-center">
          <h2 className="text-[48px] font-light mb-2">Your Requirement</h2>
          <div className="w-[120px] h-[4px] bg-[#28E7F7] mb-6"></div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border-2 border-white bg-transparent px-5 py-3 rounded-md text-lg outline-none "
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border-2 border-white bg-transparent px-5 py-3 rounded-md text-lg outline-none "
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border-2 border-white bg-transparent px-5 py-3 rounded-md text-lg outline-none "
            />

            <div className="relative">
              <select className="w-full border-2 border-white bg-transparent px-5 py-3 rounded-md text-lg outline-none appearance-none text-[gray] ">
                <option className="text-[gray]">Select Event for</option>
                <option className="text-black">Birthday</option>
                <option className="text-black">Corporate Events</option>
                <option className="text-black">Cultural Events</option>
              </select>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                <IoIosArrowDown />
              </span>
            </div>

            <textarea
              placeholder="Enter Your Message"
              rows="4"
              className="w-full border-2 border-white bg-transparent px-5 py-4 rounded-md text-lg outline-none resize-none "
            />

            <button
              type="submit"
              className="bg-[#28E7F7] text-black px-10 py-2.5 rounded-full text-xl font-semibold hover:opacity-90 transition w-fit"
            >
              Submit
            </button>

          </form>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="bg-[#14253e] relative hidden lg:block overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-[5px] z-30"></div>

          <div className="absolute inset-0 origin-top-left rotate-[-4deg]">
            <Image
              src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1764948504/modern-apartment-architecture1_zcamv1.jpg"
              alt="Contact Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 backdrop-blur-[1px] z-20"></div>
        </div>

      </div>
    </section>
  );
}
