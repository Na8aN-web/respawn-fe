const Arena = () => {
    return ( 
        <section className="bg-gradient-to-bl from-[#D0BFED] via-[#EBE3FA] to-[#7C3AED] flex sm:flex-row flex-col-reverse gap-[2rem] justify-between items-center px-[3rem] pt-[3rem]">
            <img src="/arena.png" alt="" />
            <div className="flex flex-col gap-[2rem]">
                <h1 className="sm:text-3xl text-2xl font-semibold text-[#1F2937] leading-normal">
                    Join A Tournament <br />
                    <span className="text-[#7C3AED]">The arena is waiting for you!</span>
                </h1>
                <p className="sm:text-xs text-[0.5rem] text-[#1F2937]">
                    Ready to show your skills? Join a tournament and compete with top <br /> players for epic prizes and bragging rights. Prove you've got what it <br /> takes to claim victory.Sign up now and let the games begin!
                </p>
                <button className="bg-[#7C3AED] py-[0.5rem] px-[1.2rem] w-fit rounded text-white text-[0.5rem]">Get the app</button>
            </div>
        </section>
     );
}
 
export default Arena;