import React, { useCallback, useEffect, useRef, type ReactNode } from 'react';
import Card from '@/components/Card/Card';
import { useInfiniteCharacters } from '../api/get-characters';
import type { Character } from '@/types';


const CharactersList: React.FC = () => {

    const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading, } = useInfiniteCharacters({})

    // Create a ref to observe the last element
    const observerRef = useRef<HTMLDivElement | null>(null);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        },
        [fetchNextPage, hasNextPage, isFetchingNextPage]
    );


    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '20px',
            threshold: 0,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [handleObserver]);
    if (isLoading) {
        return (
            <div className="flex h-48 w-full items-center justify-center">
                Loading...
            </div>
        );
    }
    const characters = data?.pages.flatMap((page) => page.characters.results) || [];
    if (!characters.length) {
        return (
            <div
                role="list"
                aria-label="characters"
                className="flex h-40 flex-col items-center justify-center bg-white text-gray-500"
            >
                <h4>No characters Found</h4>
            </div>
        );
    }
    const renderCustomBody = (character : Character  ) => (
        <div className="mx-4 flex flex-col  justify-items-start mt-2">
          
            <span>  Name:  {character.name}</span>
      
           
           <span> Status: {character.status}  </span>
            
            
        </div>
    );
    // TODO
   const renderCustomFooter = (data: any) => (
        <div className="mx-4 flex justify-between mt-2">
          {data.name}
        </div>
    );

    return (
        <div className="text-center  my-16 mx-16 h-full ">
            <div className='mt-8 bg-light-bg-primary items-center rounded-md flex flex-wrap gap-4'>
                {characters.map((character) => (
                    <Card key={character.id + character.image} imageUrl={character.image} 
                        renderBody={() => renderCustomBody(character)}
                    />
                ))}
            </div>
            <div ref={observerRef} className="h-10" />
            {isFetchingNextPage && (
                <div className="flex justify-center items-center mt-4">Loading more...</div>
            )}
        </div>
    );
};

export default CharactersList;

