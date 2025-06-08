import type React from "react";
import * as data from './sample.json';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl?: string;

}


const CardBody: React.FC = () => {
    return (
        <div className="mx-4 flex justify-between mt-2">
            <span> Name: </span>
            <span>Rick </span>
        </div>
    );
}
const CardFooter: React.FC = () => {
    return (
        <div className="mt-4">
            <button className="">View more</button>
        </div>
    );
}

const Card: React.FC<CardProps> = ({ imageUrl, ...props }) => {
    const { image, gender, name, status, species } = data.data.characters.results[0];
    return (
        <div
            className={`bg-light-bg-secondary  rounded-3xl shadow-md p-4 flex flex-col `}
        >
            {imageUrl && (
                <div className="">
                    <img
                        src={imageUrl}
                        alt={name || "Card Image"}
                        className="  rounded-lg"
                    />
                </div>
            )}
            <CardBody />
            <CardFooter />
        </div>
    );
}

export default Card;