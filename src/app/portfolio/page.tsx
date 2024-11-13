import Image from "next/image"
import Link from "next/link"
import image1 from "../../../public/project 1 image.png"
import image2 from "../../../public/resume image.png"
import Navbar from "@/Components/Navbar"


const Portfolio = () => {
  return (
    <div className="bg-black h-screen">
        <Navbar />
        <div className="text-[#d19efd] text-[xx-large] font-black text-center m-5" data-aos="flip-right">My Projects</div>
        <div className="flex justify-evenly">
        <div className="h-96 w-96">
            <div className="h-10">
                <Image src={image1} alt="ecommerce project"  data-aos="flip-right"/>
                <p className="font-bold pt-5 text-[#d19efd]">This is a E-commerce store project developed by using HTML and CSS</p>
                <p className="font-bold text-[#d19efd] text-center pt-10"><Link href="https://ecommerce-store-project-zeta.vercel.app/">View my Project</Link></p>
            </div>
        </div>
        <div className="h-96 w-96 ">
            <div>
                <Image src={image2} alt="resume builder"  data-aos="flip-right"/>
                <p className="font-bold pt-5 text-[#d19efd]">This is an interactive resume builder project developed by using HTML and CSS</p>
                <p className="font-bold text-[#d19efd] text-center pt-10"><Link href="https://dynamic-resume-mocha.vercel.app/">View my Project</Link></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Portfolio