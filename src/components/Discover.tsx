const Discover = () => {
    return ( 
        <section className="flex flex-col text-white text-center gap-[5rem] items-center">
            <div className="flex flex-col items-center gap-[1rem]">
                <h1 className="font-semibold sm:text-2xl text-xl">Discover Skilled Players like You</h1>
                <p className="sm:text-xs text-[0.5rem] w-[60%]">
                    Looking for the perfect teammates or worthy rivals? Respawn's matchmaking system connects you with skilled <br /> players based on your game preferences and skill level. Build your squad and challenge the best
                </p>
            </div>
            <img src="/world.png" alt="world-pic" />
        </section>
     );
}
 
export default Discover;