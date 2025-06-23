import { FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <section className="p-[3rem] px-[20px] md:px-[80px] text-white bg-[#263549] flex flex-col gap-[2rem]">
            <div className='flex flex-col sm:flex-row gap-[3rem] justify-between'>
                <div className="flex flex-col gap-[1rem]">
                    <img src="/logo.png" alt="respawn-logo" className="w-[10rem]" />
                    <span className="text-xs">Your leading gaming community platform</span>
                    <span className="w-[100%] h-[0.1px] bg-[#D9D9D9]"></span>
                    <span className='text-xs'>Social media</span>
                    <span className='flex items-center gap-[1rem]'>
                        <img src='ig.png' alt='instagram' className='h-[32px] w-[32px]'/>
                        <img src='x.png' alt='x' className='h-[25px] w-[25px]'/>
                        <img src='linkedin.png' alt='instagram' className='h-[32px] w-[32px]'/>
                    </span>
                </div>

                <div className='md:text-[16px] text-xs list-none flex flex-col gap-[2rem]'>
                    <h1 className='text-[16px] font-semibold'>Company Links</h1>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Tournaments</li>
                    <li>Community</li>
                </div>
                <div className='md:text-[16px] text-xs list-none flex flex-col gap-[2rem]'>
                    <h1 className='text-[16px]  font-semibold'>Legal links</h1>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                </div>
                <div className='md:text-[16px] text-xs list-none flex flex-col gap-[2rem]'>
                    <h1 className='text-[16px] font-semibold'>Newsletter Sign-Up</h1>
                    <li className='leading-6'>Stay updated with the latest <br /> tournaments, news, and gaming tips!</li>
                    <li className='rounded overflow-hidden'>
                        <input type="text" placeholder='janedoe@gmail.com' className='p-[0.5rem]'/>
                        <button className='p-[12.5px] bg-[#7C3AED]'>Subscribe</button>
                    </li>
                </div>
            </div>

            <div className="text-xs mt-[2rem]">© {new Date().getFullYear()} Respawn. All Rights Reserved.</div>
        </section>
     );
}
 
export default Footer;