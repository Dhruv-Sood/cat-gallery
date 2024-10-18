import { FaGithub } from "react-icons/fa";
import HyperText from "./ui/hyper-text";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-screen flex items-center p-4 fixed top-0 left-0 bg-transparent z-10">
      <div className="w-1/6 flex justify-start">
              <Link href="/" className="cursor-pointer"><HyperText text="Cat Gallery" className="text-2xl font-bold cursor-pointer" /></Link>
      </div>
      <div className="w-2/3 flex justify-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-300 cursor-pointer">
            <HyperText text="Home" className="text-xl cursor-pointer" />
          </Link>
          <span className="text-gray-500 cursor-pointer">/</span>
          <Link href="/cats" className="hover:text-gray-300 cursor-pointer">
            <HyperText text="Cat Gallery" className="text-xl cursor-pointer" />
          </Link>
          <span className="text-gray-500 cursor-pointer">/</span>
          <Link href="/about" className="hover:text-gray-300 cursor-pointer">
            <HyperText text="About" className="text-xl cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="w-1/6 flex justify-end">
        {/* github logo */}
        <FaGithub className="h-6 w-6 cursor-pointer" />
      </div>
    </nav>
  )
}
export default Navbar