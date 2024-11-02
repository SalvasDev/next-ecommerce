'use client';

import Image from "next/image"
import { useState } from "react"

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/19528754/pexels-photo-19528754/free-photo-of-paisaje-montanas-italia-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ]

const ProductImages = () => {

  const [ index, setIndex ] = useState(0)

  return (
    <div>
      <div className="">
        <div className="h-[500px] relative">
          <Image 
            src={images[index].url}
            fill 
            alt="" 
            sizes="30vw" 
            className="object-cover rounded-md" />
        </div>
        <div className="flex justify-between gap-4 mt-8">
            {
              images.map((img, index) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(index)}>
                  <Image 
                    src={img.url}
                    fill 
                    alt="" 
                    sizes="30vw" 
                    className="object-cover rounded-md" />
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default ProductImages