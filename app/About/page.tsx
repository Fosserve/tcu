import Image from "next/image"
import bgImage from "../../public/Hands.jpg"
import img1 from "../../public/TCU images/TCU14.jpg"
import img2 from "../../public/TCU images/TCU9.jpg"
import img3 from "../../public/TCU images/TCU8.jpg"
import img4 from "../../public/TCU images/TCU7.jpg"
import img5 from "../../public/TCU images/TCU6.jpg"
import img6 from "../../public/TCU images/TCU5.jpg"
import img7 from "../../public/TCU images/TCU4.jpg"
import img8 from "../../public/TCU images/TCU3.jpg"
import img9 from "../../public/TCU images/TCU2.jpg"
import img10 from "../../public/TCU images/TCU15.jpg"

import image2 from "../../public/students.jpg"


const stats = [
  { label: "Study Grants Disbursed", value: "$120K" },
  { label: "Relief Kits Distributed", value: "10,000" },
  { label: "Community Events Organized", value: "50+" },
  { label: "Trees Planted", value: "2,000" },
];

export default function AboutPage() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const items = [
    {
      title: 'Addressing Marginalization',
      description:
        'TCU focuses on girls from marginalized and underserved communities, ensuring that the most vulnerable populations receive access to education.',
      image: img1.src,
    },
    {
      title: 'Holistic Development',
      description:
        'Beyond academics, TCU emphasizes life skills, leadership, and personal growth, preparing girls for real-world challenges.',
      image: img2.src,
    },
    {
      title: 'Community Transformation',
      description:
        'By educating girls, TCU fosters positive change within families and communities, promoting equality and sustainable development.',
      image: img3.src,
    },
    {
      title: 'Breaking Barriers',
      description:
        'TCU actively works to dismantle cultural, financial, and social obstacles that prevent girls from reaching their potential.',
      image: img4.src,
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="relative h-[700px] flex items-center justify-center text-center">
        <div className="absolute overflow-hidden inset-0 z-0">
          <Image
            src={bgImage.src}
            alt="Hands joined together in unity"
            fill
            className="object-cover brightness-50 animate-scrollBackground"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4 tracking-tight sm:text-6xl md:text-7xl">About Us</h1>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
            Empowering children across the world through education, healthcare, and genuine humanitarian support
          </p>
          <div className="flex flex-wrap gap-6 mt-3 justify-center">
            <button className="bg-[#d76a55] px-3 py-1.5 rounded-md hover:bg-[#e69383] text-black">DONATE NOW</button>
            <button  className=" border border-[#43aa8d] px-3 py-1.5 rounded-md  text-[#43aa8d] hover:bg-[#43aa8d] hover:text-white">
              OUR MISSION
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are & About Us Section */}
      <section className="py-16 container mx-auto px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who we are</h2>
            <p className="text-base/7 text-gray-700 mt-4">
            To empower adolescent girls and women in India, especially those from underserved 
communities, by expanding access to higher education and addressing systemic challenges 
such as gender inequality, poverty, traditional taboos, domestic violence, and learning 
disabilities.
            </p>
            <p className="text-base/7 text-gray-700 mt-4">
            To create a society where every young Catholic girl, regardless of her circumstances, has the 
opportunity to pursue higher education, realize her full potential, and contribute to reducing 
societal issues.
            </p>
            <div className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
              <p className="text-base/7 text-gray-700 mt-4">
              As a faith-based organization, TCU focuses on addressing the multifaceted needs of young 
              women and girls through programs that heal, empower, and inspire.  
              </p>
              <p className="text-gray-700 mt-4">
              Our key initiatives include:{" "}<span className="font-bold">Education, Mentorship, Skill Development, Faith Formation,  Acts of Mercy , Support for Abused and Trafficked Girls etc.. </span>
              </p>
            </div>
          </div>
          <div className="my-auto">
            <div className="relative h-[400px] ">
              <Image
                src={image2.src}
                alt="Woman helping with charity work"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* importance of tcu */}
      <section className="py-16 bg-[#d4f3e7] rounded-md max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[450px]">
              <Image
                src={img10.src}
                alt="Woman with charity supplies"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Importance of TCU for Girls </h2>
              <p className="text-base/7 text-gray-700 mb-6">
              Investing in education for girls fosters economic growth and development. TCU girls are 
equipped with knowledge and skills that enable them to participate in the labor market, create 
businesses, and contribute to their families and communities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#76d2b6] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    ✓
                  </div>
                  <span>Economic Importance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#76d2b6] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    ✓
                  </div>
                  <span>Social Impact</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#76d2b6] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    ✓
                  </div>
                  <span>Cultural Significance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#76d2b6] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    ✓
                  </div>
                  <span>Financial Impact and Need</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#76d2b6] h-6 w-6 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    ✓
                  </div>
                  <span>Addressing Burdens and Challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Cards Section */}
      <section className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why TCU Matters</h2>
        <p className="text-gray-700 text-center text-base/7 max-w-3xl mx-auto mb-12">
          Over the last five and a half years, Talitha Cumi Unnati (TCU) has made a profound impact on
          underserved communities, particularly adolescent girls and their families.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative border border-[#247d67] rounded-md overflow-hidden group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-60"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-base/7 mb-2 text-center">{item.title}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-[#d4f3e7] bg-opacity-90 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <p className="text-sm text-gray-700 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Team Members Section */}
      <section className="py-16 bg-gray-50 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-sm rounded-md flex items-center">
              <div className="relative mr-4 flex-shrink-0">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/6376a066770641739c122b12/e2d80516-3a35-49b9-9869-e52723a93fc8/Fr-Bosco.jpg?format=1000w"
                  alt="Irma Maxwell"
                  width={80}
                  height={80}
                  
                  className="size-32 rounded-full object-cover"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">Chairperson, Founder</span>
                <h3 className="text-xl font-bold mb-1">Father Darsi Don Bosco</h3>
                <p className="text-sm text-gray-600">
                Father Darsi Don Bosco holds a doctorate in Moral Theology from the Catholic University of Leuven, Belgium. For many years he has been full-time and part-time collaborator and advocate of youth activities. 
                </p>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm rounded-md flex items-center">
              <div className=" relative mr-4 flex-shrink-0">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/6376a066770641739c122b12/d6fbb7d1-9674-4b75-bdbc-098d2ba5987d/father-bob-stec.jpeg?format=750w"
                  alt="Ann Richmond"
                  width={80}
                  height={80}
                  className="rounded-full object-cover size-32"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">Chairperson, Founder</span>
                <h3 className="text-xl font-bold mb-1">Father Bob Stec</h3>
                <p className="text-sm text-gray-600">
                Father Bob Stec was ordained a priest in 1988.  He has been blessed to serve at Saint Ambrose since December of 2005. In addition to his ministry at Saint Ambrose, he is actively involved in mission outreach in the Dominican Republic (missionpossible.us) and in a wide range of community outreach in the city of Cleveland (onehopeneo.org). 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 relative">        
        <div className="relative z-10 grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-3 p-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative h-60 ${index === 3 ? 'col-span-2' : ''}`}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Statistics Section */}
      <section className="py-16 text-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4">Overview of TCU’s Impact since 2019</h1>
            <p className="text-gray-700 text-center text-base/7 max-w-3xl mx-auto mb-12">Guided by its mission 
to empower through education and community support, TCU has achieved significant 
milestones and delivered measurable outcomes that have transformed lives. </p>
          </div>

      <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex bg-[#e6f1d6] p-3 border border-[#75a43e] rounded-md flex-col-reverse gap-y-3 pl-6"
                >
                  <dt className="text-base/7 text-[#43aa8d]">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-[#75a43e]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
      </section>
    </main>
  )
}

