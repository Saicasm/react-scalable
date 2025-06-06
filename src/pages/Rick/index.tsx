import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

const Rick: React.FC = () => {
    return (
        <div className="text-center  my-16 mx-16 border-2 ">
            <div className='h-20 w-full flex justify-evenly bg-light-bg-secondary items-center rounded-md border-2 border-cyan-950'>
                <span> All Characters</span>
                <span>Search By name</span>
                <span>Recents</span>
            </div>
            <div className='mt-8 bg-light-bg-primary items-center rounded-md border-2 border-cyan-950'>
                <Card />
                Get all characters from the Rick and Morty API.
            </div>

        </div>
    );
};

export default Rick;