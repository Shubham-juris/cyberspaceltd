import React from 'react';
import Button from '../Button';

function ViewProject() {
    return (
        <div className="max-w-4xl px-4 my-10 mx-auto flex flex-col gap-6 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
                Welcome to Cyberspace-Inc
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
                Welcome to the Cyberspace Inc Job Board, your gateway to exciting career opportunities in the technology industry. Whether you're a seasoned professional looking for your next challenge or a recent graduate eager to kick-start your career, you'll find a diverse range of roles and opportunities to explore.
            </p>
            <div>
                <Button text="View Projects" />
            </div>
        </div>
    );
}

export default ViewProject;
