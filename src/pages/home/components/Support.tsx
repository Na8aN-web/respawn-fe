import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { JSX } from "react";

const Support = () => {
    return ( 
        <section 
            className="text-white relative overflow-hidden min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
            style={{
                backgroundImage: "url('/support.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="flex flex-col gap-[1rem] items-center w-[100%] p-4">
                <h1 className="font-semibold text-xl sm:text-[40px] text-center leading-normal text-[#D0BFED]">
                    Have any Questions? We're <br/> Here to Help you
                </h1>
                <div className="sm:text-[16px] text-[0.5rem] flex gap-[1rem]">
                    <span className="flex gap-1 items-center">
                        {IoMdCheckmarkCircleOutline({}) as JSX.Element} Instant service provided
                    </span>
                    <span className="flex gap-1 items-center">
                        {IoMdCheckmarkCircleOutline({}) as JSX.Element} Real 24/7 Technical Support
                    </span>
                </div>
                <button className="text-white sm:text-[16px] text-[0.5rem] rounded sm:py-[0.5rem] py-1 px-[1.3rem] bg-[#7C3AED]">
                    Contact Us
                </button>
            </div>
        </section>
    );
}
 
export default Support;