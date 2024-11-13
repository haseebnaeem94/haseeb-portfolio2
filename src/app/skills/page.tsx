import Navbar from "@/Components/Navbar"

const Skills = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
        <div className="text-[#d19efd] text-[xx-large] font-black text-center m-5" data-aos="flip-right">My Skills</div>
        
        <div className="flex justify-evenly">
            <div className=" text-[#d19efd] text-[larger] font-bold "data-aos="flip-right" >HTML</div>
            <div className="h-8 w-32 rounded-3xl bg-[#d19efd]" data-aos="flip-right" >
            </div>
            </div>
            <br />
            <br />
            <div className="flex justify-evenly">
            <div className=" text-[#d19efd] text-[larger] font-bold" data-aos="flip-right">CSS</div>
            <div className=" h-8 w-32 rounded-3xl bg-[#d19efd]" data-aos="flip-right" >
            </div>
            </div>
            <br />
            <br />
            <div className="flex justify-evenly">
            <div className=" text-[#d19efd] text-[larger] font-bold" data-aos="flip-right">TypeScript</div>
            <div className="h-8 w-32 rounded-3xl bg-[#d19efd]"data-aos="flip-right" >
            </div>
            </div>
            <br />
            <br />
            <div className="flex justify-evenly">
            <div className="text-[#d19efd] text-[larger] font-bold"data-aos="flip-right" >NextJs</div>
            <div className="h-8 w-32 rounded-3xl bg-[#d19efd]" data-aos="flip-right" >
            </div>
            </div>
            </div>
  )
}

export default Skills