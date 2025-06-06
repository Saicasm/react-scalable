import type React from "react";
import * as data from './sample.json';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl?: string;

}
const CardBody: React.FC = () => {
    return (
        <div className="flex-1">
            <h2 className="text-lg font-semibold">Card Body</h2>
            <p className="text-gray-600">This is the body of the card.</p>
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
    console.log(image)
    return (
        <div
            className={`bg-light-bg-secondary  rounded-3xl shadow-md p-4 flex flex-col items-center`}
        >
            {image && (
                <div className="">
                    <img
                        src={image}
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