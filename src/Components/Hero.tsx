"use client"
import Image from "next/image"
import image1 from"../../public/haseeb 123.png"


const Hero = () => {
  return (
    <div className="flex">
    <div className="h-[39.25rem] w-2/4 ">
        <div className="hero1-image">
            <Image src={image1} alt="haseeb" data-aos="flip-right" />
        </div>
        
    </div>
    <div className=" h-[39.25rem] w-2/4 bg-black text-white pt-64 text-[xx-large] font-black">
        <div className="font-normal text-center items-center">
          Hey Meet me I am Haseeb Naeem
          I am Web Developer and SEO Expert
        
        
        </div>
    </div>
  
</div>
  )
}

export default Hero