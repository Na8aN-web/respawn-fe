const Platform = () => {
    const platformData = [
        {
            img: "/match.png",
            title: "Matchmaking",
            subtitle: "Find the Perfect Teammates & Rivals",
            description: "Respawn's smart matchmaking pairs you with players based on your game preferences, skill level, and playstyle—whether you need a squad for ranked matches or a rival for friendly competition."
        },
        {
            img: "/events.png", 
            title: "Tournaments & Events",
            subtitle: "Compete & Win Big",
            description: "Take your game to the next level with Respawn's tournaments. Compete for prizes, and build your reputation—whether you're a casual or pro. Join or host tournaments effortlessly and showcase your skills!"
        },
        {
            img: "/community.png",
            title: "Gaming Community", 
            subtitle: "Chat, Share, and Connect",
            description: "Respawn is more than gaming—it's a community. Chat, share highlights, post updates, and connect with players worldwide. Stay in the loop with game strategies, esports news, and squad discussions."
        }
    ];

    return (
         <section className="flex flex-col justify-center gap-[3rem] py-[10rem] px-[3rem] text-white">
            <h1 className="text-2xl font-medium text-center ">The Number #1 Gaming Community Platform Worldwide</h1>

            <div className="flex sm:flex-row flex-col gap-[2rem] sm:text-xs text-[0.5rem]">
                {platformData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[1rem]">
                        <div className="flex gap-[1rem]">
                            <img src={item.img} alt=""/>
                            <div>
                                <h1 className="sm:text-lg text-base">{item.title}</h1>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                        <div>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
         </section> 
    );
}
 
export default Platform;