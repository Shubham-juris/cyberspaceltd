import React from 'react';
import Homeimg1 from '../../assets/Home/Homeimg1.jpg';
import Button from '../Button';

function Hero() {
    return (
        <div className="w-full h-screen">
            <div
                className="w-full h-full bg-center bg-no-repeat bg-cover flex items-center justify-center px-4"
                style={{ backgroundImage: `url(${Homeimg1})` }}
            >
                <div className="w-full max-w-2xl text-center flex flex-col items-center gap-6 bg-black/50 p-6 rounded-xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Welcome to Cyberspace-inc
                    </h1>
                    <p className="text-white text-base sm:text-lg">An IT Job Board</p>
                    <Button text="View Jobs" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
