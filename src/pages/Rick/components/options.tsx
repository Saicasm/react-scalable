import type React from "react";



const RickOptions: React.FC = () => {
    return (
        <>
            <div className='h-20 w-full flex justify-evenly bg-light-bg-secondary items-center rounded-md border-2 '>
                <span> All Characters</span>
                <span>Search By name</span>
                <span>Recents</span>
            </div>
        </>
    );
}

export default RickOptions;