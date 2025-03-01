"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.jpg"
import img3 from "../../public/img3.jpg"
import img4 from "../../public/img4.jpg"

interface Feature {
  id: string
  title: string
  description: string
  color: string
  image: string
}

export default function FeatureSection() {
  const [activeFeature, setActiveFeature] = useState<string>("feature1")

  const features: Feature[] = [
    {
      id: "feature1",
      title: "Addressing Marginalization",
      description:
        " TCU focuses on girls from marginalized and underserved communities, ensuring that the most vulnerable populations receive access to education. ",
      color: "bg-[#d76a55]",
      image: img1.src,
    },
    {
      id: "feature2",
      title: "Holistic Development",
      description: " Beyond academics, TCU emphasizes life skills, leadership, and personal growth, preparing girls for real-world challenges.",
      color: "bg-[#97c262]",
      image: img2.src,
    },
    {
      id: "feature3",
      title: "Community Transformation",
      description: " By educating girls, TCU fosters positive change within families and communities, promoting equality and sustainable development.",
      color: "bg-[#43aa8d]",
      image: img3.src,
    },
    {
        id: "feature4",
        title: "Supporting Vulnerable Populations",
        description: " TCU shelters abused, trafficked, and neglected girls, providing them with resources and opportunities to rebuild their lives. ",
        color: "bg-[#1987e6]",
        image: img4.src,
      },
  ]

  return (
    <section className="w-full mx-auto max-w-7xl bg-gray-50 px-6 pt-16 lg:px-8 lg:pt-24 lg:pb-28 overflow-hidden bg-[#fef9f8]">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block text-red-400 py-1 text-md font-medium mb-4">Why TCU Matters</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-7xl">
          "Educating Underserved Girls"
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "p-6 rounded-lg cursor-pointer transition-all duration-300",
                  activeFeature === feature.id ? "bg-gray-50 shadow-sm" : "hover:bg-gray-50",
                )}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", feature.color)}>
                    <span className="sr-only">Feature icon</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    {activeFeature === feature.id && <p className="text-gray-600">{feature.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeFeature === feature.id ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
              >
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={activeFeature === feature.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

