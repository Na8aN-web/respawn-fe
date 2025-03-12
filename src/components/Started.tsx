const Started = () => {
    return ( 
        <section className=" pb-[3rem] px-[3rem] pt-[7rem]">
            <img src="/fadelogo.png" alt="faded-logo" />
            <div className="flex flex-col gap-[2rem] items-center">
                <h1 className="font-medium sm:text-4xl text-xl text-white">Ready to challenge others?</h1>
                <button className="w-fit text-white sm:text-xs text-[0.5rem] rounded sm:py-[0.5rem] py-1 px-[1.3rem] bg-[#7C3AED]">Get Started</button>
            </div>
        </section>
     );
}
 
export default Started;