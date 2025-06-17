import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <nav className="bg-[#263549] w=[100%] flex items-center justify-between px-[3rem] py-[0.6rem]">
            <img src="/logo.png" alt="respawn logo" className="w-[5rem]" />

            <ul className={`flex gap-[2rem] text-white md:flex ${isOpen ? 'flex absolute top-[4rem] left-0 right-0 flex-col items-center bg-[#263549] py-4' : 'hidden'} md:relative md:top-0 md:bg-transparent md:py-0`}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>

            <div className={`flex gap-[2rem] md:flex ${isOpen ? 'flex absolute top-[12rem] left-0 right-0 justify-center bg-[#263549] py-4' : 'hidden'} md:relative md:top-0 md:bg-transparent md:py-0`}>
                <button className="border border-[#7C3AED] text-white text-xs rounded py-[0.5rem] px-[1rem]">LOGIN</button>
                <button className="border border-[#7C3AED] text-white text-xs rounded px-[1rem] bg-[#7C3AED]">Create Account</button>
            </div>

            <div className="flex flex-col gap-[2px] cursor-pointer md:hidden" onClick={toggleMenu}>
                <span className={`w-[1rem] h-[1px] rounded bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span> 
                <span className={`w-[0.8rem] h-[1px] rounded flex self-end bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span> 
                <span className={`w-[1rem] h-[1px] rounded bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span> 
            </div>
        </nav>
     );
}
 
export default Navbar;