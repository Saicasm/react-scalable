import type React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    disaabled?: boolean;
}
import * as data from './sample.json';

const Card: React.FC<CardProps> = ({ disaabled, ...props }) => {
    const { image, gender, name, status, species } = data.data.characters.results[0];
    console.log(image)
    return (
        <div
            className={`bg-light-bg-secondary dark:bg-dark-bg-primary rounded-lg shadow-md p-6 `}
        >
            Image
            {image && (
                <div className="mb-4">
                    <img
                        src={image}
                        alt={name || "Card Image"}
                        className="  rounded-lg"
                    />
                </div>
            )}
            {/* {title && <h2 className="text-base font-semibold mb-2">{title}</h2>}
      {description && <p className="">{description}</p>} */}
        </div>
    );
}

export default Card;