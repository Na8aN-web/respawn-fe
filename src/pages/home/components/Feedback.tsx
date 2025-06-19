const Feedback = () => {
    const feedbackData = [
        {
            feedback: "Respawn has completely changed the way I connect with fellow gamers. The matchmaking is spot-on, and I've met some amazing teammates. I can't wait to join more tournaments!",
            name: "- Alex “ShadowMaster” P. (Rank: Gold)"
        },
        {
            feedback: "As an aspiring esports pro, Respawn gives me the tools to find the right players and challenge myself in real-time tournaments. The community is incredible!",
            name: "- Jamie “TitanSlayer” T. (Rank: Platinum)"
        },
        {
            feedback: "I've been a part of many gaming platforms, but nothing compares to the seamless experience Respawn offers. It's so easy to organize and join events. 10/10!",
            name: "- Chris “SpeedFury” R. (Rank: Diamond)"
        },
    ]

    return (
        <section className="text-white py-[7rem] px-[3rem] flex flex-col gap-[2rem]">
            <h1 className="font-medium md:text-[32px] text-[24px] mb-8 text-center"><span className="text-[#D0BFED]">Community</span> Feedback</h1>

            <div className="flex flex-col md:flex-row items-center gap-[1rem]">
                {feedbackData.map((item, index) => (
                    <div className="bg-[#263549] p-[1rem] font-light rounded text-[16px] flex flex-col gap-[1rem]">
                        <p>{item.feedback}</p>
                        <span className="italic">{item.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Feedback;