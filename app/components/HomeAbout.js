"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function HomeAbout() {
  const points = [
    "उत्तम लोकेशन में वेरिफाइड फ्लैट्स",
    "आपके बजट के अनुसार रेंट व सेल विकल्प",
 "मॉडर्न सुविधाओं वाले सुरक्षित अपार्टमेंट",
" पारदर्शी प्रक्रिया और 100% सहायता",
  ];

  return (
    <section className="w-full bg-[#eef6f8] max-w-[1720px] mx-auto lg:py-20 py-10">
      <div className=" mx-auto lg:pl-28 lg:pr-0 grid grid-cols-1 lg:grid-cols-2 gap-3 items-center px-6 pr-6">
        {/* LEFT SIDE */}
        <div>
          <h3
            className="text-[42px] font-light text-black mb-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            About
          </h3>

          <h2 className="text-[46px]  font-bold text-black leading-tight mb-4">
            18homes – आपका सपनों का घर
          </h2>

          <p className="text-[16px] text-[#101010] leading-[1.8] max-w-[650px] mb-6">
            18Homes दिल्ली-NCR में स्थित एक विश्वसनीय रियल एस्टेट प्लेटफ़ॉर्म
            है, जो किराये और खरीद दोनों के लिए प्रीमियम फ्लैट्स उपलब्ध कराता है।
            हमारा उद्देश्य हर बजट और हर परिवार के लिए एक सुरक्षित, आधुनिक और
            आरामदायक घर प्रदान करना है। पिछले कई वर्षों से हम हज़ारों ग्राहकों
            को सही लोकेशन, सही कीमत और सही सुविधा वाला घर दिलाने में मदद कर रहे
            हैं। हमारी टीम यह सुनिश्चित करती है कि आपको verified प्रॉपर्टी,
            ट्रांसपेरेंट डील और बेहतरीन सपोर्ट सर्विस मिले—ताकि घर खोजने की
            प्रक्रिया आसान, तेज़ और भरोसेमंद बन सके।
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
              src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1765125152/WhatsApp_Image_2025-12-07_at_9.01.16_PM_fuflru.jpg"
              alt="Studio Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
