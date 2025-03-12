import { JSX } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Homeheader = () => {
    return ( 
        <section className="header h-[80vh] text-white">
            <div className="flex flex-col gap-[2rem] sm:flex-row items-center justify-between h-[100%] px-[3rem] p-[2rem]">
                <div className='flex flex-col gap-4'>
                    <h1 className='sm:text-4xl text-2xl font-semibold leading-snug'>
                        Experience & Join the <br />
                        Ultimate Gaming <br />
                        Community
                    </h1>
                    <p className="sm:text-xs text-[0.5rem]">
                        Your gateway to seamless matchmaking competitive tournaments, <br />
                        and real-time player connections.
                    </p>
                    <div className="btns flex gap-[2rem]">
                        <button className="border border-[#7C3AED] text-white sm:text-xs text-[0.5rem] bg-[#7C3AED] rounded py-[0.5rem] px-[1rem]">Get started</button>
                        {/* <button><BsArrowUpRightSquareFill /></button> */}
                        <button className="border border-[#7C3AED] text-white sm:text-xs text-[0.5rem] rounded px-[1rem] flex items-center gap-1">
                            Access Tournaments {RiArrowRightUpLine && <RiArrowRightUpLine />}
                        </button>
                    </div>
                </div>
                <img src="/heroimg.png" alt="tournament-slide" className="sm:max-w-[25rem] rounded" />
            </div>
        </section>
     );
}
 
export default Homeheader;