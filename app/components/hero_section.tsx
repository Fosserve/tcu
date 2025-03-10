import TCU1 from "../../public/TCU images/TCU1.jpg"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-cover bg-center" 
    >
       <img 
    src={TCU1.src} 
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover  animate-scrollBackground"
  />
       <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative  flex justify-center items-center  pt-6 pb-16 h-[calc(100vh-120px)] sm:pb-24">
        <main className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block xl:inline text-white">Talitha Cumi Unnati , </span>{' '}
              <span className="block text-[#d76a55] xl:inline"> Young Girl Rise</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
            Talitha Cumi Unnati (TCU) is a beacon of hope for young women and girls, especially those marginalized, abused, or neglected. Established in 2019 under the Diocese of Vijayawada, TCU is committed to fostering dignity, self-reliance, and leadership through education, mentorship, and holistic development.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
