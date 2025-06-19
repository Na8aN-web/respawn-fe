const Discover = () => {
    return ( 
        <section className="flex flex-col text-white text-center gap-[5rem] px-[20px] md:px-[80px] items-center">
            <div className="flex flex-col items-center gap-[1rem]">
                <h1 className="font-semibold sm:text-[32px] text-xl">Discover Skilled Players like You</h1>
                <p className="sm:text-[16px] my-4 text-[0.5rem] md:w-full w-[60%]">
                    Looking for the perfect teammates or worthy rivals? Respawn's matchmaking system connects you with skilled <br /> players based on your game preferences and skill level. Build your squad and challenge the best
                </p>
            </div>
            <img src="/world.png" alt="world-pic" />
        </section>
     );
}
 
export default Discover;