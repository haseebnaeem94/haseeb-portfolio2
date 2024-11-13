
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='bg-white text-lime-500'>
    <ul className='flex justify-end list-none gap-[1.88rem] p-5 text-[large]'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="./about">About</Link></li>
      <li><Link href="./portfolio">Portfolio</Link></li>
      <li><Link href="./skills">Skills</Link></li>
      <li><Link href="./contact">Contact</Link></li>
    </ul>
  </div>
  )
}

export default Navbar