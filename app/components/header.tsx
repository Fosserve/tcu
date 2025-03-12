import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  Bars3Icon,

  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from "../../public/logo1.png"

// const features = [
//   {
//     name: 'Economic Importance',
//     href: '/Economic',
//     description: 'Get a better understanding of where your traffic is coming from.',
//     icon: ChartBarIcon,
//   },
//   {
//     name: 'Social Impact',
//     href: '/social',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     icon: CursorArrowRaysIcon,
//   },
//   { name: 'Addressing Burdens and Challenges', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
//   {
//     name: 'Cultural Significance',
//     href: '#',
//     description: "Connect with third-party tools that you're already using.",
//     icon: Squares2X2Icon,
//   },
//   {
//     name: 'Financial Impact',
//     href: '#',
//     description: 'Build strategic funnels that will drive your customers to convert',
//     icon: ArrowPathIcon,
//   },
// ]

export default function Header() {
  return (
    <div className="relative bg-[#fdfcfc]">
      <Popover className="relative bg-[#fdfcfc] ">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <img
                  alt=""
                  src={logo.src}
                  className="h-16 w-auto sm:h-16"
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-[#e69383] focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </PopoverButton>
            </div>
            <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
            <a href="/About" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About TCU
              </a>

              <a href="/Gallery" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Gallery
              </a>
              <a href="/OurWork" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Our Work
              </a>
            </PopoverGroup>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="/Donate"
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-[#d76a55] px-4 py-2 text-base font-medium whitespace-nowrap text-white shadow-xs hover:bg-[#d76a55]"
              >
                Donate
              </a>
            </div>
          </div>
        </div>

        <PopoverPanel
          transition
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-100 data-leave:ease-in md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white ring-1 shadow-lg ring-black/5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    alt="Your Company"
                    src={logo.src}
                    className="h-8 w-auto"
                  />
                </div>
                <div className="-mr-2">
                  <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-[#e69383] focus:outline-hidden focus:ring-inset">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div className="space-y-6 px-5 py-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <a href="/About" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  About TCU
                </a>
                <a href="/Gallery" className="text-base font-medium text-gray-900 hover:text-gray-700 active:bg-rose">
                  Gallery
                </a>
                <a href="/OurWork" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Our Work
                </a>
              </div>
              <div>
                <a
                  href="/Donate"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#d76a55] px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  )
}
