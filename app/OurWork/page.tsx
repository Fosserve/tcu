"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";
import TCU1 from "../../public/img2.jpg";
import {
  HomeIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  BrainCogIcon,
  LeafIcon,
} from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    suggestions: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        suggestions: "",
      });
      setSubmitted(false);
    }, 3000);
  };
  return (
    <section>
      <div className="relative overflow-hidden bg-cover bg-center">
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
                <span className="block xl:inline text-white">
                  Our Work Changes{" "}
                </span>
                <span className="block text-[#d76a55] xl:inline"> Lives</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
                TCU devotes its time, talent and treasure in transforming
                Deprived Excluded and Marginalized (DEM) communities to serve
                Catholic girls in India.{" "}
              </p>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-gray-400 sm:text-lg md:mt-5 md:max-w-4xl md:text-xl">
                Struck by the lack of adequate opportunities for young,
                marginalized females of rural, remote, and under-resourced
                communities in the Indian state of Andhra Pradesh, Talitha Cumi
                Unnati was founded in 2019.
              </p>
              <div className="flex mt-6 flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="bg-[#d76a55] px-3 py-1.5 rounded-md hover:bg-[#e69383] text-black"
                >
                  Donate Now
                </a>
                <a
                  href="#"
                  className="border border-[#43aa8d] px-3 py-1.5 rounded-md  text-[#43aa8d] hover:bg-[#43aa8d] hover:text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="mt-16 mx-auto px-4 max-w-7xl items-center mx-auto flex gap-5">
        <div className="w-full max-w-1.5xl  text-center bg-[#d4f3e7] border border-[#247d67] rounded-md  px-6 py-4">
          <h1 className="text-4xl text-[#247d67]  font-bold tracking-tight  sm:text-5xl/16">
            Education is key to a brighter, healthier future for these young
            women.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-base/7 text-gray-700 mt-4">
            Many adolescent girls in India discontinue their education due to
            gender inequality, traditional taboos, poverty, domestic violence,
            learning disabilities, and discouragement.
          </p>
          <p className="text-base/7 text-gray-700 mt-4">
            By investing in higher education for young Catholic girls, TCU can
            begin to combat these systemic issues. Education is directly linked
            to a decrease in human trafficking and child marriage rates, among
            other things.
          </p>
          <p className="text-base/7 text-gray-700 mt-4">
            TCU works tirelessly to expand educational opportunities for
            underserved girls to provide a stronger foundation for a prosperous
            life.
          </p>
        </div>
      </div>
      <div className="w-full px-4 mx-auto mt-16 py-16 bg-[#f2fbf8]">
        <div className="container mx-auto px-4">
          <h2 className="sm:text-5xl text-4xl font-medium text-[#247d67] text-center mb-16">
            Program Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-6">
            <div className="bg-[#d4f3e7] border border-[#247d67] p-6 rounded-md group relative">
              <div className="flex flex-col justify-evenly items-center">
                <div className="w-16 h-16 rounded-full bg-[#D76A55] flex items-center justify-center mb-4">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-teal-700 font-medium text-center mb-2">
                  Housing & Basic Needs
                </h3>
                <p className="text-gray-600 text-base/7 text-center">
                  Girls in the program are provided a safe place to live and
                  basic necessities.
                </p>
              </div>
            </div>

            <div className="bg-[#d4f3e7] border border-[#247d67] p-6 rounded-md group relative">
              <div className="flex flex-col justify-evenly items-center">
                <div className="w-16 h-16 rounded-full bg-[#D76A55] flex items-center justify-center mb-4">
                  <GraduationCapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-teal-700 font-medium text-center mb-2">
                  Education
                </h3>
                <p className="text-gray-600 text-base/7 text-center">
                  TCU partners with local schools to provide participants a
                  quality education.
                </p>
              </div>
            </div>

            <div className="bg-[#d4f3e7] border border-[#247d67] p-6 rounded-md group relative">
              <div className="flex flex-col justify-evenly items-center">
                <div className="w-16 h-16 rounded-full bg-[#D76A55] flex items-center justify-center mb-4">
                  <BriefcaseIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-teal-700 font-medium text-center mb-2">
                  Job Training
                </h3>
                <p className="text-gray-600 text-base/7 text-center">
                  TCU works to ensure all girls leave the program with a
                  meaningful job that will support them.
                </p>
              </div>
            </div>
            <div className="bg-[#d4f3e7] border border-[#247d67] p-6 rounded-md group relative">
              <div className="flex flex-col justify-evenly items-center">
                <div className="w-16 h-16 rounded-full bg-[#D76A55] flex items-center justify-center mb-4">
                  <BrainCogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-teal-700 font-medium text-center mb-2">
                  Mentorship
                </h3>
                <p className="text-gray-600 text-base/7 text-center">
                  TCU works with leaders in the area to ensure girls have strong
                  role models.
                </p>
              </div>
            </div>
            <div className="bg-[#d4f3e7] border border-[#247d67] p-6 rounded-md group relative">
              <div className="flex flex-col justify-evenly  items-center">
                <div className="w-16 h-16 rounded-full bg-[#D76A55] flex items-center justify-center mb-4">
                  <LeafIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-teal-700 font-medium text-center mb-2">
                  Faith
                </h3>
                <p className="text-gray-600 text-base/7 text-center">
                  Girls in the program are supported by Catholic priests and
                  nuns, praying, and attending church.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-8 tracking-tight">
                Connect with TCU
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                If you have a question about our work or how you can support TCU
                India, we'd love to hear from you. Send us a message and someone
                from our team will be in touch soon.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-teal-700 mb-2">
                    Email Us Directly
                  </h2>
                  <a
                    href="mailto:talithacumi.smiles@gmail.com"
                    className="text-teal-600 hover:text-teal-800 underline decoration-2 decoration-teal-300 hover:decoration-teal-500 transition-all duration-300"
                  >
                    talithacumi.smiles@gmail.com
                  </a>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-teal-700 mb-2">
                    Mailing Address
                  </h2>
                  <address className="not-italic text-gray-600">
                    <p>2927 Nationwide Parkway</p>
                    <p>Brunswick, OH 44212</p>
                  </address>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {submitted ? (
                <div className="absolute inset-0 flex items-center justify-center bg-teal-50 bg-opacity-90 z-10 animate-fade-in">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-teal-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to
                      you soon.
                    </p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Name{" "}
                    <span className="text-gray-400 text-xs">(required)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm text-gray-500 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm text-gray-500 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email{" "}
                    <span className="text-gray-400 text-xs">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject{" "}
                    <span className="text-gray-400 text-xs">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message{" "}
                    <span className="text-gray-400 text-xs">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="suggestions"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Suggestions or Comments? Share a positive note!{" "}
                    <span className="text-gray-400 text-xs">(required)</span>
                  </label>
                  <textarea
                    id="suggestions"
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-8 py-3 rounded-full font-medium text-white 
                  ${
                    isSubmitting
                      ? "bg-teal-400"
                      : "bg-teal-600 hover:bg-teal-700"
                  } 
                  transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      SUBMIT <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
