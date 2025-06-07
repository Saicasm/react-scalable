import React from 'react';
import Card from '@/components/Card/Card';
import { useInfiniteCharacters } from '../api/get-characters';

const CharactersList: React.FC = () => {
    const commentsQuery = useInfiniteCharacters({
        page: 1,
    });
    console.log('commentsQuery', commentsQuery.data);
    return (
        <div className="text-center  my-16 mx-16 ">
            <div className='mt-8 bg-light-bg-primary items-center rounded-md flex gap-12'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default CharactersList;

