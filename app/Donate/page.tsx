import Image from 'next/image'
import React from 'react'
import image2 from "../../public/students.jpg"



const page = () => {
  return (
   <main>
    <section className="relative h-[700px] flex items-center justify-center text-center">
            <div className="absolute overflow-hidden inset-0 z-0">
              <Image
                src="https://img.freepik.com/free-photo/elderly-men-are-exposed-rainwater-dry-weather-global-warming_1150-16274.jpg?t=st=1741758902~exp=1741762502~hmac=0056bc9e4451c265ee1974a4b74a555bd7b80a1948d99315a9b9d01ef01c4ce5&w=1380"
                alt="Hands joined together in unity"
                fill
                className="object-cover brightness-50 animate-scrollBackground"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 container mx-auto px-4 text-white">
              <h1 className="text-5xl font-bold mb-4 tracking-tight sm:text-6xl md:text-7xl">Donate A <span className='text-[#d76a55]'>Life</span> </h1>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
              Our program partially covers higher education fees, as well as providing necessary academic materials, and weekly and monthly mentorship sessions to ensure they can reach their full potential.
              </p>
            </div>
          </section>

          <section className='mt-16 max-w-7xl px-8 mx-auto'>
            <h1 className='text-4xl font-bold mb-4 tracking-tight sm:text-5xl md:text-6xl'>Donate Today</h1>
            <p className='text-base/7 text-gray-700'>
            Our program partially covers higher education fees, as well as providing necessary academic materials, and weekly and monthly mentorship sessions to ensure they can reach their full potential. 
            </p>
            <p className='text-base/7 text-gray-700 mt-4'>
            TCU works carefully to ensure girls entering our scholarship program are highly motivated and committed to their studies, with a hunger for learning and desire to build a better future for themselves. 
            </p>
            <p className='text-base/10  text-[#43aa8d] mt-4'>Will you prayerfully consider supporting our efforts to empower these young women?</p>
            <button className='px-8 py-2 rounded-md mt-4 bg-[#d76a55] hover:bg-[#c4543e] text-white'>DONATE</button>
          </section>

          <section className="w-full px-8 max-w-7xl mx-auto  mt-16 mb-32">
      <div className="flex relative flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <Image
          src={image2.src}
                alt="Kingfisher bird perched on a branch"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="w-full relative left-0 mt-4 top-0 md:top-[80px] md:left-[-80px] rounded-md md:w-2/3 bg-[#d4f3e7] border border-[#247d67] p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
            <span className="text-[#333333]">Your Support Will </span>
            <span className="text-[#43aa8d]">Help To:</span>
          </h2>

          <ul className="space-y-6">
            {supportBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1">
                  <ArrowIcon />
                </div>
                <span className="text-gray-600 text-base/7">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>    
   </main>
  )
}

export default page


const supportBenefits = [
  "Educational Support",
  "Community Engagement Events",
  "Flood Relief Efforts (2024)",
  "Support for Families",
  "Community Development",
  "Outreach Programs",
]

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#d4f3e7"
        stroke="#43aa8d"
        strokeWidth="1.5"
      />
      <path d="M8 12L12 16L16 12" stroke="#43aa8d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V16" stroke="#43aa8d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
