import React from 'react';
import CharactersList from './components/characters-list';
import RickOptions from './components/options';

const Rick: React.FC = () => {
    return (
        <div className="text-center  my-16 mx-16 ">
            <RickOptions />
            <CharactersList />
        </div>
    );
};

export default Rick;

