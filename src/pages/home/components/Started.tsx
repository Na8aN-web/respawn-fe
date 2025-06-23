const Started = () => {
    return ( 
        <section className=" flex justify-center flex-col items-center pb-[3rem] px-[20px] md:px-[80px] pt-[7rem]">
            <img src="/fadelogo.png" alt="faded-logo" />
            <div className="flex flex-col gap-[2rem] items-center">
                <h1 className="font-medium sm:text-4xl text-xl text-white">Ready to challenge others?</h1>
                <button className="w-fit text-white sm:text-[20px] text-[15px] rounded sm:py-[0.5rem] py-1 px-[1.3rem] bg-[#7C3AED]">Get Started</button>
            </div>
        </section>
     );
}
 
export default Started;