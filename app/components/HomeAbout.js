"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function HomeAbout() {
    const points = [
        "Bridging Hearts Through Melodies",
        "Fostering a Legacy of Creativity",
        "Innovating Musical Expressions",
        "Empowering Passionate Musicians",
    ];

    return (
        <section className="w-full bg-[#eef6f8] max-w-[1720px] mx-auto lg:py-20 py-10">
            <div className=" mx-auto lg:pl-28 lg:pr-0 grid grid-cols-1 lg:grid-cols-2 gap-3 items-center px-6 pr-6">


                {/* LEFT SIDE */}
                <div>
                    <h3 className="text-[42px] font-light text-black mb-2"
                     style={{ fontFamily: "'Dancing Script', cursive" }}
                    >About</h3>

                    <h2 className="text-[46px]  font-bold text-black leading-tight mb-4">
                       18HOMES - Your Dream Home
                    </h2>

                    <p className="text-[16px] text-[#101010] leading-[1.8] max-w-[650px] mb-6">
                        DJ Harmony Beats a skilled based in Ghaziabad, Well known for
                        Professional DJing and Music. DJ Harmony Beats was started in the
                        year 2014 and has successfully completed more than 10 years in the
                        art of playing. DJ Mohit Monga is the founder and CEO of DJ Harmony
                        Beats. DJ Mohit Monga has always made sure of keeping the DJ Harmony
                        updated with latest technologies, equipment, DJ Console and social
                        connect with other top level and professional DJs of the industry.
                    </p>

                    {/* CHECKMARKS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {points.map((text, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <IoMdCheckmarkCircleOutline className="text-[#00c777] text-[22px] " />
                                <span className="text-[17px] font-medium text-[#101010]">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="w-full ">
                    <div className="relative w-full h-[430px] rounded-sm overflow-hidden shadow-lg">
                        <Image
                            src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1764928067/cozy-bedroom-with-comfortable-furniture-modern-apartment_181624-58069_bvrvnz.avif"
                            alt="Studio Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
