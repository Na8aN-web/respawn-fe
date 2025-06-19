import { JSX } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import GamingTournamentCarousel from "./Carousel";

const Homeheader = () => {
    return (
        <section className="header h-[100vh] text-white">
            <div className="flex flex-col md:flex-row items-center justify-between h-[100%] px-[20px] md:px-[80px] md:py-[10px] py-[50px]">
                <div className='flex flex-col gap-4'>
                    <h1 className='sm:text-[40px] text-2xl font-semibold leading-snug'>
                        Experience & Join the <br />
                        Ultimate Gaming <br />
                        Community
                    </h1>
                    <p className="sm:text-[16px] text-[1rem]">
                        Your gateway to seamless matchmaking competitive tournaments, <br />
                        and real-time player connections.
                    </p>
                    <div className="btns flex gap-[2rem]">
                        <button className="border border-[#7C3AED] text-white sm:text-[16px] text-[12px] bg-[#7C3AED] rounded py-[0.5rem] px-[1rem]">Get started</button>
                        {/* <button><BsArrowUpRightSquareFill /></button> */}
                        <button className="border border-[#7C3AED] text-white sm:text-[16px] text-[12px] rounded px-[1rem] flex items-center gap-1">
                            Access Tournaments {RiArrowRightUpLine({}) as JSX.Element}
                        </button>
                    </div>
                    <div className="flex items-center my-4">
                        <img src="gamers.png" alt="trusted gamers" /> <p>Trusted by over 1,000+ gamers</p>
                    </div>
                </div>
                <GamingTournamentCarousel />
            </div>
        </section>
    );
}

export default Homeheader;