const Mobile = () => {
    return ( 
        <section className="flex flex-col-reverse pb-[1rem] md:flex-row justify-center bg-white relative px-[20px] md:px-[80px] items-center gap-[2rem]">
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                backgroundSize: '5px 5px'
            }}></div>
            <div className="relative flex flex-col gap-[1rem] text-[#1F2937]">
                <h1 className="font-semibold sm:text-[40px] leading-normal">
                    Level up your game with <br />
                    the <span className="text-[#7C3AED]">Respawn </span> Mobile App
                </h1>
                <p className="sm:text-[16px] text-[0.5rem]">
                    Bring the power of Respawn with you, wherever you go! Connect, <br />
                    compete, and conquer all from the palm of your hand.
                </p>
                <div className="flex my-6 gap-[1rem]">
                    <img src="/apple.png" alt="app-store" />
                    <img src="/google.png" alt="google-store" />
                </div>
            </div>
            <img src="/mobile.png" alt="download-on-your-mobile" />
        </section>
     );
}
 
export default Mobile;