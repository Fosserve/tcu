import { CameraIcon } from '@heroicons/react/20/solid'
import image2 from "../../public/socialimage2.jpeg"


import image from "../../public/socialImapct.jpeg";

export default function SocialImpact() {
  return (
    <div className="bg-white">
      <main>
        <div>
          <div className="relative mt-16 bg-[#fdfcfc]">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#fcf5f4]" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    alt="People working on laptops"
                    src="https://img.freepik.com/free-photo/environment-volunteer-concept-with-group-persons_23-2147807226.jpg?t=st=1741174632~exp=1741178232~hmac=11720821cb15b9e5ef6aa720a3dbe6c8cf1d3ad7d408529fa79c116224c76725&w=1380"
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#b0d383] mix-blend-multiply" />
                </div>
                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Social Transformation Through
                    </span>
                    <span className="block text-[#1e5146]">TCU</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-[#f2fbf8] sm:max-w-3xl">
                    Beyond economic benefits, TCU plays a transformative role in
                    shaping a more inclusive and equitable society. By providing
                    education and empowerment opportunities for girls, TCU
                    challenges traditional gender norms, reduces early
                    marriages, and promotes healthier communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fcf5f4] h-[200px]"></div>
        </div>

    <div className="overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-[#d76a55]">Case Study</h2>
            <h3 className="mt-2 text-3xl/8 font-bold tracking-tight text-gray-900 sm:text-4xl">Social Impact</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              fill="none"
              width={404}
              height={384}
              viewBox="0 0 404 384"
              aria-hidden="true"
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
            >
              <defs>
                <pattern
                  x={0}
                  y={0}
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-[#cfe5b1]" />
                </pattern>
              </defs>
              <rect fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" width={404} height={384} />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <img
                  alt="Whitney leaning against a railing on a downtown street"
                  src={image2.src}
                  width={1184}
                  height={1376}
                  className="aspect-12/7 w-full rounded-lg object-cover shadow-lg lg:aspect-auto"
                />
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                  <span className="ml-2">Students studying</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base/7 text-gray-900">
              <p className="text-lg/7">
              TCU serves as a catalyst for challenging and transforming deeply rooted gender norms and stereotypes. In many communities, girls are viewed as financial burdens and are often married off at a young age to partners who lack the capacity to provide stability. This results in cycles of economic hardship and gender inequality.
              </p>
              <p className="mt-5">
              TCU actively combats these outdated perspectives by providing girls with access to education, leadership training, and life skills. 
              </p>
              <p className="mt-5">
              Studies show that educated girls are six times less likely to be married before the age of 18 compared to those with little or no education. Access to education significantly reduces child marriage rates, as young women are more likely to prioritize career aspirations and personal development over early marriage.
              </p>
              <p className="mt-5">
              Furthermore, education plays a crucial role in reducing domestic violence and gender-based discrimination. Women who receive higher education are more likely to advocate for their rights.
              </p>
              <ul role="list" className="mt-5 list-disc space-y-2 pl-6 marker:text-gray-300">
                <li className="pl-2">Challenging Gender Norms and Stereotypes</li>
                <li className="pl-2">Reducing Early Marriage and Gender-Based Violence</li>
                <li className="pl-2">Promoting Health, Sanitation, and Reproductive Rights</li>
              </ul>
              <p className="mt-5">
              Education at TCU goes beyond academics—it promotes awareness of essential health, sanitation, and reproductive rights. Women with higher education levels are more likely to make informed health decisions, leading to better maternal and child health outcomes. Access to reproductive health education empowers girls to make choices about family planning, reducing unplanned pregnancies and improving overall well-being.
              </p>
              <h3 className="mt-8 text-xl/8 font-semibold text-gray-900">Support for Abused and Neglected Girls</h3>
              <p className="mt-3">
              TCU also plays a vital role in supporting girls who have faced abuse, neglect, or other social hardships. The institution provides access to counseling, mentorship programs, and support networks that help young women recover from trauma and rebuild their confidence.
              </p>
              <p className="mt-5">
              Through initiatives focused on mental health and personal development, TCU ensures that every girl, regardless of her past experiences, has the opportunity to thrive in a safe and supportive environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      </main>
    </div>
  );
}
