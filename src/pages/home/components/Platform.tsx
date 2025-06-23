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
         <section className="flex flex-col justify-center gap-[3rem] py-[100px] md:py-[10rem] px-[20px] md:px-[80px] text-white">
            <h1 className="md:text-[32px] text-[24px] mb-2 md:mb-16 font-medium text-center ">The Number <span className="text-[#D0BFED]">#1 Gaming Community Platform</span> Worldwide</h1>

            <div className="flex md:flex-row items-center flex-col justify-between gap-[2rem] sm:text-xs text-[12px]">
                {platformData.map((item, index) => (
                    <div key={index} className="flex max-w-[400px] flex-col gap-[32px] md:gap-[1rem]">
                        <div className="flex gap-[1rem]">
                            <img src={item.img} alt=""/>
                            <div>
                                <h1 className="sm:text-[20px] text-[#D0BFED] font-semibold text-base">{item.title}</h1>
                                <p className="text-[12px] font-600">{item.subtitle}</p>
                            </div>
                        </div>
                        <div className="text-[16px] font-light leading-6">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
         </section> 
    );
}
 
export default Platform;