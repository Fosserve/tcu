

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#fef9f8]">
      <div aria-hidden="true" className="hidden sm:absolute sm:inset-y-0 sm:block sm:size-full">
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            fill="none"
            width={404}
            height={784}
            viewBox="0 0 404 784"
            className="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2"
          >
            <defs>
              <pattern
                x={0}
                y={0}
                id="4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa"
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
              </pattern>
            </defs>
            <rect fill="url(#4522f7d5-8e8c-43ee-89bd-ad34cbfb07fa)" width={404} height={784} />
          </svg>
          <svg
            fill="none"
            width={404}
            height={784}
            viewBox="0 0 404 784"
            className="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
          >
            <defs>
              <pattern
                x={0}
                y={0}
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
              </pattern>
            </defs>
            <rect fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" width={404} height={784} />
          </svg>
        </div>
      </div>
      <div className="relative  flex justify-center items-center  pt-6 pb-16 h-[calc(100vh-120px)] sm:pb-24">
        <main className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Empowering Women, </span>{' '}
              <span className="block text-[#d76a55] xl:inline"> Transforming Lives</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-gray-500 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
            Talitha Cumi Unnati (TCU) is a beacon of hope for young women and girls, especially those marginalized, abused, or neglected. Established in 2019 under the Diocese of Vijayawada, TCU is committed to fostering dignity, self-reliance, and leadership through education, mentorship, and holistic development.
            </p>
            <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow-sm">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#d76a55] px-8 py-3 text-base font-medium text-white hover:bg-[#c4543e] md:px-10 md:py-4 md:text-lg"
                >
                  Join the Movement
                </a>
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center px-8 py-3 text-base font-medium text-[#97c262] md:px-10 md:py-4 md:text-lg"
                >
                  Transform a Life Today
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
