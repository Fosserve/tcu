import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from "../../public/logo1.png"

const features = [
  {
    name: 'Economic Importance',
    href: '/Economic',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Social Impact',
    href: '/social',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Addressing Burdens and Challenges', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: 'Cultural Significance',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: Squares2X2Icon,
  },
  {
    name: 'Financial Impact',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

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
              <Popover className="relative">
                <PopoverButton className="group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:text-gray-900 focus:ring-2 focus:ring-[#e69383] focus:ring-offset-2 focus:outline-hidden data-open:text-gray-900">
                  <span>About TCU</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 size-5 text-gray-400 group-hover:text-gray-500 group-data-open:text-gray-600 group-data-open:group-hover:text-gray-500"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute z-10 mt-3 -ml-4 w-screen max-w-md transform px-2 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                >
                  <div className="overflow-hidden rounded-lg ring-1 shadow-lg ring-black/5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {features.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0 text-[#d76a55]" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      {callsToAction.map((item) => (
                        <div key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="size-6 shrink-0 text-gray-400" />
                            <span className="ml-3">{item.name}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>

              <a href="/Gallery" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Gallery
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Docs
              </a>
            </PopoverGroup>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-[#d76a55] px-4 py-2 text-base font-medium whitespace-nowrap text-white shadow-xs hover:bg-indigo-700"
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
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {features.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon aria-hidden="true" className="size-6 shrink-0 text-[#d76a55]" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 px-5 py-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <a href="/Gallery" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Gallery
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#d76a55] px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-[#d76a55] hover:text-[#e69383]">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  )
}
