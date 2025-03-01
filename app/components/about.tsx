'use client'
import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import aboutimage from "../../public/about.jpg"
import structureImage from "../../public/structure.png"
import { Lens } from '@/components/magicui/lens'

const stats = [
  { label: 'Study Grants Disbursed', value: '$120K' },
  { label: 'Relief Kits Distributed', value: '10,000' },
  { label: 'Community Events Organized', value: '50+' },
  { label: 'Trees Planted', value: '2,000' },
]
const values = [
    {
      name: 'Empower Through Education',
      description: 'Providing study grants to ensure young girls complete their education, covering tuition, books, and essential needs.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Guidance & Mentorship',
      description: 'Pairing each girl with a religious sister mentor for spiritual guidance, emotional support, and practical advice.',
      icon: UserGroupIcon,
    },
    {
      name: 'Skill Development',
      description: 'Organizing workshops and training sessions to equip young women with practical skills for employment and self-reliance.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Support for the Vulnerable',
      description: 'Providing a safe and nurturing space for abused, neglected, or trafficked girls, helping them heal and rebuild their lives.',
      icon: HandRaisedIcon,
    },
    {
      name: 'Faith & Spiritual Growth',
      description: 'Fostering deep faith through Eucharistic Adoration, prayer gatherings, and retreats for students and religious sisters.',
      icon: SparklesIcon,
    },
    {
      name: 'Acts of Mercy',
      description: 'Empowering religious sisters to lead community support efforts, distributing resources, and addressing spiritual and physical needs.',
      icon: SunIcon,
    },
  ];
  
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function About() {
  return (
    <div>
      <main className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1108/632 w-[69.25rem] flex-none bg-linear-to-l from-[#247d67] to-[#e69383] opacity-40"
          />
        </div>
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-[#43aa8d] sm:text-5xl">A Mission of Love,{''} <span className='text-[#d76a55]'> A Vision of Hope </span></h1>
            <p className="mt-8 text-lg font-medium text-base text-pretty leading-relaxed text-gray-500 sm:text-xl/8">
            At Talitha Cumi Unnati (TCU), we empower adolescent girls and women through education, mentorship, and outreach, breaking cycles of oppression and creating brighter futures. Our vision is a society where every young Catholic girl can pursue higher education, overcome adversity, and drive generational transformation.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div className='my-auto'>
                <p>
                Founded in 2019 under the Diocese of Vijayawada, Talitha Cumi Unnati (TCU) empowers marginalized young women and girls through faith-driven education and mentorship. Committed to fostering dignity, self-esteem, and resilience, we help them rise above adversity. Our mission is to transform lives, creating confident, self-reliant leaders for a brighter tomorrow.
                </p>
              </div>
              <div>
                <p>
                TCU empowers adolescent girls and women in India by expanding access to education and addressing challenges like gender inequality, poverty, and domestic violence. Through education, mentorship, and outreach, we break cycles of oppression. Our goal is to create pathways for a brighter, more prosperous future.
                </p>
                <p className="mt-8">
                To create a society where every young Catholic girl, regardless of her circumstances, has the 
opportunity to pursue higher education, realize her full potential, and contribute to reducing 
societal issues such as human trafficking and child marriage, paving the way for generational 
transformation and equality.                 </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex bg-[#e6f1d6] p-3 border border-[#75a43e] rounded-md flex-col-reverse gap-y-3 pl-6">
                  <dt className="text-base/7 text-[#43aa8d]">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-[#75a43e]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-12 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt="About Us"
            src={aboutimage.src}
            className="aspect-9/4 w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-[#43aa8d] sm:text-5xl">Empowering Girls for a Brighter Future</h2>
            <p className="mt-6 max-w-4xl text-lg/8 text-gray-700">
            As a faith-based organization, TCU focuses on addressing the multifaceted needs of young 
            women and girls through programs that heal, empower, and inspire.  
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-500 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-800">
                  <value.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-[#97c262]" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 ">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-[#43aa8d] sm:text-5xl">Organizational Structure of TCU</h2>
            <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
            <div className='flex justify-center max-w-3xl mx-auto max-w-none rounded-2xl object-cover'>
            <img
            src={structureImage.src}
            alt="team structure"
            className='mt-16'
          />
            </div>
          
        </Lens>
          </div>
        </div>
      </main>
    </div>
  )
}
