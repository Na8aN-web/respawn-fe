import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users } from 'lucide-react';


interface Tournament {
    id: number;
    title: string;
    game: string;
    format: string;
    time: string;
    image: string;
    bgColor: string;
}

const tournaments: Tournament[] = [
      {
        id: 1,
        title: "Marvel Rivals",
        game: "Marvel Rivals Ranked",
        format: "Best of 5",
        time: "4:30 PM",
        image: "rivals.jpg",
        bgColor: "from-white to-red-700"
    },
     {
        id: 2,
        title: "Among Us",
        game: "Among Us",
        format: "Standard",
        time: "9:30 PM",
        image: "among.png",
        bgColor: "from-green-600 to-purple-700"
    },
   
   
    {
        id: 3,
        title: "Doom Eternal",
        game: "Doom Eternal Championship",
        format: "Single Elimination",
        time: "8:00 PM",
        image: "doom.png",
        bgColor: "from-red-900 to-orange-700"
    },
    {
        id: 4,
        title: "Valorant",
        game: "Valorant Pro League",
        format: "Best of 3",
        time: "7:30 PM",
        image: "valorant.jpg",
        bgColor: "from-purple-900 to-pink-700"
    },
     {
        id: 5,
        title: "Call Of Duty",
        game: "BLACK OPS 6",
        format: "Single Elimination",
        time: "5:00 PM",
        image: "cod.png",
        bgColor: "from-orange-900 to-yellow-700"
    },
     {
        id: 6,
        title: "FIFA 24",
        game: "FIFA 24 Tournament",
        format: "Single Elimination",
        time: "3:00 PM",
        image: "fc24.jpg",
        bgColor: "from-blue-900 to-blue-700"
    },
   
];

const GamingTournamentCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === tournaments.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? tournaments.length - 1 : currentIndex - 1);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === tournaments.length - 1 ? 0 : currentIndex + 1);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const getCardAt = (offset: number) => {
        const index = (currentIndex + offset + tournaments.length) % tournaments.length;
        return tournaments[index];
    };

    const visibleCards = [
        getCardAt(-1), // previous
        getCardAt(0),  // current
        getCardAt(1),  // next
    ];

    return (
        <div className="w-[600px] h-[500px] p-10 relative overflow-hidden bg-transparent md:bg-[#263549]">
            <div className="relative">
                {/* Cards Container */}
                <div className="relative w-full h-full">
                    {visibleCards.map((tournament, index) => {
                        const isCenter = index === 1;
                        const baseStyle = "absolute top-1/2  transition-all duration-500 ease-in-out";

                        let positionStyles = "";

                        if (index === 0) {
                            // Left card (peek out)
                            positionStyles = "left-[-270px] w-[350px] scale-75  top-[-45px] z-10";
                        } else if (index === 1) {
                            // Center card
                            positionStyles = "left-[55px] w-[400px] scale-100  z-20";
                        } else {
                            // Right card (peek out)
                            positionStyles = "left-[430px] w-[350px] scale-75  top-[-45px] z-10";
                        }

                        return (
                            <div
                                key={`${tournament.id}-${currentIndex}-${index}`}
                                className={`${baseStyle} ${positionStyles}`}
                                style={{ minHeight: '350px' }}
                            >
                                {/* Background Image */}
                                {/* <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${tournament.image})` }}
                                /> */}

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tournament.bgColor} opacity-85`} />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/40" />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                                    <img src={tournament.image} alt={tournament.title} className='w-[390px] h-[220px]' />
                                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                                        <div className="mb-4">

                                        </div>
                                    </div>

                                    {/* Tournament Details */}
                                    {isCenter && (
                                        <div className="flex items-center space-y-3 justify-between">
                                            <div>
                                                <h2 className="text-[16px] text-left text-white">
                                                    {tournament.title}
                                                </h2>
                                                <div className="flex items-center gap-2 text-[12px]">

                                                    <span className="font-semibold">Format:</span>
                                                    <span>{tournament.format}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[12px]">

                                                    <span className="font-semibold">Time:</span>
                                                    <span>{tournament.time}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="w-full bg-transparent text-[12px] border-[1px] border-white text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
                                                    Enter Tournament
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Dot Indicators */}
                <div className="absolute top-96  w-full flex justify-center gap-2 z-30">
                    {tournaments.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-[6px] h-[6px] rounded-full transition-all duration-200 ${index === currentIndex
                                ? 'bg-[#7C3AED] scale-125'
                                : 'bg-white/30 hover:bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamingTournamentCarousel;