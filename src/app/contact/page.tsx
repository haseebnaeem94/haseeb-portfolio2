import Navbar from "@/Components/Navbar"

const Contact = () => {
  return (
    <div>
        <Navbar />
        <section className="relative text-[#d19efd] bg-black ">
        <div className="pl-5 pr-5 pt-4 pb-8">
            <div className="flex mb-12 flex-col w-full text-center">
                <h1 className=" mb-4 text-2xl leading-8 font-bold text-[#d19efd] leading-9 "data-aos="flip-right" >Contact Me</h1>
                <p className=" text-base leading-relaxed pl-70"data-aos="flip-right" >Feel free to contact me I am always here to welcome you</p>
            </div>
            <div className="contact-3">
                <div className="flex flex-wrap ">
                    <div className="p-2 ">
                        <div className=" relative ">
                            <label htmlFor="name" className=" text-sm leading-7 text-[#d19efd] ">Name</label>
                            <input type="text" id="name" name="name" className=" pt-1 pb-1 pl-3 pr-3 rounded border border-[#D1D5DB] w-full text-base leading-8 text-[#374151] bg-[#F3F4F6] "></input>
                        </div>
                    </div>
                    <div className=" p-2 w-2/4 ">
                        <div className=" relative ">
                        <label htmlFor="email" className=" text-sm leading-7 text-[#d19efd] ">Email</label>
                        <input type="text" id="email1" name="email" className="pt-1 pb-1 pl-3 pr-3 rounded border border-[#D1D5DB] w-full text-base leading-8 text-[#374151] bg-[#F3F4F6]  "></input>
                        </div>
                    </div>
                    <div className=" p-2 ">
                        <div className=" relative ">
                            <label htmlFor="message" className=" text-sm leading-7 text-[#d19efd] ">Message</label>
                            <textarea id="message" name="message" className=" pt-1 pb-1 pl-3 pr-3 rounded border border-[#D1D5DB] w-full h-32 text-base leading-6 text-[#374151] bg-[#F3F4F6] resize-none " />
                        </div>
                    </div>
                    <div className=" p-2 w-full ">
                        <button className=" flex pt-2 pb-2 pl-8 pr-8 rounded border-[0] text-lg leading-7 text-[#ffffff] bg-[#d19efd] ">Send Message</button>
                    </div>
                    <div className="p-2 pt-8 mt-8 border-t border-[#E5E7EB] w-full text-center  ">
                        <a className="button-message1">haseeb.naeem1994@gmail.com</a>
                        <p className="button-message2">Karachi Sindh Pakistan</p>
                        <span className=" inline-flex  ">
                            <a className=" text-[#6B7280] ">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className=" w-5 h-5 " viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                            </a>
                            <a className=" ml-4 text-[#6B7280] ">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className=" w-5 h-5 " viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
                            </a>
                            <a className=" ml-4 text-[#6B7280] ">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className=" w-5 h-5 " viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
                            </a>
                            <a className=" ml-4 text-[#6B7280] ">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className=" w-5 h-5 " viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

      </section>


    </div>
  )
}

export default Contact