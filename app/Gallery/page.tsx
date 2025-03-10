"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Filter, Search } from "lucide-react"
import image1 from "../../public/TCU images/TCU2.jpg"
import image2 from "../../public/TCU images/TCU3.jpg"
import img1 from "../../public/TCU images/TCU4.jpg"
import img2 from "../../public/TCU images/TCU5.jpg"
import img3 from "../../public/TCU images/TCU6.jpg"
import img4 from "../../public/TCU images/TCU7.jpg"
import img5 from "../../public/TCU images/TCU8.jpg"
import img6 from "../../public/TCU images/TCU9.jpg"
import img7 from "../../public/TCU images/TCU10.jpg"
import img8 from "../../public/TCU images/TCU11.jpg"
import img9 from "../../public/TCU images/TCU13.jpg"
import img10 from "../../public/TCU images/TCU14.jpg"




// Define the image data structure
interface ImageItem {
  id: string
  src: string
  alt: string
  category: string[]
  width: number
  height: number
}

const imageData: ImageItem[] = [
    {
        id: "1",
        src:image1.src,
        alt: "Close-up of a leaf with water droplets",
        category: ["Nature", "Flora"],
        width: 600,
        height: 400,
      },
      {
        id: "2",
        src:image2.src,
        alt: "Boats on a lake",
        category: ["Nature"],
        width: 600,
        height: 400,
      },
      {
        id: "3",
        src: img1.src,
        alt: "Colorful pencils",
        category: ["Art"],
        width: 600,
        height: 400,
      },
      {
        id: "4",
        src: img2.src,
        alt: "Fresh fruits including apple and strawberries",
        category: ["Food"],
        width: 600,
        height: 400,
      },
      {
        id: "5",
        src: img3.src,
        alt: "Tree in winter",
        category: ["Nature"],
        width: 600,
        height: 400,
      },
      {
        id: "6",
        src: img4.src,
        alt: "Tree with autumn foliage",
        category: ["Nature"],
        width: 600,
        height: 400,
      },
      {
        id: "7",
        src: img5.src,
        alt: "Silhouettes of buildings at sunset",
        category: ["Architecture"],
        width: 600,
        height: 400,
      },
      {
        id: "8",
        src: img6.src,
        alt: "Modern concrete building with person",
        category: ["Architecture", "People"],
        width: 600,
        height: 400,
      },
      {
        id: "9",
        src: img7.src,
        alt: "Temple architecture",
        category: ["Architecture"],
        width: 600,
        height: 400,
      },
      {
        id: "10",
        src: img8.src,
        alt: "Big Ben clock tower",
        category: ["Architecture", "Landmarks"],
        width: 600,
        height: 400,
      },
      {
        id: "11",
        src: img9.src,
        alt: "Red garage doors",
        category: ["Architecture", "People"],
        width: 600,
        height: 400,
      },
      {
        id: "12",
        src: img10.src,
        alt: "Red garage doors",
        category: ["Architecture", "People"],
        width: 600,
        height: 400,
      },
]

export default function MasonryGallery() {
  const [images, setImages] = useState<ImageItem[]>(imageData)




  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg">
            <div className="relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=${image.height}&width=${image.width}`
                }}
              />
              <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                {image.category.map((cat) => (
                  <span key={`${image.id}-${cat}`} className="text-xs px-2 py-1 bg-black/70 text-white rounded-md">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {images.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No images found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}

