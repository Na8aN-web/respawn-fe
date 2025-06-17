import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { JSX } from "react";

const Support = () => {
    return ( 
        <section className="text-white relative overflow-hidden">
            <img src="/support.png" alt="" className="max-w-[150%]"/>
            <div className="flex flex-col gap-[1rem] items-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[100%]">
                <h1 className="font-semibold text-xl sm:text-3xl text-center leading-normal">Have any Questions? We're <br/> Here to Help you</h1>
                <div className="sm:text-xs text-[0.5rem] flex gap-[1rem]">
                    <span className="flex gap-1 items-center">{IoMdCheckmarkCircleOutline({}) as JSX.Element} Instant service provided</span>
                    <span className="flex gap-1 items-center">{IoMdCheckmarkCircleOutline({}) as JSX.Element} Real 24/7 Technical Support</span>
                </div>
                <button className="text-white sm:text-xs text-[0.5rem] rounded sm:py-[0.5rem] py-1 px-[1.3rem] bg-[#7C3AED]">Contact Us</button>
            </div>
        </section>
     );
}
 
export default Support;